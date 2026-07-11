"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  fadeUp,
  reducedFadeUp,
  reducedStagger,
  staggerContainer,
  staggerContainerTight,
  viewportOnce,
  viewportOnceLoose,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay in seconds before this item animates. */
  delay?: number;
  /** Use a looser viewport threshold for tall sections. */
  loose?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

/** Fade-up on intersect. Instant when prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  loose = false,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedFadeUp : fadeUp;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={loose ? viewportOnceLoose : viewportOnce}
      variants={variants}
      custom={delay}
      transition={
        reduce
          ? { duration: 0 }
          : delay
            ? { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  /** Tighter stagger for dense lists. */
  tight?: boolean;
  loose?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

/** Parent that staggers RevealItem children on intersect. */
export function RevealStagger({
  children,
  className,
  tight = false,
  loose = false,
  ...props
}: RevealStaggerProps) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? reducedStagger
    : tight
      ? staggerContainerTight
      : staggerContainer;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={loose ? viewportOnceLoose : viewportOnce}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

/** Child of RevealStagger — inherits stagger timing. */
export function RevealItem({ children, className, ...props }: RevealItemProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedFadeUp : fadeUp;

  return (
    <motion.div className={cn(className)} variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

/** Immediate entrance (page load / hero) — not scroll-triggered. */
export function RevealImmediate({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
