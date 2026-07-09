import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { SystemPreview } from "@/components/mockups";
import { Reveal } from "@/components/reveal";

const highlights = [
  {
    title: "Parent signup flow",
    text: "Program pages, registration, and confirmations in one path.",
  },
  {
    title: "Payments & installment plans",
    text: "Checkout options built around how families enroll.",
  },
  {
    title: "Admin operations dashboard",
    text: "Rosters, budgets, registrations, and follow-up in one place.",
  },
];

export function CaseStudyPreview() {
  return (
    <Reveal>
      <div className="grid items-center gap-10 rounded-3xl border border-line bg-surface p-6 shadow-soft lg:grid-cols-2 lg:p-10">
        <div>
          <span className="eyebrow">Flagship build</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">Boost Baseball</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A youth baseball platform where parents register and pay online, and admins run rosters,
            budgets, and follow-up from one dashboard.
          </p>
          <div className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-xl border border-line bg-canvas px-4 py-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <CheckIcon className="h-4 w-4 flex-none text-accent" />
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/work/boost-baseball" className="mt-8">
            View the Boost case study
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
        <SystemPreview />
      </div>
    </Reveal>
  );
}
