"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/site";
import {
  fadeUp,
  reducedFadeUp,
  reducedStagger,
  staggerContainer,
  viewportOnce,
  easeOut,
} from "@/lib/motion";

export function ProcessSteps() {
  const reduce = useReducedMotion();
  const container = reduce ? reducedStagger : staggerContainer;
  const item = reduce ? reducedFadeUp : fadeUp;

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px lg:block"
        aria-hidden="true"
      >
        <motion.div
          className="h-full origin-left bg-accent/30"
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={reduce ? { duration: 0 } : { duration: 0.9, ease: easeOut, delay: 0.15 }}
        />
      </div>

      <motion.ol
        className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={container}
      >
        {processSteps.map((step) => (
          <motion.li
            key={step.step}
            className="card card-hover relative flex h-full flex-col"
            variants={item}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              {step.step}
            </span>
            <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
