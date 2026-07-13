"use client";

import { ButtonLink } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { foundingOffer, site } from "@/lib/site";

export function FoundingOffer() {
  if (site.foundingSlotsRemaining <= 0) {
    return (
      <Reveal>
        <div className="rounded-xl border border-line bg-cloud p-6 text-center sm:p-8">
          <span className="eyebrow">Founding clients</span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Founding client projects are currently full
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Join the waitlist for the next opening, or request a standard audit to discuss scope and
            timing.
          </p>
          <ButtonLink
            href="/contact"
            className="mt-6"
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
      <div className="relative overflow-hidden rounded-xl border-2 border-accent/30 bg-cloud p-6 shadow-lift sm:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">{foundingOffer.title}</span>
              <span className="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                {site.foundingSlotsRemaining} of 3 spots open
              </span>
            </div>
            <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three qualified Seattle and Eastside projects
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{foundingOffer.body}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{foundingOffer.support}</p>
            <ButtonLink
              href="/contact?interest=founding"
              className="mt-8"
              trackEventName="audit_cta_click"
              trackEventProps={{ location: "founding_offer" }}
            >
              {site.foundingCta}
            </ButtonLink>
          </div>
          <div className="rounded-lg border border-line bg-canvas p-5">
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
      </div>
    </Reveal>
  );
}
