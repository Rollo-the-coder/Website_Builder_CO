"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

const pillars = [
  {
    title: "Clarify",
    description:
      "Marketing narrative, offer packaging, and page structure — so visitors instantly get it.",
    href: "/services#clarify",
  },
  {
    title: "Build",
    description:
      "The site plus the working parts behind it — forms, payments, portals, and automations.",
    href: "/services#build",
  },
  {
    title: "Manage",
    description:
      "Launch securely, then measure conversion and keep the systems healthy after go-live.",
    href: "/services#manage",
  },
] as const;

const audiences = [
  "Youth sports programs",
  "Gyms & coaches",
  "Local service businesses",
  "Appointment-based businesses",
];

export function Pillars() {
  return (
    <div>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What I do</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Clarify. Build. Manage.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            One person for the narrative, the systems behind the site, and the upkeep after launch.
          </p>
        </div>
      </Reveal>

      <RevealStagger className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
        {pillars.map((pillar) => (
          <RevealItem key={pillar.title}>
            <div className="flex h-full flex-col">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
              <Link
                href={pillar.href}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition hover:text-accent"
              >
                Explore {pillar.title.toLowerCase()}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal className="mt-12" delay={0.1}>
        <p className="text-sm font-medium text-ink">
          Built for businesses where the website touches operations:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft"
            >
              {audience}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
