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

      <RevealStagger className="mt-12 grid grid-cols-3 gap-0 border border-line bg-cloud">
        {pillars.map((pillar, index) => (
          <RevealItem key={pillar.title}>
            <div
              className={`flex h-full flex-col p-3 sm:p-6 md:p-8 ${
                index > 0 ? "border-l border-line" : ""
              }`}
            >
              <p className="text-[10px] font-semibold tabular-nums tracking-wide text-accent sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold tracking-tight text-ink sm:mt-3 sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-snug text-ink-soft sm:mt-3 sm:text-sm sm:leading-relaxed">
                {pillar.description}
              </p>
              <Link
                href={pillar.href}
                className="group mt-3 inline-flex items-center gap-0.5 text-[11px] font-semibold text-accent transition hover:text-primary sm:mt-5 sm:gap-1 sm:text-sm"
              >
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore {pillar.title.toLowerCase()}</span>
                <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" />
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
