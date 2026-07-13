import type { Metadata } from "next";
import { processSteps, serviceGroups, services } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";
import { ServicesHero } from "@/components/services-hero";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

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

      <Section className="pt-4 sm:pt-6">
        <Reveal>
          <SectionHeading
            eyebrow="Service groups"
            title="Outcomes first, tools second"
            description="Every service connects to qualified leads, easier customer actions, less manual work, better visibility, or more reliable systems."
          />
        </Reveal>
      </Section>

      {serviceGroups.map((group, groupIndex) => {
        const groupedServices = group.serviceTitles
          .map((title) => byTitle.get(title))
          .filter((service): service is NonNullable<typeof service> => Boolean(service));

        const mist = groupIndex % 2 === 0;

        return (
          <Section key={group.id} id={group.id} className={mist ? "section-mist" : undefined}>
            <Reveal>
              <div className="flex flex-col gap-3 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="max-w-2xl">
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
              </div>
            </Reveal>

            <RevealStagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {groupedServices.map((service) => (
                <RevealItem key={service.title}>
                  <ServiceCard service={service} />
                </RevealItem>
              ))}
            </RevealStagger>
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
