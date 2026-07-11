"use client";

import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { SiteScreenshot } from "@/components/mockups";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { boostLiveUrl } from "@/lib/site";

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
    <div className="grid items-center gap-10 rounded-3xl border border-line bg-surface p-6 shadow-soft lg:grid-cols-2 lg:p-10">
      <Reveal>
        <div>
          <span className="eyebrow">Flagship build</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
            Boost Baseball
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Parents enroll and pay online; admins run rosters, budgets, and follow-up from one
            dashboard.
          </p>
          <RevealStagger tight className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <RevealItem key={item.title}>
                <article className="rounded-xl border border-line bg-canvas px-4 py-3 transition hover:border-accent/25">
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
