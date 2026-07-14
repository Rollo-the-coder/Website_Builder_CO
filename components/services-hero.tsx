"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { RevealImmediate } from "@/components/reveal";
import { serviceGroups, site } from "@/lib/site";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-accent) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 15%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-8 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-accent-blue/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-start gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div className="lg:pt-1">
          <RevealImmediate>
            <span className="eyebrow">Services</span>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-5 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              More than a website — a working digital system.
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Websites, bookings, payments, portals, AI chatbots, content systems, automation,
              analytics, and security — built around what your business needs to happen, not around
              a list of tools.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              Every service below is grouped by the result it delivers: more leads, easier customer
              actions, less manual work, clearer visibility, or a more reliable system. Expand any
              service to see exactly what it means and whether it fits.
            </p>
          </RevealImmediate>
          <RevealImmediate delay={0.24}>
            <div className="mt-8">
              <ButtonLink
                href="/contact"
                trackEventName="audit_cta_click"
                trackEventProps={{ location: "services_hero" }}
              >
                {site.primaryCta}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </RevealImmediate>
        </div>

        <RevealImmediate delay={0.14} className="lg:pl-2">
          <GroupRail />
        </RevealImmediate>
      </div>
    </section>
  );
}

function GroupRail() {
  return (
    <nav
      id="outcome-jump"
      aria-label="Jump to a service outcome group"
      className="relative overflow-hidden rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(28rem 18rem at 100% 0%, var(--mock-wash-2), transparent 60%), radial-gradient(24rem 16rem at 0% 100%, var(--mock-wash-1), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm bg-voltage" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Five outcome groups
          </p>
        </div>
        <p className="mt-2 text-sm leading-snug text-ink-soft">
          Click any group to skip straight to that section.
        </p>

        <ol className="mt-5 space-y-2">
          {serviceGroups.map((group, index) => (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                className="group flex items-center gap-3 rounded-lg border border-transparent bg-canvas/40 px-2.5 py-2.5 transition hover:border-accent/35 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span className="relative z-10 grid h-9 w-9 flex-none place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition group-hover:bg-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-semibold tracking-tight text-ink transition group-hover:text-accent sm:text-lg">
                    {group.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-snug text-ink-soft">{group.outcome}</p>
                </div>
                <span className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-accent sm:inline-flex">
                  Skip to
                  <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-accent sm:hidden" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
