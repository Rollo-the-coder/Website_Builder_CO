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
import { SiteScreenshot } from "@/components/mockups";
import { boostLiveUrl } from "@/lib/site";

export function ShowcaseTheater() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -40]);
  const scale = useTransform(scrollYProgress, [0.15, 0.45], [reduce ? 1 : 0.94, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          This could be yours
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          A working system — not a brochure site.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Boost Baseball: parents enroll and pay online; admins run rosters, budgets, and follow-up
          from one place.
        </p>

        <motion.div className="mt-12 origin-center" style={{ y, scale }}>
          <SiteScreenshot
            src="/work/boost/home.png"
            alt="Boost Baseball homepage — Bellevue baseball development site"
            label="boost-orcin.vercel.app"
            href={boostLiveUrl}
            className="mx-auto w-full max-w-5xl shadow-lift ring-1 ring-accent/20"
          />
        </motion.div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={boostLiveUrl} target="_blank" rel="noopener noreferrer">
            View live site
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="/work/boost-baseball" variant="secondary">
            Read the case study
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
