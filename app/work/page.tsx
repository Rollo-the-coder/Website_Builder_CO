import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { SiteScreenshot } from "@/components/mockups";
import { Reveal, RevealImmediate } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { boostCaseStudy, boostLiveUrl, foundingOffer, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Gotta Build — flagship proof from Boost Baseball, plus founding client slots for documented Seattle and Eastside builds.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--color-accent) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 15%, transparent 75%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-20 top-8 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <RevealImmediate>
            <span className="eyebrow">Work</span>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Selected work — systems that run, not just pages that look good.
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              One flagship proof first. More documented builds as founding clients ship.
            </p>
          </RevealImmediate>
        </div>
      </section>

      <Section className="pt-0">
        <Reveal>
          <div className="overflow-hidden rounded-xl border-2 border-ink/10 bg-cloud shadow-lift">
            <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="eyebrow">{boostCaseStudy.eyebrow}</span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {boostCaseStudy.name}
                </h2>
                <p className="mt-3 text-sm font-medium text-ink-muted">{boostCaseStudy.status}</p>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{boostCaseStudy.teaser}</p>
                <div
                  className="mt-6 flex flex-wrap items-center gap-2"
                  aria-label="Workflow"
                >
                  {boostCaseStudy.workflow.map((step, index) => (
                    <span
                      key={step}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft sm:text-sm"
                    >
                      <span className="rounded-md border border-line bg-canvas px-2.5 py-1">
                        {step}
                      </span>
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
                    trackEventProps={{ location: "work_hub" }}
                  >
                    Explore the case study
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
              <div className="border-t border-line bg-canvas-deep/40 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                <SiteScreenshot
                  src="/work/boost/home.jpg"
                  alt="Boost Baseball homepage — Bellevue baseball development site"
                  label="boost-orcin.vercel.app"
                  caption="Parent-facing program discovery"
                  href={boostLiveUrl}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="Next builds"
            title="Founding client slots"
            description={foundingOffer.body}
          />
        </Reveal>
        <Reveal className="mt-8 max-w-3xl" delay={0.06}>
          <p className="text-base leading-relaxed text-ink-soft">{foundingOffer.support}</p>
          <p className="mt-4 text-sm font-medium text-ink-muted">
            {site.foundingSlotsRemaining} slots remaining — documented case studies with approved
            screenshots when projects ship.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="/contact"
              trackEventName="audit_cta_click"
              trackEventProps={{ location: "work_founding_slots" }}
            >
              {site.foundingCta}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand
            title="Want a system like this for your business?"
            description="Request an audit to see the smallest useful workflow for your offer, intake, and operations."
          />
        </Reveal>
      </Section>
    </>
  );
}
