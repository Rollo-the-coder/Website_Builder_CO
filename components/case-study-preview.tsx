"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { SiteScreenshot } from "@/components/mockups";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import {
  boostDemoFlow,
  boostFeatureStages,
  boostLiveUrl,
  boostStatus,
  boostWorkflow,
} from "@/lib/site";
import { cn } from "@/lib/cn";

const stageLabels = {
  complete: "Complete",
  testing: "In testing",
  planned: "Planned before launch",
} as const;

export function CaseStudyPreview() {
  return (
    <div className="space-y-10">
      <div className="grid items-center gap-10 rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift lg:grid-cols-2 lg:p-10">
        <Reveal>
          <div>
            <span className="eyebrow">Flagship Build</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
              Boost Baseball
            </h2>
            <p className="mt-3 text-sm font-medium text-ink-muted">{boostStatus}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Boost Baseball brings program discovery, enrollment, payment plans, parent
              communication, and administrative visibility into one connected experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Workflow">
              {boostWorkflow.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft sm:text-sm">
                  <span className="rounded-md border border-line bg-canvas px-2.5 py-1">{step}</span>
                  {index < boostWorkflow.length - 1 ? (
                    <span className="text-accent" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/work/boost-baseball"
                trackEventName="boost_case_study_click"
                trackEventProps={{ location: "homepage_preview" }}
              >
                Explore the Boost Baseball Case Study
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink
                href={boostLiveUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live build
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12} loose>
          <SiteScreenshot
            src="/work/boost/home.png"
            alt="Boost Baseball homepage — Bellevue baseball development site"
            label="boost-orcin.vercel.app"
            caption="Parent-facing program discovery"
            href={boostLiveUrl}
          />
        </Reveal>
      </div>

      <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {boostDemoFlow.map((item) => (
          <RevealItem key={item.step}>
            <article className="h-full rounded-xl border border-line bg-cloud px-4 py-4">
              <span className="text-xs font-semibold text-accent">{item.step}</span>
              <h3 className="mt-1 text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">{item.text}</p>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal>
        <div className="rounded-xl border border-line bg-canvas-deep/40 p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Current build stage</h3>
          <p className="mt-2 text-sm text-ink-soft">
            Features are separated by status so launch readiness stays clear.
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {boostFeatureStages.map((item) => (
              <li
                key={item.label}
                className="flex items-start justify-between gap-3 rounded-lg border border-line bg-cloud px-3 py-2.5 text-sm"
              >
                <span className="flex items-start gap-2 text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {item.label}
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold",
                    item.stage === "complete" && "bg-sage/40 text-ink",
                    item.stage === "testing" && "bg-mist text-ink-muted",
                    item.stage === "planned" && "bg-lavender/50 text-ink-muted",
                  )}
                >
                  {stageLabels[item.stage]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <RevealStagger className="grid gap-6 lg:grid-cols-2">
        <RevealItem>
          <SiteScreenshot
            src="/work/boost/teams.png"
            alt="Boost Baseball Select Teams page"
            label="Program offer"
            caption="Parents see programs, age lanes, and a clear next step."
            href={`${boostLiveUrl}teams`}
          />
        </RevealItem>
        <RevealItem>
          <SiteScreenshot
            src="/work/boost/tryouts.png"
            alt="Boost Baseball Clubhouse tryout registration"
            label="Enrollment flow"
            caption="Enrollment starts in Clubhouse — registration without spreadsheet chase."
            href={`${boostLiveUrl}tryouts`}
          />
        </RevealItem>
      </RevealStagger>
    </div>
  );
}
