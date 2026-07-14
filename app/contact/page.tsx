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
    <Section className="pt-10 sm:pt-16 lg:pt-20">
      <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Intro — short on mobile; full copy on desktop */}
        <div className="order-1 lg:order-none">
          <RevealImmediate>
            <span className="eyebrow">Limited weekly audits</span>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-3 font-display text-balance text-2xl font-semibold tracking-tight text-ink sm:mt-5 sm:text-4xl lg:text-5xl">
              <span className="block sm:inline">See what is holding</span>{" "}
              <span className="block sm:inline">your website back</span>
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-2 text-sm leading-snug text-ink-soft sm:mt-4 lg:mt-6 lg:text-lg lg:leading-relaxed">
              <span className="lg:hidden">
                Focused review of your site, conversion path, and next steps — limited spots each
                week.
              </span>
              <span className="hidden lg:inline">
                Request a focused review of your website, customer journey, and operational
                opportunities. I take on a limited number of detailed audits each week so each review
                can include specific, useful recommendations.
              </span>
            </p>
          </RevealImmediate>

          {/* Mobile: collapsed deliverables */}
          <details className="group mt-4 rounded-lg border border-line bg-cloud lg:hidden">
            <summary className="cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                What you get
                <span className="text-xs font-medium text-ink-muted group-open:hidden">Show</span>
                <span className="hidden text-xs font-medium text-ink-muted group-open:inline">
                  Hide
                </span>
              </span>
            </summary>
            <ul className="space-y-2 border-t border-line px-3.5 pb-3.5 pt-3">
              {auditDeliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft"
                >
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>

          {/* Desktop: always-visible list */}
          <RevealStagger tight className="mt-8 hidden space-y-3 lg:block">
            {auditDeliverables.map((item) => (
              <RevealItem key={item}>
                <div className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {item}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          {/* Desktop: full how-to-reach card */}
          <Reveal delay={0.12} className="mt-8 hidden lg:block">
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
                . The form is best when you want a structured first review or a fit call follow-up.
              </p>
              <p className="mt-2 text-xs text-ink-muted">
                Serving {site.location} first, with remote delivery available.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form first in mobile scroll after short intro */}
        <RevealImmediate delay={0.14} className="order-2 lg:order-none">
          <div className="rounded-xl border border-line bg-surface p-4 shadow-soft sm:p-6 lg:p-8">
            <Suspense fallback={<p className="text-sm text-ink-muted">Loading form…</p>}>
              <AuditRequestForm />
            </Suspense>
          </div>
        </RevealImmediate>

        {/* Mobile: email line after form */}
        <p className="order-3 text-center text-xs text-ink-muted lg:hidden">
          Prefer email?{" "}
          <a
            href={`mailto:${site.publicContactEmail}`}
            className="font-medium text-ink underline decoration-line underline-offset-2 transition hover:text-accent hover:decoration-accent"
          >
            {site.publicContactEmail}
          </a>
        </p>
      </div>
    </Section>
  );
}
