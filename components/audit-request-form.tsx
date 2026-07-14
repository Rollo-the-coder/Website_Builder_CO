"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/button";
import {
  BUDGET_OPTIONS,
  CONTACT_INTENTS,
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
  "w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 transition focus:border-accent focus:bg-cloud focus:outline-none";

const successCopy: Record<ContactIntent, { heading: string; body: string }> = {
  audit: {
    heading: "Your request is in.",
    body: "I'll review it and follow up with the next step.",
  },
  fit_call: {
    heading: "Fit call request received.",
    body: "I'll follow up to schedule a 20-minute call—usually within one business day.",
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
  const [pendingIntent, setPendingIntent] = useState<ContactIntent | null>(null);
  const [startedAt] = useState(() => Date.now());
  const formStarted = useRef(false);
  const intentRef = useRef<ContactIntent>("audit");

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
    const intent = intentRef.current;
    data.intent = intent;

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
      setPendingIntent(null);
      return;
    }

    setPendingIntent(intent);
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
        setPendingIntent(null);
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
      setPendingIntent(null);
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or email erik@gotta.build.");
      setPendingIntent(null);
    }
  }

  if (status === "success") {
    const heading = successCopy[submittedIntent].heading;
    return (
      <motion.div
        className="card text-center"
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
      className="space-y-5"
      aria-describedby="form-status"
      onFocusCapture={markFormStart}
    >
      {/* Honeypot field: visually hidden, must remain empty. */}
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
          className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-2.5 text-sm leading-relaxed text-ink"
          role="status"
        >
          Starting point:{" "}
          <span className="font-semibold text-ink">
            {packageHandoff.label}
          </span>{" "}
          (from {packageHandoff.setup}). The audit will confirm whether this is the right fit — you
          can change the fields below.
        </p>
      ) : (
        <p className="rounded-lg border border-line bg-canvas/70 px-3 py-2.5 text-xs leading-relaxed text-ink-muted">
          Submit your website and a short description of what you want to improve. I&apos;ll review
          the request and let you know whether it is a strong fit for a detailed audit.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Field label="City or service area" name="city" error={errors.city}>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="e.g. Bellevue"
            className={fieldBase}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "city-error" : undefined}
          />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Required for fit calls"
            className={fieldBase}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
          />
          {!errors.phone ? (
            <p id="phone-hint" className="mt-1 text-xs text-ink-muted">
              Optional for audits. Required if you request a fit call.
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
          rows={4}
          className={cn(fieldBase, "resize-y")}
          placeholder="Messaging, leads, bookings, payments, operations…"
          required
          aria-invalid={Boolean(errors.biggestProblem)}
          aria-describedby={errors.biggestProblem ? "biggestProblem-error" : undefined}
        />
      </Field>

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

      {errors.intent ? (
        <p className="text-xs text-accent-blue" role="alert">
          {errors.intent}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {CONTACT_INTENTS.map((intent) => {
          const isPrimary = intent === "audit";
          const label = intent === "audit" ? "Request my audit" : "Request a fit call";
          const submittingThis = status === "submitting" && pendingIntent === intent;
          return (
            <Button
              key={intent}
              type="submit"
              variant={isPrimary ? "primary" : "secondary"}
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
              onClick={() => {
                intentRef.current = intent;
              }}
            >
              {submittingThis ? "Sending…" : label}
            </Button>
          );
        })}
      </div>
      <p className="text-xs text-ink-muted">
        Same form either way. I&apos;ll follow up with next steps—usually within one business day.
      </p>
      <p className="text-xs text-ink-muted">
        By submitting, you agree to be contacted about your request. Details stay private.
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
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
