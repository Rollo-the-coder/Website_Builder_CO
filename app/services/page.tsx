import type { Metadata } from "next";
import { services, processSteps, serviceBuckets } from "@/lib/site";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";

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
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            More than a website — a working digital system.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            I help small businesses turn messy websites and manual workflows into clear systems that
            generate leads, handle signups, collect payments, automate communication, and make
            operations easier. Start with what you need now and grow from there.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">
              Request a Website/System Audit
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="pt-4">
        <SectionHeading
          eyebrow="Offer structure"
          title="Clarify. Build. Manage."
          description="You can start in one phase and expand over time. Each project is scoped to what creates the fastest practical improvement."
        />
        <div className="mt-10 space-y-10">
          {serviceBuckets.map((bucket) => {
            const groupedServices = bucket.serviceTitles
              .map((title) => byTitle.get(title))
              .filter((service): service is NonNullable<typeof service> => Boolean(service));

            return (
              <section key={bucket.id} id={bucket.id} className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">{bucket.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">{bucket.description}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupedServices.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Process"
          title="How engagements run"
          description="Every project follows the same clear path so you always know the next step."
          align="center"
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
        <p className="mt-6 text-center text-sm text-ink-muted">
          {processSteps.length} steps, one clear scope and price before any build work begins.
        </p>
      </Section>

      <Section>
        <CtaBand
          title="Not sure where to start?"
          description="A free audit gives you a prioritized list of what to fix first — no commitment required."
        />
      </Section>
    </>
  );
}
