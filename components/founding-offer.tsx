"use client";

import { ButtonLink } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { foundingOffer, site } from "@/lib/site";

export function FoundingOffer() {
  if (site.foundingSlotsRemaining <= 0) {
    return (
      <Reveal>
        <div className="rounded-xl border border-line bg-cloud p-4 text-center sm:p-6 lg:p-8">
          <span className="eyebrow">Founding clients</span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:mt-4 sm:text-3xl">
            Founding client projects are currently full
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Join the waitlist for the next opening, or request a standard audit to discuss scope and
            timing.
          </p>
          <ButtonLink
            href="/contact"
            className="mt-5 w-full sm:mt-6 sm:w-auto"
            trackEventName="audit_cta_click"
            trackEventProps={{ location: "founding_waitlist" }}
          >
            Request an Audit
          </ButtonLink>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-xl border-2 border-accent/30 bg-cloud p-4 shadow-lift sm:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="eyebrow">{foundingOffer.title}</span>
              <span className="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                {site.foundingSlotsRemaining} of 3 spots open
              </span>
            </div>
            <h2 className="mt-3 font-display text-balance text-2xl font-semibold tracking-tight text-ink sm:mt-4 sm:text-3xl lg:text-4xl">
              <span className="lg:hidden">Three Seattle / Eastside projects</span>
              <span className="hidden lg:inline">Three qualified Seattle and Eastside projects</span>
            </h2>
            <p className="mt-2 text-sm leading-snug text-ink-soft lg:mt-4 lg:text-lg lg:leading-relaxed">
              <span className="lg:hidden">
                Reduced project rate for three qualified local builds — in exchange for feedback and
                permission to document the work.
              </span>
              <span className="hidden lg:inline">{foundingOffer.body}</span>
            </p>
            <p className="mt-3 hidden text-sm leading-relaxed text-ink-muted lg:block">
              {foundingOffer.support}
            </p>
          </div>

          {/* Mobile: collapsed expectations */}
          <details className="group rounded-lg border border-line bg-canvas lg:hidden">
            <summary className="cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                In exchange
                <span className="text-xs font-medium text-ink-muted group-open:hidden">Show</span>
                <span className="hidden text-xs font-medium text-ink-muted group-open:inline">Hide</span>
              </span>
            </summary>
            <ul className="space-y-2 border-t border-line px-3.5 pb-3.5 pt-3">
              {foundingOffer.expectations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>

          {/* Desktop: always visible */}
          <div className="hidden rounded-lg border border-line bg-canvas p-5 lg:block">
            <p className="text-sm font-semibold text-ink">In exchange</p>
            <ul className="mt-4 space-y-2.5">
              {foundingOffer.expectations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-muted">
              A positive testimonial is appreciated when earned — never contractually required.
            </p>
          </div>
        </div>

        <div className="relative mt-4 sm:mt-8">
          <ButtonLink
            href="/contact?interest=founding"
            className="w-full sm:w-auto"
            trackEventName="audit_cta_click"
            trackEventProps={{ location: "founding_offer" }}
          >
            <span className="sm:hidden">Apply for founding project</span>
            <span className="hidden sm:inline">{site.foundingCta}</span>
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
