"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { easeOut, stagger } from "@/lib/motion";

const deliverables = [
  "A written review of your site and lead flow",
  "A scorecard across 7 areas — messaging, CTAs, mobile, signup friction, trust, local SEO, automation",
  "Your top 3 fixes, in order",
  "No obligation, no hard sell",
];

const auditRows = [
  { label: "Message clarity", status: "Needs focus", score: 42 },
  { label: "CTA path", status: "Improve", score: 55 },
  { label: "Mobile experience", status: "Review", score: 68 },
  { label: "Signup/payment friction", status: "High", score: 35 },
  { label: "Trust/proof gaps", status: "Map", score: 48 },
  { label: "SEO/local basics", status: "Check", score: 60 },
  { label: "Automation opportunities", status: "Find", score: 30 },
];

export function AuditScorecard() {
  const reduce = useReducedMotion();

  return (
    <Reveal loose>
      <div className="grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <span className="eyebrow">Free audit</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get a straight answer about your website.
          </h2>
          <ul className="mt-6 space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-ink-muted">The audit is free — and it&apos;s the first step.</p>

          <ButtonLink href="/contact" className="mt-8">
            Get a free website audit
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>

        <div className="rounded-2xl border border-line bg-canvas/70 p-4">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
            <div>
              <p className="text-sm font-semibold text-ink">Sample scorecard</p>
              <p className="text-xs text-ink-muted">What your report covers.</p>
            </div>
            <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-ink">
              Illustrative
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {auditRows.map((row, index) => (
              <motion.li
                key={row.label}
                className="rounded-xl border border-line bg-surface px-4 py-3"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.4, ease: easeOut, delay: index * stagger.tight }
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                    <CheckIcon className="h-4 w-4 flex-none text-accent" />
                    {row.label}
                  </span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-ink-muted">
                    {row.status}
                  </span>
                </div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-mist" role="presentation">
                  <motion.div
                    className="h-full rounded-full bg-accent/70"
                    initial={{ width: reduce ? `${row.score}%` : "0%" }}
                    whileInView={{ width: `${row.score}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: 0.7, ease: easeOut, delay: 0.12 + index * stagger.tight }
                    }
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
