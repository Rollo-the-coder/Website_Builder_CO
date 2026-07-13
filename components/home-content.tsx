"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/section";
import { FrameworkSection } from "@/components/framework-section";
import { StallAndFix } from "@/components/stall-and-fix";
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
            description="Transparent starting prices — final scope and price are agreed before any build starts. Grow from a clear site into payments, portals, and operations when you're ready."
            align="center"
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <RevealItem key={pkg.name}>
              <PackageCard pkg={pkg} />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-16">
          <SectionHeading
            eyebrow="Monthly management"
            title="Keep the system healthy after launch"
            description="Exact management scope depends on the system being maintained. Plans do not include unlimited edits."
            align="center"
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 lg:grid-cols-3">
          {managementPackages.map((pkg) => (
            <RevealItem key={pkg.name}>
              <ManagementCard pkg={pkg} />
            </RevealItem>
          ))}
        </RevealStagger>
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

      <Section className="section-mist">
        <StallAndFix />
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
