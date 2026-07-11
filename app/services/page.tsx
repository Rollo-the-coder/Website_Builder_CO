import type { Metadata } from "next";
import { services, processSteps, serviceBuckets } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal, RevealImmediate, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clarify, Build, and Manage services for Seattle and Bellevue small businesses: website strategy, rebuilds, forms, bookings, payments, dashboards, automations, and ongoing support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const byTitle = new Map(services.map((service) => [service.title, service]));

  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <div className="max-w-3xl">
          <RevealImmediate>
            <span className="eyebrow">Services</span>
          </RevealImmediate>
          <RevealImmediate delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              More than a website — a working digital system.
            </h1>
          </RevealImmediate>
          <RevealImmediate delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Start with what you need now — clearer messaging, a rebuild, or the systems behind the
              site — and grow from there.
            </p>
          </RevealImmediate>
          <RevealImmediate delay={0.24}>
            <div className="mt-8">
              <ButtonLink href="/contact">
                Get a free website audit
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </RevealImmediate>
        </div>
      </Section>

      <Section className="pt-4">
        <Reveal>
          <SectionHeading
            eyebrow="Offer structure"
            title="Clarify. Build. Manage."
            description="You can start in one phase and expand over time. Each project is scoped to what creates the fastest practical improvement."
          />
        </Reveal>
        <div className="mt-10 space-y-10">
          {serviceBuckets.map((bucket, bucketIndex) => {
            const groupedServices = bucket.serviceTitles
              .map((title) => byTitle.get(title))
              .filter((service): service is NonNullable<typeof service> => Boolean(service));

            return (
              <Reveal key={bucket.id} delay={bucketIndex * 0.05} loose>
                <section
                  id={bucket.id}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">{bucket.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
                    {bucket.description}
                  </p>
                  <RevealStagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {groupedServices.map((service) => (
                      <RevealItem key={service.title}>
                        <ServiceCard service={service} />
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-surface/40">
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
        <Reveal className="mt-6" delay={0.1}>
          <p className="text-center text-sm text-ink-muted">
            {processSteps.length} steps, one clear scope and price before any build work begins.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand
            title="Not sure where to start?"
            description="A free audit gives you a prioritized list of what to fix first — no commitment required."
          />
        </Reveal>
      </Section>
    </>
  );
}
