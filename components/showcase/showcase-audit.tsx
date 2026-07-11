"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { easeOut, stagger } from "@/lib/motion";
import { site } from "@/lib/site";

const deliverables = [
  "A written review of your site, offer, and workflows",
  "A scorecard across 7 areas",
  "Your top 3 fixes, in order",
  "No obligation, no hard sell",
];

const auditRows = [
  { label: "Message clarity", score: 42 },
  { label: "CTA path", score: 55 },
  { label: "Mobile experience", score: 68 },
  { label: "Signup friction", score: 35 },
  { label: "Trust / proof", score: 48 },
  { label: "Local SEO", score: 60 },
  { label: "Automation", score: 30 },
];

export function ShowcaseAudit() {
  const reduce = useReducedMotion();

  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Free systems audit
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Get a straight answer about your site and systems.
          </h2>
          <ul className="mt-8 space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="mt-10 px-6 py-3.5 text-base">
            {site.primaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>

        <div className="rounded-[1.5rem] border border-line/70 bg-surface/60 p-6 shadow-lift sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display text-xl font-semibold text-ink">Sample scorecard</p>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Illustrative
            </span>
          </div>
          <ul className="mt-8 space-y-5">
            {auditRows.map((row, index) => (
              <li key={row.label}>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-ink">{row.label}</span>
                  <span className="tabular-nums text-ink-muted">{row.score}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-canvas">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: reduce ? `${row.score}%` : "0%" }}
                    whileInView={{ width: `${row.score}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: 1.1, ease: easeOut, delay: index * stagger.tight }
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
