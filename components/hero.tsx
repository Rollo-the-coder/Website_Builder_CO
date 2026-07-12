"use client";

import { BrandMark } from "@/components/brand-mark";
import { RevealImmediate } from "@/components/reveal";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { WebsiteSystemMap } from "@/components/website-system-map";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-accent) / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
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

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-24">
        <div>
          <RevealImmediate>
            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <div className="flex items-center gap-3">
                <BrandMark className="h-12 w-12 sm:h-14 sm:w-14" />
                <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  {site.name}
                </p>
              </div>
              <p className="mb-1 text-sm font-medium uppercase tracking-[0.14em] text-ink-muted sm:mb-2">
                {site.location}
              </p>
            </div>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-7 max-w-xl font-display text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              {site.tagline}
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {site.description}
            </p>
          </RevealImmediate>
          <RevealImmediate delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                {site.primaryCta}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/work/boost-baseball" variant="secondary">
                See Proof
              </ButtonLink>
            </div>
          </RevealImmediate>
        </div>
        <RevealImmediate delay={0.12} className="lg:pl-2">
          <WebsiteSystemMap />
        </RevealImmediate>
      </div>
    </section>
  );
}
