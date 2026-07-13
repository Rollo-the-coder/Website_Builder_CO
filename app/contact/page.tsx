import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/section";
import { AuditRequestForm } from "@/components/audit-request-form";
import { CheckIcon } from "@/components/icons";
import { auditDeliverables, site } from "@/lib/site";
import { Reveal, RevealImmediate, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Request a Website Audit",
  description:
    "Request a focused website audit for your Seattle or Eastside small business. Limited audit spots each week — messaging, conversion path, and operational opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <RevealImmediate>
            <span className="eyebrow">Limited weekly audits</span>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-5 font-display text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              See what is holding your website back
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Request a focused review of your website, customer journey, and operational
              opportunities. I take on a limited number of detailed audits each week so each review
              can include specific, useful recommendations.
            </p>
          </RevealImmediate>
          <RevealStagger tight className="mt-8 space-y-3">
            {auditDeliverables.map((item) => (
              <RevealItem key={item}>
                <div className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {item}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal delay={0.12} className="mt-8">
            <div className="rounded-xl border border-line bg-cloud p-5 text-sm text-ink-soft">
              <p className="font-medium text-ink">How to reach me</p>
              <p className="mt-1">
                Prefer email? Write{" "}
                <a
                  href={`mailto:${site.publicContactEmail}`}
                  className="font-medium text-ink underline decoration-line underline-offset-2 transition hover:text-accent hover:decoration-accent"
                >
                  {site.publicContactEmail}
                </a>
                . The form is best when you want a structured first review.
              </p>
              {site.fitCallUrl ? (
                <p className="mt-3">
                  Already know you need a build?{" "}
                  <a
                    href={site.fitCallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-2 hover:underline"
                  >
                    {site.fitCallCta}
                  </a>
                </p>
              ) : (
                <p className="mt-3">
                  Already know you need a build?{" "}
                  <a
                    href={`mailto:${site.publicContactEmail}?subject=Fit%20call%20request`}
                    className="font-medium text-accent underline-offset-2 hover:underline"
                  >
                    {site.fitCallCta}
                  </a>
                </p>
              )}
              <p className="mt-2 text-xs text-ink-muted">
                Serving {site.location} first, with remote delivery available.
              </p>
            </div>
          </Reveal>
        </div>

        <RevealImmediate delay={0.14}>
          <div className="card">
            <Suspense fallback={<p className="text-sm text-ink-muted">Loading form…</p>}>
              <AuditRequestForm />
            </Suspense>
          </div>
        </RevealImmediate>
      </div>
    </Section>
  );
}
