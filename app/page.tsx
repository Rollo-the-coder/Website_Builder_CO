import type { Metadata } from "next";
import { services } from "@/lib/site";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Section, SectionHeading } from "@/components/section";
import { FrameworkCards } from "@/components/framework-cards";
import { CaseStudyPreview } from "@/components/case-study-preview";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/lib/site";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Seattle Small Business Websites & Systems",
  description:
    "Seattle and Bellevue website systems for small businesses: clearer messaging, better lead flow, forms, bookings, payments, and ongoing management.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />

      <Section className="bg-surface/40">
        <Problem />
      </Section>

      <Section id="framework">
        <SectionHeading
          eyebrow="How it works"
          title="Clarify. Build. Manage."
          description="A simple framework for turning an unclear website into a system that generates leads and runs smoother."
          align="center"
        />
        <div className="mt-12">
          <FrameworkCards />
        </div>
      </Section>

      <Section className="bg-surface/40">
        <CaseStudyPreview />
      </Section>

      <Section id="services">
        <SectionHeading
          eyebrow="Services"
          title="Everything your website needs to work harder"
          description="From messaging to payments to ongoing support — pick the parts you need now and add more as you grow."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      <Section id="process" className="bg-surface/40">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from audit to ongoing management"
          description="Audit, scope, build, launch, manage — so you always know what's happening and why."
          align="center"
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <Section id="packages">
        <SectionHeading
          eyebrow="Packages"
          title="Starting points, not rigid boxes"
          description="Transparent starting ranges. Final quotes depend on scope, and you'll always see it before any build begins."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink-muted">
          Not sure which fits? <ButtonLink href="/contact" variant="ghost" className="px-1 py-0 align-baseline">Start with a free audit</ButtonLink>.
        </p>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Proof"
          title="Flagship proof and launch-stage traction"
          description="Boost Baseball is the flagship build. Additional testimonials and quantified outcomes are added as projects complete and data is verified."
          align="center"
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
        <div className="mt-12">
          <Faq />
        </div>
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
