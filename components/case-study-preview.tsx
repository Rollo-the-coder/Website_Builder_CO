"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { SiteScreenshot } from "@/components/mockups";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { boostLiveUrl } from "@/lib/site";

const highlights = [
  {
    title: "Parents & players",
    text: "Sign up, manage calendars, enroll in programs, and stay in the loop from one place.",
  },
  {
    title: "Payments & installment plans",
    text: "Checkout options built around how families enroll — not a single dead-end form.",
  },
  {
    title: "Admin operations",
    text: "Rosters, budgets, registrations, and follow-up — the other side of the same system.",
  },
];

export function CaseStudyPreview() {
  return (
    <div className="grid items-center gap-10 rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift lg:grid-cols-2 lg:p-10">
      <Reveal>
        <div>
          <span className="eyebrow">Flagship build</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
            Boost Baseball
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            A full site for both sides — not a brochure. Parents and players manage calendars,
            signups, and more; admins run rosters, budgets, and follow-up. Everyone interacts in
            one system.
          </p>
          <RevealStagger tight className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <RevealItem key={item.title}>
                <article className="rounded-lg border border-line bg-canvas px-4 py-3 transition hover:border-accent/40">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <CheckIcon className="h-4 w-4 flex-none text-accent" />
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={boostLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View live site
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/work/boost-baseball" variant="secondary">
              Read the case study
            </ButtonLink>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12} loose>
        <SiteScreenshot
          src="/work/boost/home.png"
          alt="Boost Baseball homepage — Bellevue baseball development site"
          label="boost-orcin.vercel.app"
          href={boostLiveUrl}
        />
      </Reveal>
    </div>
  );
}
