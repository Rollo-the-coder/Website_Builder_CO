"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { stallFixCards } from "@/lib/site";

export function StallAndFix() {
  return (
    <div>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Clarify. Build. Manage.</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where websites stall—and how Gotta Build fixes it
          </h2>
        </div>
      </Reveal>

      <RevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
        {stallFixCards.map((card, index) => (
          <RevealItem key={card.title}>
            <article className="flex h-full flex-col rounded-xl border border-line bg-cloud p-5 sm:p-6">
              <p className="text-xs font-semibold tabular-nums tracking-wide text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                {card.title}
              </h3>
              <div className="mt-4 flex-1 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    Problem
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{card.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    Solution
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{card.solution}</p>
                </div>
              </div>
              <Link
                href={`/services#${card.title.toLowerCase() === "clarify" ? "websites-conversion" : card.title.toLowerCase() === "build" ? "bookings-payments-portals" : "security-analytics-management"}`}
                className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:text-primary"
              >
                Explore services
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );
}
