import type { Metadata } from "next";
import { processSteps, serviceGroups, services } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { ServiceExpandableList } from "@/components/service-expandable";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";
import { ServicesHero } from "@/components/services-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites and conversion, bookings and payments, AI chatbots and automation, AI SEO and content systems, plus security, analytics, and ongoing management for Seattle and Eastside small businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const byTitle = new Map(services.map((service) => [service.title, service]));

  return (
    <>
      <ServicesHero />

      {serviceGroups.map((group, groupIndex) => {
        const groupedServices = group.serviceTitles
          .map((title) => byTitle.get(title))
          .filter((service): service is NonNullable<typeof service> => Boolean(service));

        const mist = groupIndex % 2 === 0;

        return (
          <Section
            key={group.id}
            id={group.id}
            className={mist ? "section-mist scroll-mt-24" : "scroll-mt-24"}
          >
            <Reveal>
              <div className="max-w-3xl border-b border-line pb-8">
                <p className="text-xs font-semibold tabular-nums tracking-[0.16em] text-accent">
                  {String(groupIndex + 1).padStart(2, "0")} · {group.outcome}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {group.summary}
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-2 max-w-3xl" delay={0.06}>
              <ServiceExpandableList services={groupedServices} />
            </Reveal>
          </Section>
        );
      })}

      <Section id="process" className="section-mist">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How engagements run"
            description="Every project follows the same clear path so you always know the next step."
            align="center"
          />
        </Reveal>
        <div className="mt-12">
          <ProcessSteps />
        </div>
        <Reveal className="mt-8" delay={0.1}>
          <p className="text-center text-sm text-ink-muted">
            {processSteps.length} steps, one clear scope and price before any build work begins.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand
            title="Not sure where to start?"
            description="A focused audit gives you a prioritized list of what to fix first — limited spots each week."
          />
        </Reveal>
      </Section>
    </>
  );
}
