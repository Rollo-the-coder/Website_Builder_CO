import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { SystemPreview, ScreenshotPlaceholder } from "@/components/mockups";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Boost Baseball Case Study",
  description:
    "Flagship youth sports website system: registration, payments, parent communication, dashboards, rosters, budgets, and operational automation.",
  alternates: { canonical: "/work/boost-baseball" },
};

const features = [
  "Online registration & enrollment",
  "Payments & installment plans",
  "Parent portal with confirmations",
  "Admin dashboard & roster tools",
  "Budgets & CSV export",
  "Automated confirmation emails",
];

const demoFlow = [
  { step: "01", title: "Discover", text: "A parent lands on the program page and sees what's offered." },
  { step: "02", title: "Enroll", text: "They sign up and enroll their player in a clinic or roster." },
  { step: "03", title: "Pay", text: "They pay in full or choose an installment plan at checkout." },
  { step: "04", title: "Confirm", text: "They get an automated confirmation email with details." },
  { step: "05", title: "Manage", text: "Admins see the registration and payment in the dashboard." },
];

const systems = [
  "Requirements & scope management",
  "Vendor / integration coordination",
  "Testing & quality checks",
  "Client communication",
  "Launch & handoff",
];

const architecture = [
  "Parent-facing program and enrollment pages tied to structured registration data",
  "Payment flow with full-pay and installment-plan support",
  "Operational admin dashboard for registrations, rosters, and payment visibility",
  "Automated confirmation and reminder email workflows",
  "Reporting outputs for budgets and CSV exports",
];

const proofForClients = [
  "This project proves the same approach can work for programs, memberships, clinics, and service businesses that manage signups and payments.",
  "It demonstrates practical systems thinking: narrative, conversion flow, operations tooling, and communication automation in one scoped build.",
  "It shows launch ownership from planning through QA, stakeholder communication, and handoff.",
];

const lessons = [
  "Operations features matter more than visual polish for retention.",
  "Clear payment options (full vs installments) reduce signup drop-off.",
  "Automating confirmations cut down manual admin follow-up.",
];

export default function BoostCaseStudyPage() {
  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Flagship build</span>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Boost Baseball
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              A youth baseball operations platform — not just a website. Built to handle
              registration, payments, parent communication, admin workflows, roster tools, budgets,
              and email automation.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">
                Request a similar system
                <ArrowRightIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <SystemPreview />
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-xl font-semibold text-ink">The problem</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Youth sports programs juggle registrations, payments, rosters, and parent
              communication across spreadsheets, email threads, and manual processes. That creates
              errors, slow follow-up, and a lot of administrative overhead.
            </p>
          </article>
          <article className="card">
            <h2 className="text-xl font-semibold text-ink">The solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              A single platform where parents enroll and pay online, admins manage rosters and
              budgets in a dashboard, and confirmations and updates are automated — turning manual
              operations into a clear, repeatable system.
            </p>
          </article>
        </div>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading eyebrow="Capabilities" title="What was built" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-soft">
              <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Demo flow"
          title="From sign-up to confirmation"
          description="The core parent journey the platform was designed around."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {demoFlow.map((item) => (
            <li key={item.step} className="card flex h-full flex-col">
              <span className="text-sm font-semibold text-accent">{item.step}</span>
              <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Screens"
          title="A look at the system"
          description="Visual captures are being prepared; preview panels below represent the implemented flows and dashboard surfaces."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ScreenshotPlaceholder label="boostbaseball.example/register" caption="Parent-facing registration & payment flow." />
          <ScreenshotPlaceholder label="app.boostbaseball.example/admin" caption="Admin dashboard with rosters, payments, and budgets." />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Delivery" title="Systems & ownership" />
            <ul className="mt-8 space-y-3">
              {systems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Current status" title="Launch-stage outcomes" />
            <div className="mt-8 card">
              <p className="text-sm leading-relaxed text-ink-soft">
                This is a launch-stage build with core registration, payment, communication, and admin
                workflows implemented. Quantitative production metrics are intentionally withheld until
                usage data is validated and client-approved.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-ink">Lessons learned</h3>
              <ul className="mt-3 space-y-2">
                {lessons.map((lesson) => (
                  <li key={lesson} className="flex items-start gap-2 text-sm text-ink-soft">
                    <ArrowRightIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Architecture" title="Operations-first system design" />
            <ul className="mt-8 space-y-3">
              {architecture.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What this proves" title="Why this matters for future clients" />
            <ul className="mt-8 space-y-3">
              {proofForClients.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <ArrowRightIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Want a system like this for your business?"
          description="If you run signups, payments, or operations manually, an audit will show what to automate first."
        />
      </Section>
    </>
  );
}
