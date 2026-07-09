import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Section, SectionHeading } from "@/components/section";
import { Pillars } from "@/components/pillars";
import { AuditScorecard } from "@/components/audit-scorecard";
import { CaseStudyPreview } from "@/components/case-study-preview";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Seattle Small Business Websites & Systems",
  description:
    "I build small-business websites with the systems behind them — bookings, payments, portals, and automations — then keep everything running. Seattle, Bellevue, and Eastside first.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />

      <Section className="section-mist">
        <Problem />
      </Section>

      <Section id="what-i-do">
        <Pillars />
      </Section>

      <Section className="section-mist">
        <CaseStudyPreview />
      </Section>

      <Section>
        <AuditScorecard />
      </Section>

      <Section id="packages" className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Starting points, not rigid boxes"
            description="Transparent starting ranges — final scope and price are agreed before any build starts."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Not sure which fits?{" "}
            <ButtonLink href="/contact" variant="ghost" className="px-1 py-0 align-baseline">
              Get a free website audit
            </ButtonLink>
            .
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand />
        </Reveal>
      </Section>
    </>
  );
}
