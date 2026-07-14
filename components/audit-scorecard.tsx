"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { auditDeliverables, site } from "@/lib/site";

export function AuditScorecard() {
  return (
    <Reveal loose>
      <div className="rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Website audit</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See what is holding your website back
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Request a focused review of your website, customer journey, and operational
            opportunities. I take on a limited number of detailed audits each week so each review
            can include specific, useful recommendations.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {auditDeliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink
              href="/contact"
              trackEventName="audit_cta_click"
              trackEventProps={{ location: "audit_section" }}
            >
              {site.auditSpotCta}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
