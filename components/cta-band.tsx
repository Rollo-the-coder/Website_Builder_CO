"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { TopoLines } from "@/components/topo-lines";
import { site } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "See what is holding your website back",
  description = "I take on a limited number of detailed audits each week so each review can include specific, useful recommendations.",
}: CtaBandProps) {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(30rem 30rem at 80% -20%, var(--cta-wash-1), transparent 60%), radial-gradient(30rem 30rem at 0% 120%, var(--cta-wash-2), transparent 60%)",
        }}
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.4, 0.62, 0.4],
              }
        }
        transition={
          reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        animate={reduce ? undefined : { opacity: [0.3, 0.5, 0.3] }}
        transition={
          reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <TopoLines className="text-primary-foreground" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="border-transparent bg-cloud"
            trackEventName="audit_cta_click"
            trackEventProps={{ location: "cta_band" }}
          >
            {site.primaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
