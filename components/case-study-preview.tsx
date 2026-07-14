"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { SiteScreenshot } from "@/components/mockups";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section";
import { boostCaseStudy, boostLiveUrl } from "@/lib/work/boost";

export function CaseStudyPreview() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="Flagship proof"
          title={boostCaseStudy.name}
          description="One deep case study that shows how a website becomes enrollment, payments, and operations — not just a brochure."
          descriptionClassName="hidden lg:block"
        />
      </Reveal>

      <Reveal className="mt-6 lg:mt-10" delay={0.06}>
        <div className="grid items-center gap-5 rounded-xl border-2 border-ink/10 bg-cloud p-4 shadow-lift sm:gap-8 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-10">
          <SiteScreenshot
            className="order-1 lg:order-2"
            src="/work/boost/home.jpg"
            alt="Boost Baseball homepage — Bellevue baseball development site"
            label="boost-orcin.vercel.app"
            caption="Parent-facing program discovery"
            href={boostLiveUrl}
            hideCaptionOnMobile
          />

          <div className="order-2 lg:order-1">
            <span className="eyebrow hidden lg:inline">{boostCaseStudy.eyebrow}</span>
            <p className="mt-0 hidden text-sm font-medium text-ink-muted lg:mt-4 lg:block">
              {boostCaseStudy.status}
            </p>
            <p className="mt-0 text-sm leading-relaxed text-ink-soft sm:mt-4 sm:text-lg lg:mt-3">
              {boostCaseStudy.teaser}
            </p>
            <div
              className="mt-6 hidden flex-wrap items-center gap-2 lg:flex"
              aria-label="Workflow"
            >
              {boostCaseStudy.workflow.map((step, index) => (
                <span
                  key={step}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft sm:text-sm"
                >
                  <span className="rounded-md border border-line bg-canvas px-2.5 py-1">{step}</span>
                  {index < boostCaseStudy.workflow.length - 1 ? (
                    <span className="text-accent" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={boostCaseStudy.href}
                className="w-full sm:w-auto"
                trackEventName="boost_case_study_click"
                trackEventProps={{ location: "homepage_preview" }}
              >
                <span className="lg:hidden">Explore Boost Case Study</span>
                <span className="hidden lg:inline">Explore the Boost Baseball Case Study</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" className="hidden lg:inline-flex">
                Browse work
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
