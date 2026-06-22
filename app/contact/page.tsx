import type { Metadata } from "next";
import { Section } from "@/components/section";
import { AuditRequestForm } from "@/components/audit-request-form";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Website/System Audit",
  description:
    "Request a website and systems audit for your Seattle or Bellevue small business. Get a clear, practical action plan for messaging, lead flow, forms, and operations.",
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
          <span className="eyebrow">Free audit</span>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Request a Website/System Audit
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Tell me a bit about your business and what&apos;s not working. I&apos;ll review your site,
            offer, and workflows and send back a clear, practical read on what to improve first.
          </p>
          <ul className="mt-8 space-y-3">
            {reassurances.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-line bg-surface p-5 text-sm text-ink-soft">
            <p className="font-medium text-ink">Best way to reach out right now</p>
            <p className="mt-1">
              Use this audit form so your request includes the details needed for a useful first
              response. A public inbox will be listed here once finalized.
            </p>
            <p className="mt-2 text-xs text-ink-muted">Serving {site.location} first, with remote support available.</p>
          </div>
        </div>

        <div className="card">
          <AuditRequestForm />
        </div>
      </div>
    </Section>
  );
}
