"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/section";
import { FrameworkSection } from "@/components/framework-section";
import { ServiceGroupsSummary } from "@/components/service-groups-summary";
import { AuditScorecard } from "@/components/audit-scorecard";
import { CaseStudyPreview } from "@/components/case-study-preview";
import { AboutFounder } from "@/components/about-founder";
import { FoundingOffer } from "@/components/founding-offer";
import { Faq } from "@/components/faq";
import { ManagementCard, PackageCard } from "@/components/package-card";
import { managementPackages, packages } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { trackEvent } from "@/components/analytics";
import { cn } from "@/lib/cn";

function PricingSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const viewed = useRef(false);

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
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3">
              <div className="hidden lg:block" aria-hidden="true" />
              <div className="flex justify-center">
                <span className="-mb-px rounded-t-md bg-accent px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground">
                  Most Popular
                </span>
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-cloud shadow-soft">
              <RevealStagger className="grid lg:grid-cols-3 lg:divide-x lg:divide-line">
                {packages.map((pkg, index) => {
                  const monthly = managementPackages[index];
                  return (
                    <RevealItem
                      key={pkg.name}
                      className={cn(
                        "relative flex flex-col border-b border-line last:border-b-0 lg:border-b-0",
                        pkg.featured &&
                          "z-[1] bg-accent/[0.07] ring-2 ring-inset ring-accent/55",
                      )}
                    >
                      <div className="flex flex-1 flex-col">
                        <div className="flex-1">
                          <PackageCard pkg={pkg} embedded />
                        </div>
                        {monthly ? (
                          <div
                            className={cn(
                              "mt-auto border-t",
                              pkg.featured
                                ? "border-accent/25 bg-accent/[0.08]"
                                : "border-line/80 bg-canvas-deep/40",
                            )}
                          >
                            <p className="px-5 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent sm:px-6">
                              Monthly management
                            </p>
                            <ManagementCard pkg={monthly} embedded />
                          </div>
                        ) : null}
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealStagger>
            </div>
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

      <Section id="services-overview">
        <ServiceGroupsSummary />
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
        <div id="faq" className="mt-16">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Straight answers before you request an audit."
              align="center"
            />
          </Reveal>
          <Reveal className="mt-10" delay={0.08}>
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
