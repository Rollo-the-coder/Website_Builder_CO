import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { SiteScreenshot } from "@/components/mockups";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/button";
import { Reveal, RevealImmediate, RevealItem, RevealStagger } from "@/components/reveal";
import { boostLiveUrl } from "@/lib/site";

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

const deliveryNotes = [
  "Scoped requirements, vendor coordination, QA, and launch handoff owned end-to-end.",
  "Operations features mattered more than polish — clear payment options and automated confirmations cut admin follow-up.",
  "Production metrics are withheld until usage data is validated and client-approved.",
];

export default function BoostCaseStudyPage() {
  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <RevealImmediate>
              <span className="eyebrow">Flagship build</span>
            </RevealImmediate>
            <RevealImmediate delay={0.08}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Boost Baseball
              </h1>
            </RevealImmediate>
            <RevealImmediate delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Parents enroll and pay online; admins run rosters, budgets, and follow-up from one
                place — a youth baseball operations platform, not just a brochure site.
              </p>
            </RevealImmediate>
            <RevealImmediate delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={boostLiveUrl} target="_blank" rel="noopener noreferrer">
                  View live site
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Request a similar system
                </ButtonLink>
              </div>
            </RevealImmediate>
          </div>
          <RevealImmediate delay={0.14}>
            <SiteScreenshot
              src="/work/boost/home.png"
              alt="Boost Baseball homepage — Bellevue baseball development site"
              label="boost-orcin.vercel.app"
              href={boostLiveUrl}
            />
          </RevealImmediate>
        </div>
      </Section>

      <Section className="py-8">
        <RevealStagger className="grid gap-6 md:grid-cols-2">
          <RevealItem>
            <article className="card card-hover">
              <h2 className="text-xl font-semibold text-ink">The problem</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Youth sports programs juggle registrations, payments, rosters, and parent
                communication across spreadsheets, email threads, and manual processes. That creates
                errors, slow follow-up, and a lot of administrative overhead.
              </p>
            </article>
          </RevealItem>
          <RevealItem>
            <article className="card card-hover">
              <h2 className="text-xl font-semibold text-ink">The solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A single platform where parents enroll and pay online, admins manage rosters and
                budgets in a dashboard, and confirmations and updates are automated — turning manual
                operations into a clear, repeatable system.
              </p>
            </article>
          </RevealItem>
        </RevealStagger>
      </Section>

      <Section className="bg-surface/40">
        <Reveal>
          <SectionHeading eyebrow="Capabilities" title="What was built" />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <RevealItem key={feature}>
              <div className="flex items-start gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-soft transition hover:border-accent/25">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                {feature}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Demo flow"
            title="From sign-up to confirmation"
            description="The core parent journey the platform was designed around."
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {demoFlow.map((item) => (
            <RevealItem key={item.step}>
              <article className="card card-hover flex h-full flex-col">
                <span className="text-sm font-semibold text-accent">{item.step}</span>
                <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-surface/40">
        <Reveal>
          <SectionHeading
            eyebrow="Screens"
            title="A look at the system"
            description="Real captures from the live Boost site — marketing homepage and the Clubhouse registration flow."
          />
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 lg:grid-cols-2">
          <RevealItem>
            <SiteScreenshot
              src="/work/boost/home.png"
              alt="Boost Baseball marketing homepage"
              label="boost-orcin.vercel.app"
              caption="Parent-facing marketing site with clear offer and booking path."
              href={boostLiveUrl}
            />
          </RevealItem>
          <RevealItem>
            <SiteScreenshot
              src="/work/boost/tryouts.png"
              alt="Boost Baseball Clubhouse tryout registration"
              label="boost-orcin.vercel.app/tryouts"
              caption="Clubhouse registration — tryouts, enrollment, and family tools in one place."
              href={`${boostLiveUrl}tryouts`}
            />
          </RevealItem>
        </RevealStagger>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Delivery"
            title="How it shipped"
            description="End-to-end ownership from scope through launch — with lessons that shape every build."
          />
        </Reveal>
        <RevealStagger tight className="mt-8 max-w-3xl space-y-3">
          {deliveryNotes.map((note) => (
            <RevealItem key={note}>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{note}</span>
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section>
        <Reveal>
          <CtaBand
            title="Want a system like this for your business?"
            description="If you run signups, payments, or operations manually, an audit will show what to automate first."
          />
        </Reveal>
      </Section>
    </>
  );
}
