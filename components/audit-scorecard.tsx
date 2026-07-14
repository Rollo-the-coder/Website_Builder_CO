"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { auditDeliverables, site } from "@/lib/site";

export function AuditScorecard() {
  return (
    <Reveal loose>
      <div className="rounded-xl border-2 border-ink/10 bg-cloud p-4 shadow-lift sm:p-8 lg:p-10">
        <span className="eyebrow">Website audit</span>
        <h2 className="mt-3 font-display text-balance text-2xl font-semibold tracking-tight text-ink sm:mt-4 sm:text-3xl lg:text-4xl">
          See what is holding your website back
        </h2>
        <p className="mt-2 text-sm leading-snug text-ink-soft lg:mt-4 lg:max-w-3xl lg:text-lg lg:leading-relaxed">
          <span className="lg:hidden">
            Focused review of your site, conversion path, and next steps — limited spots each week.
          </span>
          <span className="hidden lg:inline">
            Request a focused review of your website, customer journey, and operational
            opportunities. I take on a limited number of detailed audits each week so each review
            can include specific, useful recommendations.
          </span>
        </p>

        {/* Mobile: collapsed deliverables */}
        <details className="group mt-4 rounded-lg border border-line bg-canvas lg:hidden">
          <summary className="cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              What you get
              <span className="text-xs font-medium text-ink-muted group-open:hidden">Show</span>
              <span className="hidden text-xs font-medium text-ink-muted group-open:inline">Hide</span>
            </span>
          </summary>
          <ul className="space-y-2 border-t border-line px-3.5 pb-3.5 pt-3">
            {auditDeliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </details>

        {/* Desktop: always-visible grid */}
        <ul className="mt-8 hidden max-w-3xl grid-cols-2 gap-3 lg:grid">
          {auditDeliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
              <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 sm:mt-8">
          <ButtonLink
            href="/contact"
            className="w-full sm:w-auto"
            trackEventName="audit_cta_click"
            trackEventProps={{ location: "audit_section" }}
          >
            {site.auditSpotCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
