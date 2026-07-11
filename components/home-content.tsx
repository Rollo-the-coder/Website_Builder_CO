"use client";

import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Section, SectionHeading } from "@/components/section";
import { Pillars } from "@/components/pillars";
import { BuildIncludes } from "@/components/build-includes";
import { ProcessSteps } from "@/components/process-steps";
import { AuditScorecard } from "@/components/audit-scorecard";
import { CaseStudyPreview } from "@/components/case-study-preview";
import { AboutFounder } from "@/components/about-founder";
import { Faq } from "@/components/faq";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemePreviewProvider, useThemePreview } from "@/components/theme-preview";
import { ShowcaseHome } from "@/components/showcase/showcase-home";

function HomeBody() {
  const { isShowcase } = useThemePreview();

  if (isShowcase) {
    return <ShowcaseHome />;
  }

  return (
    <>
      <Hero />

      <Section className="section-mist">
        <Problem />
      </Section>

      <Section>
        <BuildIncludes />
      </Section>

      <Section className="section-mist">
        <CaseStudyPreview />
      </Section>

      <Section id="what-i-do">
        <Pillars />
      </Section>

      <Section id="process" className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="How engagements run"
            title="Audit to manage — clear steps, no guessing."
            description="Every project moves through the same path so scope, build, and upkeep stay intentional."
            align="center"
          />
        </Reveal>
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <Section>
        <AuditScorecard />
      </Section>

      <Section id="packages" className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Starting points, not rigid boxes"
            description="Transparent starting ranges — final scope and price are agreed before any build starts. Grow from a clear site into payments, portals, and operations when you're ready."
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
      </Section>

      <Section>
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

export function HomeContent() {
  return (
    <ThemePreviewProvider>
      <ThemeSwitcher />
      <HomeBody />
    </ThemePreviewProvider>
  );
}
