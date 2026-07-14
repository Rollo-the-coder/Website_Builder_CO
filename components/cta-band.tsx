"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { TopoLines } from "@/components/topo-lines";
import { site } from "@/lib/site";

const DEFAULT_TITLE = "See what is holding your website back";
const DEFAULT_DESCRIPTION =
  "I take on a limited number of detailed audits each week so each review can include specific, useful recommendations.";
const DEFAULT_MOBILE_DESCRIPTION =
  "Limited audit spots each week — specific, useful recommendations.";

type CtaBandProps = {
  title?: string;
  description?: string;
  /** Shorter support line on small screens. Falls back to description. */
  mobileDescription?: string;
};

export function CtaBand({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  mobileDescription,
}: CtaBandProps) {
  const reduce = useReducedMotion();
  const mobileCopy =
    mobileDescription ??
    (description === DEFAULT_DESCRIPTION ? DEFAULT_MOBILE_DESCRIPTION : description);

  return (
    <div className="relative overflow-hidden rounded-xl bg-primary px-4 py-8 text-center shadow-lift sm:px-10 sm:py-12 lg:px-12 lg:py-16">
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
        <h2 className="font-display text-balance text-2xl font-semibold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-snug text-primary-foreground/80 sm:mt-3 sm:text-base lg:mt-4 lg:text-lg lg:leading-relaxed">
          <span className="lg:hidden">{mobileCopy}</span>
          <span className="hidden lg:inline">{description}</span>
        </p>
        <div className="mt-5 flex justify-center sm:mt-7 lg:mt-8">
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="w-full border-transparent bg-cloud sm:w-auto"
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
