"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { packages } from "@/lib/site";
import { cn } from "@/lib/cn";

export function ShowcasePackages() {
  const reduce = useReducedMotion();
  const featured = packages.find((p) => p.featured) ?? packages[1]!;
  const others = packages.filter((p) => p.name !== featured.name);

  return (
    <section id="packages" className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Packages</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Starting points, not rigid boxes.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Transparent starting ranges — final scope and price are agreed before any build starts.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <motion.article
            className="relative overflow-hidden rounded-[1.75rem] border border-accent/40 bg-surface/80 p-8 shadow-lift ring-1 ring-accent/25 sm:p-10"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Most popular
            </span>
            <h3 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {featured.name}
            </h3>
            <p className="mt-3 text-ink-soft">{featured.blurb}</p>
            <p className="mt-6 font-display text-3xl font-semibold text-ink">{featured.setup}</p>
            <p className="text-sm text-ink-muted">starting at</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {featured.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-10">
              Request scope
            </ButtonLink>
          </motion.article>

          <div className="flex flex-col gap-6">
            {others.map((pkg, i) => (
              <motion.article
                key={pkg.name}
                className={cn(
                  "rounded-[1.5rem] border border-line/70 bg-canvas/40 p-6 sm:p-7",
                )}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: reduce ? 0 : 0.1 + i * 0.08 }}
              >
                <h3 className="font-display text-xl font-semibold text-ink">{pkg.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{pkg.blurb}</p>
                <p className="mt-4 text-lg font-semibold text-ink">{pkg.setup}</p>
                <p className="text-xs text-ink-muted">starting at</p>
                <ButtonLink href="/contact" variant="ghost" className="mt-4 px-0">
                  Request scope
                </ButtonLink>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
