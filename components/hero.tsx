import { site } from "@/lib/site";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { SystemPreview } from "@/components/mockups";

const trustPoints = ["Mobile-first", "Signups & payments", "Automations", "Ongoing support"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">Modern websites + digital systems</span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Websites that explain, sell, and run better.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">
              Request a Website/System Audit
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/work/boost-baseball" variant="secondary">
              View Boost Case Study
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up lg:pl-6">
          <SystemPreview />
        </div>
      </div>
    </section>
  );
}
