import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { SiteScreenshot } from "@/components/mockups";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button";
import { Reveal, RevealImmediate, RevealItem, RevealStagger } from "@/components/reveal";
import {
  boostDemoFlow,
  boostFeatureStages,
  boostLiveUrl,
  boostStatus,
  boostWorkflow,
} from "@/lib/site";
import { cn } from "@/lib/cn";
import { BoostPageTracker } from "@/components/boost-page-tracker";

export const metadata: Metadata = {
  title: "Boost Baseball Case Study",
  description:
    "Flagship youth sports product and operations platform being prepared for launch: program discovery, enrollment, payments, parent communication, and admin visibility.",
  alternates: { canonical: "/work/boost-baseball" },
};

const challenges = [
  "Program information can become fragmented across pages and tools",
  "Enrollment creates manual administrative work",
  "Payment plans require tracking and follow-up",
  "Parents need clearer communication",
  "Administrators need visibility across registrations, payments, rosters, and budgets",
];

const systemLinks = [
  "Program discovery",
  "Enrollment",
  "Payment options",
  "Confirmation",
  "Parent access",
  "Admin visibility",
  "Roster management",
  "Budget tracking",
  "Exports",
  "Communication",
];

const stageLabels = {
  complete: "Complete",
  testing: "In testing",
  planned: "Planned before launch",
} as const;

export default function BoostCaseStudyPage() {
  return (
    <>
      <BoostPageTracker />
      <Section className="pb-8 pt-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <RevealImmediate>
              <span className="eyebrow">Flagship Build</span>
            </RevealImmediate>
            <RevealImmediate delay={0.08}>
              <h1 className="mt-5 font-display text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Boost Baseball
              </h1>
            </RevealImmediate>
            <RevealImmediate delay={0.12}>
              <p className="mt-3 text-sm font-medium text-ink-muted">{boostStatus}</p>
            </RevealImmediate>
            <RevealImmediate delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Boost Baseball brings program discovery, enrollment, payment plans, parent
                communication, and administrative visibility into one connected experience.
              </p>
            </RevealImmediate>
            <RevealImmediate delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={boostLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackEventName="boost_case_study_click"
                  trackEventProps={{ location: "case_study_live" }}
                >
                  View live build
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  trackEventName="audit_cta_click"
                  trackEventProps={{ location: "boost_case_study" }}
                >
                  Need a similar system? Request an audit
                </ButtonLink>
              </div>
            </RevealImmediate>
          </div>
          <RevealImmediate delay={0.14}>
            <SiteScreenshot
              src="/work/boost/home.png"
              alt="Boost Baseball homepage — Bellevue baseball development site"
              label="boost-orcin.vercel.app"
              caption="Program discovery on the public site"
              href={boostLiveUrl}
            />
          </RevealImmediate>
        </div>
      </Section>

      <Section className="py-8">
        <Reveal>
          <SectionHeading eyebrow="Challenge" title="The operational problem" />
        </Reveal>
        <RevealStagger tight className="mt-8 max-w-3xl space-y-3">
          {challenges.map((item) => (
            <RevealItem key={item}>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{item}</span>
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="System"
            title="One connected experience"
            description="The platform connects marketing to enrollment, payments, communication, and operational visibility."
          />
        </Reveal>
        <RevealStagger className="mt-8 flex flex-wrap gap-2">
          {systemLinks.map((item) => (
            <RevealItem key={item}>
              <span className="rounded-md border border-line bg-cloud px-3 py-1.5 text-sm font-medium text-ink-soft">
                {item}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-2" aria-label="Workflow">
            {boostWorkflow.map((step, index) => (
              <span
                key={step}
                className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft sm:text-sm"
              >
                <span className="rounded-md border border-line bg-canvas px-2.5 py-1">{step}</span>
                {index < boostWorkflow.length - 1 ? (
                  <span className="text-accent" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Demonstrated workflow"
            title="From program page to admin visibility"
          />
        </Reveal>
        <RevealStagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {boostDemoFlow.map((item) => (
            <RevealItem key={item.step}>
              <article className="card card-hover flex h-full flex-col !p-3 sm:!p-6">
                <span className="text-xs font-semibold text-accent sm:text-sm">{item.step}</span>
                <h3 className="mt-1.5 text-sm font-semibold text-ink sm:mt-2 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-snug text-ink-soft sm:mt-2 sm:text-sm sm:leading-relaxed">
                  {item.text}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="Current stage"
            title="Complete, in testing, and planned"
            description="Statuses are kept separate so launch readiness stays honest."
          />
        </Reveal>
        <RevealStagger className="mt-8 grid gap-2 sm:grid-cols-2">
          {boostFeatureStages.map((item) => (
            <RevealItem key={item.label}>
              <div className="flex items-start justify-between gap-3 rounded-lg border border-line bg-cloud px-3 py-2.5 text-sm">
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
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Build evidence"
            title="A look at the system"
            description="Real captures from the live Boost build — program offer and enrollment path."
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 lg:grid-cols-2">
          <RevealItem>
            <SiteScreenshot
              src="/work/boost/teams.png"
              alt="Boost Baseball Select Teams page — age lanes, season plan, and clear next steps"
              label="Program offer"
              caption="Parents see programs and a clear path into enrollment."
              href={`${boostLiveUrl}teams`}
            />
          </RevealItem>
          <RevealItem>
            <SiteScreenshot
              src="/work/boost/tryouts.png"
              alt="Boost Baseball Clubhouse tryout registration"
              label="Enrollment flow"
              caption="Registration starts in Clubhouse — families enroll without spreadsheet chase."
              href={`${boostLiveUrl}tryouts`}
            />
          </RevealItem>
        </RevealStagger>
      </Section>

      <Section className="section-mist">
        <Reveal>
          <SectionHeading eyebrow="Outcome" title="What this project demonstrates" />
        </Reveal>
        <Reveal className="mt-6 max-w-3xl" delay={0.08}>
          <p className="text-lg leading-relaxed text-ink-soft">
            The project demonstrates how a youth-sports website can extend beyond marketing into
            enrollment, payments, communication, and operational management.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand
            title="Need a similar enrollment or operations system?"
            description="Request an audit to see what the smallest useful workflow looks like for your business."
          />
        </Reveal>
      </Section>
    </>
  );
}
