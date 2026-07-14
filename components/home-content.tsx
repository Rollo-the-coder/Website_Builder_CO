"use client";

import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/section";
import { FrameworkSection } from "@/components/framework-section";
import { AuditScorecard } from "@/components/audit-scorecard";
import { CaseStudyPreview } from "@/components/case-study-preview";
import { AboutFounder } from "@/components/about-founder";
import { FoundingOffer } from "@/components/founding-offer";
import { Faq } from "@/components/faq";
import { ManagementCard, PackageCard } from "@/components/package-card";
import { ButtonLink } from "@/components/button";
import { managementPackages, packages } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { trackEvent } from "@/components/analytics";
import { cn } from "@/lib/cn";

function PricingSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const viewed = useRef(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !viewed.current) {
          viewed.current = true;
          trackEvent("pricing_section_view");
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="pricing" className="bg-canvas-deep/50">
      <div ref={ref}>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Clear starting points"
            description="Transparent starting prices for builds and monthly care — final scope is agreed before work starts. Grow from a clear site into payments, portals, and operations when you're ready."
            align="center"
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative">
            <div className="relative z-10 grid grid-cols-3">
              <div aria-hidden="true" />
              <div className="flex justify-center">
                <span className="-mb-px rounded-t-md bg-accent px-2 py-1.5 text-[10px] font-semibold tracking-wide text-primary-foreground sm:px-4 sm:py-2 sm:text-xs">
                  Most Popular
                </span>
              </div>
              <div aria-hidden="true" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-cloud shadow-soft">
              <RevealStagger className="grid grid-cols-3 divide-x divide-line">
                {packages.map((pkg, index) => {
                  const monthly = managementPackages[index];
                  return (
                    <RevealItem
                      key={pkg.name}
                      className={cn(
                        "relative flex flex-col",
                        pkg.featured &&
                          "z-[1] bg-accent/[0.07] ring-2 ring-inset ring-accent/55",
                      )}
                    >
                      <div className="flex flex-1 flex-col">
                        <div className="flex-1">
                          <PackageCard pkg={pkg} embedded detailsOpen={detailsOpen} />
                        </div>
                        {monthly ? (
                          <div
                            className={cn(
                              "border-t",
                              pkg.featured
                                ? "border-accent/25 bg-accent/[0.08]"
                                : "border-line/80 bg-canvas-deep/40",
                            )}
                          >
                            <p className="px-3 pt-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-accent sm:px-5 sm:pt-3 sm:text-[10px] sm:tracking-[0.14em] md:px-6">
                              Monthly management
                            </p>
                            <ManagementCard pkg={monthly} embedded detailsOpen={detailsOpen} />
                          </div>
                        ) : null}
                        <div className="border-t border-line/60 p-3 sm:p-5 md:p-6">
                          <ButtonLink
                            href={`/contact?package=${pkg.contactSlug}`}
                            variant={pkg.featured ? "primary" : "secondary"}
                            className="w-full px-2 py-2 text-[11px] sm:px-5 sm:py-3 sm:text-sm"
                            trackEventName="audit_cta_click"
                            trackEventProps={{ location: "pricing_package", package: pkg.name }}
                          >
                            <span className="sm:hidden">Audit</span>
                            <span className="hidden sm:inline">Request an Audit</span>
                          </ButtonLink>
                        </div>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealStagger>
            </div>
          </div>

          <div className="mt-4 md:hidden">
            <button
              type="button"
              aria-expanded={detailsOpen}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-cloud px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              onClick={() => setDetailsOpen((open) => !open)}
            >
              {detailsOpen ? "Hide what’s included" : "Compare what’s included"}
              <span
                className={cn(
                  "text-base leading-none text-ink-muted transition",
                  detailsOpen && "rotate-45",
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-ink-muted">
            Monthly plans are scoped to the system being maintained and do not include unlimited edits.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function HomeContent() {
  return (
    <>
      <Hero />

      <Section className="section-mist">
        <FrameworkSection />
      </Section>

      <Section id="work">
        <CaseStudyPreview />
      </Section>

      <PricingSection />

      <Section className="section-mist">
        <FoundingOffer />
      </Section>

      <Section>
        <AuditScorecard />
      </Section>

      <Section className="section-mist">
        <AboutFounder />
        <div id="faq" className="mt-10 sm:mt-14 lg:mt-16">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Straight answers before you request an audit."
              align="center"
              titleClassName="mt-3 text-2xl sm:mt-4 sm:text-3xl lg:text-4xl"
              descriptionClassName="mt-2 text-sm leading-snug lg:mt-4 lg:text-lg lg:leading-relaxed"
            />
          </Reveal>
          <Reveal className="mt-5 sm:mt-8 lg:mt-10" delay={0.08}>
            <Faq />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <CtaBand />
        </Reveal>
      </Section>
    </>
  );
}
