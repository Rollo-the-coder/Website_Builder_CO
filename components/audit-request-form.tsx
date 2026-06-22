"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { HELP_OPTIONS, CONTACT_METHODS, contactSchema } from "@/lib/contact-schema";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string>;

const fieldBase =
  "w-full rounded-xl border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 transition focus:border-accent focus:bg-surface focus:outline-none";

export function AuditRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>(
    "Thanks — your audit request is in. You'll get a reply with next steps shortly.",
  );
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setServerMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
        setServerMessage(body.message || "Something went wrong. Please try again or email directly.");
        return;
      }

      setStatus("success");
      setSuccessMessage(
        body.delivered === false && body.message
          ? body.message
          : "Thanks — your audit request is in. You'll get a reply with next steps shortly.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or email directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center" role="status" aria-live="polite">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage text-ink">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-ink">Request received</h2>
        <p className="mt-2 text-sm text-ink-soft">
          {successMessage}
        </p>
        <Button className="mt-6" variant="secondary" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      {/* Honeypot field: visually hidden, must remain empty. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={String(startedAt)} />

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
        <Field label="Business name" name="businessName" error={errors.businessName}>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            className={fieldBase}
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
          />
        </Field>
        <Field label="Email" name="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldBase}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field label="Phone (optional)" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldBase}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
        <Field label="Current website URL" name="websiteUrl" error={errors.websiteUrl}>
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="text"
            inputMode="url"
            placeholder="https://"
            className={fieldBase}
            aria-invalid={Boolean(errors.websiteUrl)}
            aria-describedby={errors.websiteUrl ? "websiteUrl-error" : undefined}
          />
        </Field>
        <Field label="Business type / niche" name="businessType" error={errors.businessType}>
          <input
            id="businessType"
            name="businessType"
            type="text"
            className={fieldBase}
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={errors.businessType ? "businessType-error" : undefined}
          />
        </Field>
      </div>

      <Field label="What do you need help with?" name="helpWith" required error={errors.helpWith}>
        <select
          id="helpWith"
          name="helpWith"
          className={fieldBase}
          defaultValue=""
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

      <Field
        label="Biggest website or business-system problem"
        name="biggestProblem"
        required
        error={errors.biggestProblem}
      >
        <textarea
          id="biggestProblem"
          name="biggestProblem"
          rows={4}
          className={cn(fieldBase, "resize-y")}
          placeholder="What's not working, or what would you love to automate?"
          required
          aria-invalid={Boolean(errors.biggestProblem)}
          aria-describedby={errors.biggestProblem ? "biggestProblem-error" : undefined}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Timeline" name="timeline" error={errors.timeline}>
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="e.g. 4–6 weeks"
            className={fieldBase}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
          />
        </Field>
        <Field label="Budget range (optional)" name="budget" error={errors.budget}>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder="Optional"
            className={fieldBase}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          />
        </Field>
        <Field label="Preferred contact" name="preferredContact" error={errors.preferredContact}>
          <select
            id="preferredContact"
            name="preferredContact"
            className={fieldBase}
            defaultValue="Email"
            aria-invalid={Boolean(errors.preferredContact)}
            aria-describedby={errors.preferredContact ? "preferredContact-error" : undefined}
          >
            {CONTACT_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {status === "error" && serverMessage ? (
        <p id="form-status" role="alert" className="rounded-xl border border-accent-blue/30 bg-lavender px-4 py-3 text-sm text-ink">
          {serverMessage}
        </p>
      ) : (
        <span id="form-status" className="sr-only" aria-live="polite">
          {status === "submitting" ? "Submitting your request" : ""}
        </span>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Request my audit"}
      </Button>
      <p className="text-xs text-ink-muted">
        By submitting, you agree to be contacted about your request. We don&apos;t share your details.
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
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
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
