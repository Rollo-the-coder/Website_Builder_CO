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
          title="Selected work"
          description="One deep case study that shows how a website becomes enrollment, payments, and operations — not just a brochure."
        />
      </Reveal>

      <Reveal className="mt-10" delay={0.06}>
        <div className="grid items-center gap-10 rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift lg:grid-cols-2 lg:p-10">
          <div>
            <span className="eyebrow">{boostCaseStudy.eyebrow}</span>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
              {boostCaseStudy.name}
            </h3>
            <p className="mt-3 text-sm font-medium text-ink-muted">{boostCaseStudy.status}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{boostCaseStudy.teaser}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Workflow">
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={boostCaseStudy.href}
                trackEventName="boost_case_study_click"
                trackEventProps={{ location: "homepage_preview" }}
              >
                Explore the Boost Baseball Case Study
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Browse work
              </ButtonLink>
            </div>
          </div>
          <SiteScreenshot
            src="/work/boost/home.jpg"
            alt="Boost Baseball homepage — Bellevue baseball development site"
            label="boost-orcin.vercel.app"
            caption="Parent-facing program discovery"
            href={boostLiveUrl}
          />
        </div>
      </Reveal>
    </div>
  );
}
