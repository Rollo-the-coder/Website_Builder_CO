"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function ShowcaseFinale() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-6 sm:py-36 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50rem 40rem at 50% 120%, var(--cta-wash-1), transparent 55%), radial-gradient(40rem 30rem at 80% 0%, var(--cta-wash-2), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
        aria-hidden="true"
        animate={reduce ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.08, 0.95] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-balance text-4xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
          Find out what your website could be doing.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
          A free systems audit reviews your site, offer, and workflows — before you spend anything.
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact" className="px-8 py-4 text-base">
            {site.primaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
