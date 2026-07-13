import { NextResponse } from "next/server";
import { ServerClient } from "postmark";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

// Best-effort, in-memory rate limiting. Resets on redeploy and is per-instance.
// For heavier abuse, add Upstash Redis and/or Cloudflare Turnstile.
const WINDOW_MS = 15 * 60_000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 3_000;
const MAX_BODY_BYTES = 32_768;
const hits = new Map<string, number[]>();
const CONTACT_FORM_MODES = ["demo", "live"] as const;
type ContactFormMode = (typeof CONTACT_FORM_MODES)[number];

const ALLOWED_ORIGINS = new Set(
  [
    site.url,
    "https://gotta.build",
    "https://www.gotta.build",
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
    process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : null,
    process.env.NODE_ENV !== "production" ? "http://localhost:3000" : null,
    process.env.NODE_ENV !== "production" ? "http://127.0.0.1:3000" : null,
  ].filter((value): value is string => Boolean(value)),
);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function getIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function resolveContactFormMode(): ContactFormMode {
  const configured = process.env.CONTACT_FORM_MODE?.trim().toLowerCase();
  if (configured && CONTACT_FORM_MODES.includes(configured as ContactFormMode)) {
    return configured as ContactFormMode;
  }

  // Safe default: Vercel production is live; local/dev/preview stays demo unless explicitly set.
  if (process.env.VERCEL_ENV === "production") {
    return "live";
  }

  return "demo";
}

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (origin) {
    if (ALLOWED_ORIGINS.has(origin)) return true;
    try {
      const host = new URL(origin).hostname;
      if (host.endsWith(".vercel.app")) return true;
      if (host === "gotta.build" || host === "www.gotta.build") return true;
    } catch {
      return false;
    }
    return false;
  }

  const referer = req.headers.get("referer");
  if (!referer) return process.env.NODE_ENV !== "production";
  try {
    const host = new URL(referer).hostname;
    return (
      host === "gotta.build" ||
      host === "www.gotta.build" ||
      host.endsWith(".vercel.app") ||
      host === "localhost" ||
      host === "127.0.0.1"
    );
  } catch {
    return false;
  }
}

function resolveToEmail(): string | undefined {
  return process.env.CONTACT_TO_EMAIL?.trim() || site.publicContactEmail || undefined;
}

function resolveFromEmail(): string | undefined {
  return process.env.CONTACT_FROM_EMAIL?.trim() || site.publicContactEmail || undefined;
}

function resolvePostmarkToken(): string | undefined {
  return process.env.POSTMARK_SERVER_TOKEN?.trim() || undefined;
}

function directEmailHint(): string {
  const inbox = site.publicContactEmail || "erik@gotta.build";
  return `Please email ${inbox} directly.`;
}

export async function POST(req: Request) {
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ ok: false, message: "Invalid request origin." }, { status: 403 });
  }

  const ip = getIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many requests. Please wait a few minutes or ${directEmailHint().toLowerCase()}`,
      },
      { status: 429 },
    );
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, message: "Request too large." }, { status: 413 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Please check the form and try again." }, { status: 422 });
  }

  const data = parsed.data;

  // Honeypot: silently accept to avoid signaling bots, but do not deliver.
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  // Lightweight anti-bot heuristic: submissions created too quickly are silently dropped.
  const startedAt = Number(data.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const mode = resolveContactFormMode();
  const serverToken = resolvePostmarkToken();
  const toEmail = resolveToEmail();
  const fromEmail = resolveFromEmail();

  if (mode === "live" && (!serverToken || !toEmail || !fromEmail)) {
    console.error("[contact] Live mode missing delivery config.", {
      hasToken: Boolean(serverToken),
      hasTo: Boolean(toEmail),
      hasFrom: Boolean(fromEmail),
    });
    return NextResponse.json(
      {
        ok: false,
        message: `This form is temporarily unavailable. ${directEmailHint()}`,
      },
      { status: 503 },
    );
  }

  // Demo mode intentionally captures requests without claiming inbox delivery.
  if (!serverToken || !toEmail || !fromEmail) {
    console.warn("[contact] Demo capture only — delivery env incomplete.", {
      mode,
      helpWith: data.helpWith,
      hasEmail: Boolean(data.email),
    });
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        message:
          "Request captured in demo mode. Enable live delivery env vars before production launch.",
      },
      { status: 202 },
    );
  }

  try {
    const client = new ServerClient(serverToken);

    const summaryLines = [
      `Name: ${data.name}`,
      `Business: ${data.businessName || "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Website: ${data.websiteUrl || "-"}`,
      `City / service area: ${data.city || "-"}`,
      `Project interest: ${data.helpWith}`,
      `Budget: ${data.budget || "-"}`,
      "",
      "What they want to improve:",
      data.biggestProblem,
    ];
    const summaryText = summaryLines.join("\n");
    const summaryHtml = `<pre style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;line-height:1.5;white-space:pre-wrap;margin:0">${escapeHtml(
      summaryText,
    )}</pre>`;

    await client.sendEmail({
      From: `${site.name} <${fromEmail}>`,
      To: toEmail,
      ReplyTo: data.email,
      Subject: `New audit request — ${data.name}${data.businessName ? ` (${data.businessName})` : ""}`,
      TextBody: summaryText,
      HtmlBody: summaryHtml,
      MessageStream: "outbound",
      Tag: "audit-request",
    });

    // Confirmation to the submitter. Failure here should not fail the form —
    // the internal notification above is the source of truth for the lead.
    try {
      const firstName = data.name.trim().split(/\s+/)[0] || data.name;
      const confirmIntro = [
        `Hi ${firstName},`,
        "",
        `Thanks for reaching out to ${site.name}. We received your audit request and will review it shortly.`,
        "You'll hear back with next steps soon — usually within one business day.",
        "",
        "Here's a copy of what you submitted:",
        "",
      ].join("\n");
      const confirmOutro = [
        "",
        "If anything looks off, just reply to this email.",
        "",
        `— ${site.name}`,
        fromEmail,
      ].join("\n");

      await client.sendEmail({
        From: `${site.name} <${fromEmail}>`,
        To: data.email,
        ReplyTo: fromEmail,
        Subject: `We received your audit request — ${site.name}`,
        TextBody: `${confirmIntro}${summaryText}${confirmOutro}`,
        HtmlBody: [
          `<p>Hi ${escapeHtml(firstName)},</p>`,
          `<p>Thanks for reaching out to ${escapeHtml(site.name)}. We received your audit request and will review it shortly.</p>`,
          `<p>You'll hear back with next steps soon — usually within one business day.</p>`,
          `<p><strong>Here's a copy of what you submitted:</strong></p>`,
          summaryHtml,
          `<p>If anything looks off, just reply to this email.</p>`,
          `<p>— ${escapeHtml(site.name)}<br>${escapeHtml(fromEmail)}</p>`,
        ].join(""),
        MessageStream: "outbound",
        Tag: "audit-request-confirmation",
      });
    } catch (confirmErr) {
      const message = confirmErr instanceof Error ? confirmErr.message : "unknown";
      console.error("[contact] Confirmation auto-reply failed:", message);
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error("[contact] Postmark error:", message);
    return NextResponse.json(
      {
        ok: false,
        message: `We couldn't send your request right now. ${directEmailHint()}`,
      },
      { status: 502 },
    );
  }
}
