"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

/**
 * Large voltage sun node — circuit pads on the ray tips, rotating via ring.
 * Accent-blue sky wash behind it so the yellow reads clearly.
 */

const SUN_CX = 200;
const SUN_CY = 120;

// Rays from inner radius ~38 to outer ~68
const SUN_RAYS = [
  "M200 82 V52",
  "M200 158 V188",
  "M162 120 H132",
  "M238 120 H268",
  "M173.1 93.1 L151.9 71.9",
  "M226.9 93.1 L248.1 71.9",
  "M226.9 146.9 L248.1 168.1",
  "M173.1 146.9 L151.9 168.1",
];

const SUN_PADS: [number, number][] = [
  [200, 52],
  [200, 188],
  [132, 120],
  [268, 120],
  [151.9, 71.9],
  [248.1, 71.9],
  [248.1, 168.1],
  [151.9, 168.1],
];

export function HeroCircuitTree({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const skyId = `sun-sky-${uid}`;

  return (
    <motion.div
      className={cn(
        "relative mx-auto w-full",
        compact ? "max-h-[148px] max-w-[280px]" : "max-w-lg lg:max-w-none",
        className,
      )}
      initial={reduce ? false : { opacity: 0, ...(compact ? { y: 12 } : { x: 18 }), scale: 0.97 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={reduce ? { duration: 0 } : { duration: 0.7, ease: easeOut, delay: 0.18 }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[28%] bg-accent-blue/28",
          compact ? "blur-xl" : "blur-2xl",
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/40",
          compact ? "h-40 w-40 blur-2xl" : "h-64 w-64 blur-3xl",
        )}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 400 240"
        className={cn(
          "relative h-auto w-full",
          compact
            ? "max-h-[148px] drop-shadow-[0_0_16px_rgb(var(--color-voltage)/0.2)]"
            : "drop-shadow-[0_0_28px_rgb(var(--color-voltage)/0.22)]",
        )}
        fill="none"
        role="presentation"
      >
        <defs>
          <radialGradient id={skyId} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgb(var(--color-accent-blue))" stopOpacity="0.48" />
            <stop offset="50%" stopColor="rgb(var(--color-accent-blue))" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(var(--color-accent-blue))" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="240" fill="rgb(var(--color-accent-blue))" opacity="0.1" rx="24" />
        <rect width="400" height="240" fill={`url(#${skyId})`} />

        <g className="text-voltage" aria-hidden="true">
          <circle cx={SUN_CX} cy={SUN_CY} r="72" fill="currentColor" opacity="0.1" />
          <circle cx={SUN_CX} cy={SUN_CY} r="48" fill="currentColor" opacity="0.18" />
          <circle
            cx={SUN_CX}
            cy={SUN_CY}
            r="36"
            stroke="currentColor"
            strokeWidth="2.2"
            opacity="0.9"
            className={cn(!reduce && "hero-tree-trace")}
            style={reduce ? undefined : { animationDuration: "8s" }}
          />
          {SUN_RAYS.map((d) => (
            <path
              key={d}
              d={d}
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              opacity="0.95"
              className={cn(!reduce && "hero-tree-trace")}
              style={reduce ? undefined : { animationDuration: "6s", animationDelay: "0.3s" }}
            />
          ))}
          {SUN_PADS.map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="6.5" fill="currentColor" opacity="0.16" />
              <circle cx={cx} cy={cy} r="3.6" fill="currentColor" />
            </g>
          ))}
          <circle cx={SUN_CX} cy={SUN_CY} r="26" fill="currentColor" opacity="0.3" />
          <circle cx={SUN_CX} cy={SUN_CY} r="18" fill="currentColor" />
        </g>
      </svg>
    </motion.div>
  );
}
