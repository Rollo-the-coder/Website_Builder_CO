"use client";

import { ShowcaseHero } from "@/components/showcase/showcase-hero";
import { ShowcaseStory } from "@/components/showcase/showcase-story";
import { ShowcaseTheater } from "@/components/showcase/showcase-theater";
import { ShowcaseProof } from "@/components/showcase/showcase-proof";
import { ShowcaseAudit } from "@/components/showcase/showcase-audit";
import { ShowcasePackages } from "@/components/showcase/showcase-packages";
import { ShowcaseFinale } from "@/components/showcase/showcase-finale";
import { AboutFounder } from "@/components/about-founder";
import { Faq } from "@/components/faq";
import { SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function ShowcaseHome() {
  return (
    <div className="showcase-reel">
      <ShowcaseHero />
      <ShowcaseStory />
      <ShowcaseTheater />
      <ShowcaseProof />
      <ShowcaseAudit />
      <ShowcasePackages />
      <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
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
        </div>
      </section>
      <ShowcaseFinale />
    </div>
  );
}
