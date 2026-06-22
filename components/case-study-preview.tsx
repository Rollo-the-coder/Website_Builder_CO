import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { SystemPreview } from "@/components/mockups";

const highlights = [
  "Online registration & enrollment",
  "Payments & installment plans",
  "Parent portal & confirmations",
  "Admin dashboard & CSV export",
];

export function CaseStudyPreview() {
  return (
    <div className="grid items-center gap-10 rounded-3xl border border-line bg-surface p-6 shadow-soft lg:grid-cols-2 lg:p-10">
      <div>
        <span className="eyebrow">Flagship build</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">Boost Baseball</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          A youth baseball operations platform built to handle registration, payments, parent
          communication, admin workflows, roster tools, budgets, and email automation.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
              <ArrowRightIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ButtonLink href="/work/boost-baseball" className="mt-8">
          View Case Study
          <ArrowRightIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
      <SystemPreview />
    </div>
  );
}
