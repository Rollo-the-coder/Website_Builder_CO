"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const stageNodes = [
  { label: "Visitor", items: ["Finds you", "Gets it", "Takes action"], tone: "bg-accent-blue" },
  { label: "Website", items: ["Form", "Booking", "Payment"], tone: "bg-accent" },
  { label: "Business", items: ["Lead lands", "Follow-up", "Next action"], tone: "bg-accent-soft" },
] as const;

function HeroStage({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-line/80 bg-surface/80 shadow-lift backdrop-blur-sm">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(40rem 24rem at 90% -10%, var(--mock-wash-2), transparent 60%), radial-gradient(32rem 22rem at 0% 100%, var(--mock-wash-1), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative border-b border-line/70 px-5 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 rounded-md bg-canvas/80 px-3 py-1 text-xs text-ink-muted">
            system.gottabuild.live
          </span>
        </div>
      </div>
      <div className="relative grid gap-4 p-5 sm:grid-cols-3 sm:gap-5 sm:p-7">
        {stageNodes.map((col, i) => (
          <motion.div
            key={col.label}
            className="rounded-2xl border border-line/70 bg-canvas/50 p-4"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduce ? 0 : 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {col.label}
            </p>
            <ul className="mt-3 space-y-2">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-line/60 bg-surface/70 px-3 py-2 text-sm font-medium text-ink"
                >
                  <span className={cn("h-2 w-2 rounded-full", col.tone)} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="relative border-t border-line/70 px-5 py-3 text-sm text-ink-soft sm:px-6">
        Most sites stop at stage one. This one runs all three.
      </p>
    </div>
  );
}

export function ShowcaseHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const beamY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const beam2Y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const stageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.35]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8"
    >
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-0 h-[70vh] w-[70vw] rotate-12 bg-gradient-to-br from-accent/25 via-accent/5 to-transparent blur-3xl"
        style={{ y: beamY, opacity: fade }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[50vh] w-[55vw] -rotate-6 bg-gradient-to-tl from-accent-blue/20 to-transparent blur-3xl"
        style={{ y: beam2Y }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.name}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-3xl font-display text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduce ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.tagline}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Bookings, payments, portals, and automations — built to run the business, then kept running.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <ButtonLink href="/contact" className="px-6 py-3.5 text-base">
            Get a free website audit
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="/work/boost-baseball" variant="secondary" className="px-6 py-3.5 text-base">
            See Boost
          </ButtonLink>
        </motion.div>

        <motion.div className="mt-12 sm:mt-14" style={{ y: stageY, opacity: fade }}>
          <HeroStage reduce={reduce} />
        </motion.div>

        <p className="mt-8 text-sm text-ink-muted">
          Seattle · Bellevue · Eastside — systems for programs, gyms, tutors, and local services.
        </p>
      </div>
    </section>
  );
}
