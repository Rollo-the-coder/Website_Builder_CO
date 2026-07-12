import type { Metadata } from "next";
import { Section } from "@/components/section";
import { AuditRequestForm } from "@/components/audit-request-form";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { Reveal, RevealImmediate, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Request a Systems Audit",
  description:
    "Request a systems audit for your Seattle or Bellevue small business. Get a clear, practical action plan for messaging, lead flow, payments, portals, and operations.",
  alternates: { canonical: "/contact" },
};

const reassurances = [
  "A prioritized list of what to fix first",
  "Practical, jargon-free recommendations",
  "No obligation and no hard sell",
];

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <RevealImmediate>
            <span className="eyebrow">Free systems audit</span>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-5 font-display text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Request a Systems Audit
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Tell me a bit about your business and what&apos;s not working. I&apos;ll review your site,
              marketing narrative, and workflows — including payments and portals if they&apos;re in
              play — and send back a clear read on what to improve first.
            </p>
          </RevealImmediate>
          <RevealStagger tight className="mt-8 space-y-3">
            {reassurances.map((item) => (
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
                . The form below is best when you want a structured first review.
              </p>
              <p className="mt-2 text-xs text-ink-muted">
                Serving {site.location} first, with remote support available.
              </p>
            </div>
          </Reveal>
        </div>

        <RevealImmediate delay={0.14}>
          <div className="card">
            <AuditRequestForm />
          </div>
        </RevealImmediate>
      </div>
    </Section>
  );
}
