"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/button";
import {
  BUDGET_OPTIONS,
  HELP_OPTIONS,
  contactSchema,
  getPackageHandoff,
  type ContactIntent,
} from "@/lib/contact-schema";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";
import { trackEvent } from "@/components/analytics";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string>;

const fieldBase =
  "w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink placeholder:text-ink-muted/70 transition focus:border-accent focus:bg-cloud focus:outline-none sm:px-4 sm:py-2.5";

const successCopy: Record<ContactIntent, { heading: string; body: string }> = {
  audit: {
    heading: "Your request is in.",
    body: "I'll review it and follow up with the next step.",
  },
  fit_call: {
    heading: "Request received — I'll call you.",
    body: "I'll follow up by phone to schedule a short call—usually within one business day.",
  },
};

export function AuditRequestForm() {
  const reduce = useReducedMotion();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");
  const [submittedIntent, setSubmittedIntent] = useState<ContactIntent>("audit");
  const [successMessage, setSuccessMessage] = useState<string>(successCopy.audit.body);
  const [preferCall, setPreferCall] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const formStarted = useRef(false);

  const interest = searchParams.get("interest");
  const packageHandoff = getPackageHandoff(searchParams.get("package"));
  const defaultHelp =
    interest === "founding"
      ? "Founding client project"
      : packageHandoff?.helpWith ?? "";
  const defaultBudget = packageHandoff?.budget ?? "";

  function markFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("form_start", { form: "audit_request" });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setServerMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const wantsCall = data.preferCall === "on";
    delete data.preferCall;
    data.intent = wantsCall ? "fit_call" : "audit";

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setServerMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => ({}))) as {
        message?: string;
        delivered?: boolean;
      };

      if (!res.ok) {
        setStatus("error");
        setServerMessage(body.message || "Something went wrong. Please try again or email erik@gotta.build.");
        return;
      }

      const copy = successCopy[parsed.data.intent];
      setSubmittedIntent(parsed.data.intent);
      setStatus("success");
      setSuccessMessage(
        body.delivered === false && body.message ? body.message : copy.body,
      );
      trackEvent("form_completion", {
        help_with: parsed.data.helpWith,
        intent: parsed.data.intent,
        package_interest: parsed.data.packageInterest || undefined,
        delivered: body.delivered !== false,
      });
      form.reset();
      setPreferCall(false);
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or email erik@gotta.build.");
    }
  }

  if (status === "success") {
    const heading = successCopy[submittedIntent].heading;
    return (
      <motion.div
        className="text-center"
        role="status"
        aria-live="polite"
        initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 0.45, ease: easeOut }}
      >
        <motion.div
          className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage text-ink"
          initial={reduce ? false : { scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, ease: easeOut, delay: 0.08 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <motion.path
              d="M5 12.5l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={reduce ? { duration: 0 } : { duration: 0.45, ease: easeOut, delay: 0.2 }}
            />
          </svg>
        </motion.div>
        <h2 className="mt-4 text-xl font-semibold text-ink">{heading}</h2>
        <p className="mt-2 text-sm text-ink-soft">{successMessage}</p>

        <Button className="mt-6" variant="secondary" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-3 sm:space-y-5"
      aria-describedby="form-status"
      onFocusCapture={markFormStart}
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={String(startedAt)} />
      {packageHandoff ? (
        <input type="hidden" name="packageInterest" value={packageHandoff.label} />
      ) : null}

      {packageHandoff ? (
        <p
          className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 text-[13px] leading-snug text-ink sm:py-2.5 sm:text-sm sm:leading-relaxed"
          role="status"
        >
          Starting point:{" "}
          <span className="font-semibold text-ink">{packageHandoff.label}</span> (from{" "}
          {packageHandoff.setup}). Audit confirms fit — you can change fields below.
        </p>
      ) : (
        <p className="rounded-lg border border-line bg-canvas/70 px-3 py-2 text-[12px] leading-snug text-ink-muted sm:py-2.5 sm:text-xs sm:leading-relaxed">
          <span className="lg:hidden">Website + what you want to improve. I’ll confirm fit.</span>
          <span className="hidden lg:inline">
            Submit your website and a short description of what you want to improve. I&apos;ll review
            the request and let you know whether it is a strong fit for a detailed audit.
          </span>
        </p>
      )}

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
        <Field label="Name" name="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldBase}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field label="Email" name="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            className={fieldBase}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field label="Business name" name="businessName" required error={errors.businessName}>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            className={fieldBase}
            required
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
          />
        </Field>
        <Field label="Website URL" name="websiteUrl" error={errors.websiteUrl}>
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="text"
            inputMode="url"
            placeholder="https://…"
            className={fieldBase}
            aria-invalid={Boolean(errors.websiteUrl)}
            aria-describedby={errors.websiteUrl ? "websiteUrl-error" : undefined}
          />
        </Field>

        <Field label="Phone" name="phone" required={preferCall} error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={preferCall ? "Required for a call" : "Optional"}
            className={fieldBase}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
          />
          {!errors.phone ? (
            <p id="phone-hint" className="mt-1 hidden text-xs text-ink-muted sm:block">
              {preferCall
                ? "Needed so I can reach you to schedule a short call."
                : "Optional — add it if you'd rather talk by phone."}
            </p>
          ) : null}
        </Field>

        <Field
          label="Project interest"
          name="helpWith"
          required
          error={errors.helpWith}
          className="sm:col-span-2"
        >
          <select
            id="helpWith"
            name="helpWith"
            className={fieldBase}
            defaultValue={defaultHelp}
            required
            aria-invalid={Boolean(errors.helpWith)}
            aria-describedby={errors.helpWith ? "helpWith-error" : undefined}
          >
            <option value="" disabled>
              Choose one…
            </option>
            {HELP_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget range" name="budget" error={errors.budget} className="sm:col-span-2">
          <select
            id="budget"
            name="budget"
            className={fieldBase}
            defaultValue={defaultBudget}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            <option value="">Optional — choose one…</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="What would you most like to improve?"
        name="biggestProblem"
        required
        error={errors.biggestProblem}
      >
        <textarea
          id="biggestProblem"
          name="biggestProblem"
          rows={3}
          className={cn(fieldBase, "min-h-[4.5rem] resize-y sm:min-h-[6rem]")}
          placeholder="Messaging, leads, bookings, payments, operations…"
          required
          aria-invalid={Boolean(errors.biggestProblem)}
          aria-describedby={errors.biggestProblem ? "biggestProblem-error" : undefined}
        />
      </Field>

      <div className="rounded-lg border border-line bg-canvas/60 px-3 py-2.5 sm:px-4 sm:py-3">
        <label className="flex cursor-pointer items-start gap-2.5 sm:gap-3">
          <input
            id="preferCall"
            name="preferCall"
            type="checkbox"
            checked={preferCall}
            onChange={(event) => setPreferCall(event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-line text-accent focus:ring-accent"
          />
          <span>
            <span className="block text-[13px] font-medium text-ink sm:text-sm">
              Prefer a quick call instead of email
            </span>
            <span className="mt-0.5 block text-[11px] text-ink-muted sm:text-xs">
              Add your phone above if checked.
            </span>
          </span>
        </label>
      </div>

      {status === "error" && serverMessage ? (
        <p
          id="form-status"
          role="alert"
          className="rounded-xl border border-accent-blue/30 bg-lavender px-4 py-3 text-sm text-ink"
        >
          {serverMessage}
        </p>
      ) : (
        <span id="form-status" className="sr-only" aria-live="polite">
          {status === "submitting" ? "Submitting your request" : ""}
        </span>
      )}

      <div>
        <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Request my audit"}
        </Button>
      </div>
      <p className="text-[11px] leading-snug text-ink-muted sm:text-xs">
        <span className="lg:hidden">
          Reply usually within one business day. Details stay private.
        </span>
        <span className="hidden lg:inline">
          I&apos;ll follow up with next steps—usually within one business day. By submitting, you
          agree to be contacted about your request. Details stay private.
        </span>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
  className,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1 block text-[13px] font-medium text-ink sm:mb-1.5 sm:text-sm"
      >
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-xs text-accent-blue" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
