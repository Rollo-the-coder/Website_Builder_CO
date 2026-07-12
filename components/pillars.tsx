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

      <RevealStagger className="mt-12 grid gap-0 border border-line bg-cloud md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <RevealItem key={pillar.title}>
            <div
              className={`flex h-full flex-col p-6 sm:p-8 ${
                index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
              }`}
            >
              <p className="text-xs font-semibold tabular-nums tracking-wide text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
              <Link
                href={pillar.href}
                className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:text-primary"
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
        <div className="mt-4 flex flex-wrap gap-2">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-md border border-line bg-canvas-deep/60 px-3 py-1.5 text-sm font-medium text-ink-soft"
            >
              {audience}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
