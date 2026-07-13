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

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-28">
        <div>
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
              analytics, and security — scoped to the outcomes that matter for the business.
            </p>
          </RevealImmediate>
          <RevealImmediate delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/contact"
                trackEventName="audit_cta_click"
                trackEventProps={{ location: "services_hero" }}
              >
                {site.primaryCta}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="#websites-conversion" variant="secondary">
                See service groups
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
    <div className="relative overflow-hidden rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift sm:p-8">
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
        <ol className="mt-6 space-y-0">
          {serviceGroups.map((group, index) => (
            <li key={group.id} className="relative flex gap-4 pb-6 last:pb-0">
              {index < serviceGroups.length - 1 ? (
                <span
                  className="absolute left-[17px] top-10 bottom-0 w-px bg-accent/30"
                  aria-hidden="true"
                />
              ) : null}
              <span className="relative z-10 grid h-9 w-9 flex-none place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-0.5">
                <a
                  href={`#${group.id}`}
                  className="group inline-flex items-center gap-1.5 font-display text-lg font-semibold tracking-tight text-ink transition hover:text-accent"
                >
                  {group.title}
                  <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{group.outcome}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
