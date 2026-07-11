import type { Transition, Variants } from "framer-motion";

/** Shared easing — calm ease-out, not bouncy. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.35,
  base: 0.5,
  slow: 0.65,
} as const;

export const stagger = {
  tight: 0.06,
  base: 0.08,
  loose: 0.1,
} as const;

export const fadeUpTransition: Transition = {
  duration: duration.base,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: fadeUpTransition,
  },
};

/** Parent container — staggers children via RevealItem. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.base,
      delayChildren: 0.04,
    },
  },
};

export const staggerContainerTight: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.tight,
      delayChildren: 0.02,
    },
  },
};

/** Instant variants when prefers-reduced-motion is on. */
export const reducedFadeUp: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const reducedStagger: Variants = {
  hidden: {},
  visible: {},
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportOnceLoose = { once: true, amount: 0.12 } as const;
