import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { SiteScreenshot, SystemPreview } from "@/components/mockups";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button";
import { Reveal, RevealImmediate, RevealItem, RevealStagger } from "@/components/reveal";
import { boostCaseStudy, boostLiveUrl } from "@/lib/work/boost";
import { BoostPageTracker } from "@/components/boost-page-tracker";

export const metadata: Metadata = {
  title: "Boost Baseball Case Study",
  description: boostCaseStudy.metaDescription,
  alternates: { canonical: boostCaseStudy.href },
};

export default function BoostCaseStudyPage() {
  return (
    <>
      <BoostPageTracker />

      {/* Product-stage hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--color-accent) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 70% at 70% 40%, black 20%, transparent 75%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-accent-blue/12 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <div className="lg:pb-2">
              <RevealImmediate>
                <span className="eyebrow">{boostCaseStudy.eyebrow}</span>
              </RevealImmediate>
              <RevealImmediate delay={0.06}>
                <p className="mt-4 text-sm font-semibold tracking-wide text-accent">
                  {boostCaseStudy.name}
                </p>
              </RevealImmediate>
              <RevealImmediate delay={0.1}>
                <h1 className="mt-2 font-display text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  {boostCaseStudy.headline}
                </h1>
              </RevealImmediate>
              <RevealImmediate delay={0.14}>
                <p className="mt-3 text-sm font-medium text-ink-muted">{boostCaseStudy.status}</p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
                  {boostCaseStudy.summary}
                </p>
              </RevealImmediate>
              <RevealImmediate delay={0.2}>
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
              <RevealImmediate delay={0.26}>
                <nav
                  aria-label="On this page"
                  className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5 text-sm"
                >
                  {boostCaseStudy.jumpLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-medium text-ink-soft transition hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </RevealImmediate>
            </div>

            <RevealImmediate delay={0.12} className="min-w-0">
              <SiteScreenshot
                src="/work/boost/home.jpg"
                alt="Boost Baseball homepage — Bellevue baseball development site"
                label="boost-orcin.vercel.app"
                caption="Program discovery on the public site"
                href={boostLiveUrl}
                className="shadow-lift"
              />
            </RevealImmediate>
          </div>
        </div>
      </section>

      {/* Before → after */}
      <Section id="challenge" className="scroll-mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Challenge"
            title="Before the system vs after"
            description="The same operational gaps show up in many enrollment-heavy businesses — Boost closes them in one connected path."
          />
        </Reveal>
        <RevealStagger className="mt-10 max-w-3xl space-y-0 divide-y divide-line border-y border-line">
          {boostCaseStudy.beforeAfter.map((row) => (
            <RevealItem key={row.before}>
              <div className="grid gap-3 py-5 sm:grid-cols-2 sm:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Before
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {row.before}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                    After
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink sm:text-base">{row.after}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Visual walkthrough */}
      <Section id="walkthrough" className="section-mist scroll-mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Walkthrough"
            title="From program page to admin visibility"
            description="Four beats — each paired with proof from the live build or an ops preview."
          />
        </Reveal>

        <div className="mt-12 space-y-16 lg:space-y-20">
          {boostCaseStudy.walkthrough.map((step, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={step.id} loose>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold tabular-nums tracking-[0.16em] text-accent">
                      {step.step} · {step.title}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                      {step.text}
                    </p>
                    {step.caption ? (
                      <p className="mt-4 text-sm text-ink-muted">{step.caption}</p>
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    {step.visual === "system-preview" ? (
                      <figure>
                        <SystemPreview />
                        {step.caption ? (
                          <figcaption className="mt-3 text-sm text-ink-muted">
                            {step.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : (
                      <SiteScreenshot
                        src={step.src}
                        alt={step.alt}
                        label={step.label}
                        caption={step.caption}
                        href={step.href}
                      />
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Evidence strip */}
      <Section id="evidence" className="scroll-mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Build evidence"
            title="A look at the system"
            description="Real captures from the live Boost build — program offer and enrollment path."
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boostCaseStudy.evidence.map((shot) => (
            <RevealItem key={shot.src + shot.label}>
              <SiteScreenshot
                src={shot.src}
                alt={shot.alt}
                label={shot.label}
                caption={shot.caption}
                href={shot.href}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* What shipped + fit */}
      <Section id="fit" className="section-mist scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="What shipped" title="Delivered capabilities" />
            <ul className="mt-8 space-y-3">
              {boostCaseStudy.shipped.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading eyebrow="Fit" title="What this means for your business" />
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              {boostCaseStudy.fit.who}
            </p>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Closest packages
            </p>
            <ul className="mt-3 space-y-3">
              {boostCaseStudy.fit.packages.map((pkg) => (
                <li key={pkg.name}>
                  <Link
                    href={pkg.href}
                    className="group block border-b border-line pb-3 transition hover:border-accent/40"
                  >
                    <span className="font-semibold text-ink group-hover:text-accent">{pkg.name}</span>
                    <span className="mt-0.5 block text-sm text-ink-muted">{pkg.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Related services:{" "}
              <Link
                href={boostCaseStudy.fit.servicesHref}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {boostCaseStudy.fit.servicesLabel}
              </Link>
            </p>
          </Reveal>
        </div>
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
