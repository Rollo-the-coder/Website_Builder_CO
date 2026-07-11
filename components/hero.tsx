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
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <RevealImmediate>
            <div className="flex items-center gap-3">
              <BrandMark className="h-11 w-11" />
              <div>
                <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {site.name}
                </p>
                <p className="text-sm text-ink-muted">{site.location}</p>
              </div>
            </div>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.description}
            </p>
          </RevealImmediate>
          <RevealImmediate delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Get a free website audit
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/work/boost-baseball" variant="secondary">
                See Boost
              </ButtonLink>
            </div>
          </RevealImmediate>
        </div>
        <RevealImmediate delay={0.14} className="lg:pl-6">
          <WebsiteSystemMap />
        </RevealImmediate>
      </div>
    </section>
  );
}
