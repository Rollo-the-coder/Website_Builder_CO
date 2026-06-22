import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

// Best-effort, in-memory rate limiting. This resets on redeploy and is per-instance.
// For production hardening, replace with a durable store (e.g. Upstash) and/or Turnstile.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 3_000;
const hits = new Map<string, number[]>();
const CONTACT_FORM_MODES = ["demo", "live"] as const;
type ContactFormMode = (typeof CONTACT_FORM_MODES)[number];

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

export async function POST(req: Request) {
  const ip = getIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please wait a moment and try again." },
      { status: 429 },
    );
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
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (mode === "live" && (!apiKey || !toEmail || !fromEmail)) {
    console.error("[contact] CONTACT_FORM_MODE=live but delivery env is incomplete.");
    return NextResponse.json(
      {
        ok: false,
        message:
          "This form is temporarily unavailable. Please try again shortly while delivery is being configured.",
      },
      { status: 503 },
    );
  }

  // Demo mode intentionally captures requests without claiming inbox delivery.
  if (!apiKey || !toEmail || !fromEmail) {
    console.warn(
      "[contact] Demo capture only: delivery env missing. Submission received but not emailed.",
      { mode, name: data.name, email: data.email, helpWith: data.helpWith },
    );
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        message:
          "Request captured in demo mode. Enable CONTACT_FORM_MODE=live with email env vars before production launch.",
      },
      { status: 202 },
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const lines = [
      `Name: ${data.name}`,
      `Business: ${data.businessName || "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Website: ${data.websiteUrl || "-"}`,
      `Business type: ${data.businessType || "-"}`,
      `Help with: ${data.helpWith}`,
      `Timeline: ${data.timeline || "-"}`,
      `Budget: ${data.budget || "-"}`,
      `Preferred contact: ${data.preferredContact || "-"}`,
      "",
      "Biggest problem:",
      data.biggestProblem,
    ];

    const { error } = await resend.emails.send({
      from: `${site.name} <${fromEmail}>`,
      to: [toEmail],
      reply_to: data.email,
      subject: `New audit request — ${data.name}${data.businessName ? ` (${data.businessName})` : ""}`,
      text: lines.join("\n"),
      html: `<pre style="font-family:ui-monospace,monospace;font-size:14px;white-space:pre-wrap">${escapeHtml(
        lines.join("\n"),
      )}</pre>`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, message: "We couldn't send your request right now. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
