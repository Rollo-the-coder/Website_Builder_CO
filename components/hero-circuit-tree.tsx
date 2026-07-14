"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

type Branch = {
  d: string;
  duration: string;
  delay: string;
  stroke: "accent" | "blue" | "voltage";
  weight?: number;
};

/**
 * Circuit paths as a stacked-chevron evergreen: narrow tip, widening tiers,
 * short trunk base. Soft curves keep the original circuit line feel.
 */
const BRANCHES: Branch[] = [
  // Tip spike
  { d: "M160 88 V24", duration: "3.2s", delay: "0s", stroke: "voltage", weight: 3 },

  // Tier 1 (crown)
  { d: "M160 88 C148 102, 138 116, 128 128", duration: "3.6s", delay: "0.2s", stroke: "accent" },
  { d: "M160 88 C172 102, 182 116, 192 128", duration: "3.6s", delay: "0.45s", stroke: "blue" },
  { d: "M160 102 C150 114, 144 124, 140 132", duration: "3.3s", delay: "0.7s", stroke: "voltage" },
  { d: "M160 102 C170 114, 176 124, 180 132", duration: "3.3s", delay: "0.95s", stroke: "accent" },

  // Tier 2
  { d: "M160 148 C140 164, 122 182, 108 198", duration: "4s", delay: "0.15s", stroke: "blue" },
  { d: "M160 148 C180 164, 198 182, 212 198", duration: "4s", delay: "0.4s", stroke: "accent" },
  { d: "M160 164 C146 178, 134 192, 124 204", duration: "3.7s", delay: "0.65s", stroke: "voltage" },
  { d: "M160 164 C174 178, 186 192, 196 204", duration: "3.7s", delay: "0.9s", stroke: "blue" },

  // Tier 3
  { d: "M160 218 C132 238, 104 258, 82 278", duration: "4.5s", delay: "0.1s", stroke: "accent" },
  { d: "M160 218 C188 238, 216 258, 238 278", duration: "4.5s", delay: "0.35s", stroke: "voltage" },
  { d: "M160 236 C140 254, 120 272, 102 286", duration: "4.1s", delay: "0.6s", stroke: "blue" },
  { d: "M160 236 C180 254, 200 272, 218 286", duration: "4.1s", delay: "0.85s", stroke: "accent" },

  // Tier 4
  { d: "M160 296 C122 320, 84 344, 54 366", duration: "4.9s", delay: "0.2s", stroke: "blue" },
  { d: "M160 296 C198 320, 236 344, 266 366", duration: "4.9s", delay: "0.45s", stroke: "accent" },
  { d: "M160 316 C132 336, 102 356, 78 374", duration: "4.4s", delay: "0.7s", stroke: "voltage" },
  { d: "M160 316 C188 336, 218 356, 242 374", duration: "4.4s", delay: "0.95s", stroke: "blue" },

  // Tier 5 (base, widest)
  { d: "M160 344 C112 366, 68 390, 28 410", duration: "5.2s", delay: "0.25s", stroke: "accent" },
  { d: "M160 344 C208 366, 252 390, 292 410", duration: "5.2s", delay: "0.5s", stroke: "voltage" },
  { d: "M160 360 C124 380, 86 398, 52 414", duration: "4.6s", delay: "0.8s", stroke: "blue" },
  { d: "M160 360 C196 380, 234 398, 268 414", duration: "4.6s", delay: "1.05s", stroke: "accent" },

  // Trunk stub under canopy
  { d: "M160 360 V408", duration: "3.8s", delay: "0.3s", stroke: "accent", weight: 3.5 },
];

const NODES: { cx: number; cy: number; r: number; tone: "accent" | "voltage" | "blue" }[] = [
  { cx: 160, cy: 24, r: 5.5, tone: "voltage" },
  { cx: 160, cy: 88, r: 4, tone: "accent" },
  { cx: 160, cy: 148, r: 4, tone: "blue" },
  { cx: 160, cy: 218, r: 4, tone: "voltage" },
  { cx: 160, cy: 296, r: 4, tone: "accent" },
  { cx: 160, cy: 344, r: 4, tone: "blue" },
  { cx: 160, cy: 360, r: 3.5, tone: "voltage" },
  { cx: 160, cy: 408, r: 4.5, tone: "accent" },
  // Crown tips
  { cx: 128, cy: 128, r: 3, tone: "accent" },
  { cx: 192, cy: 128, r: 3, tone: "blue" },
  { cx: 140, cy: 132, r: 2.5, tone: "voltage" },
  { cx: 180, cy: 132, r: 2.5, tone: "accent" },
  // Tier 2 tips
  { cx: 108, cy: 198, r: 3.2, tone: "blue" },
  { cx: 212, cy: 198, r: 3.2, tone: "accent" },
  { cx: 124, cy: 204, r: 2.6, tone: "voltage" },
  { cx: 196, cy: 204, r: 2.6, tone: "blue" },
  // Tier 3 tips
  { cx: 82, cy: 278, r: 3.4, tone: "accent" },
  { cx: 238, cy: 278, r: 3.4, tone: "voltage" },
  { cx: 102, cy: 286, r: 2.8, tone: "blue" },
  { cx: 218, cy: 286, r: 2.8, tone: "accent" },
  // Tier 4 tips
  { cx: 54, cy: 366, r: 3.4, tone: "blue" },
  { cx: 266, cy: 366, r: 3.4, tone: "accent" },
  { cx: 78, cy: 374, r: 2.8, tone: "voltage" },
  { cx: 242, cy: 374, r: 2.8, tone: "blue" },
  // Base tips
  { cx: 28, cy: 410, r: 3.5, tone: "accent" },
  { cx: 292, cy: 410, r: 3.5, tone: "voltage" },
  { cx: 52, cy: 414, r: 2.8, tone: "blue" },
  { cx: 268, cy: 414, r: 2.8, tone: "accent" },
];

const strokeClass = {
  accent: "text-accent/70",
  blue: "text-accent-blue/65",
  voltage: "text-voltage/80",
} as const;

const fillClass = {
  accent: "text-accent",
  blue: "text-accent-blue",
  voltage: "text-voltage",
} as const;

export function HeroCircuitTree({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const glowId = `tree-glow-${uid}`;

  return (
    <motion.div
      className={cn("relative mx-auto w-full max-w-md lg:max-w-none", className)}
      initial={reduce ? false : { opacity: 0, x: 18, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={reduce ? { duration: 0 } : { duration: 0.7, ease: easeOut, delay: 0.18 }}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-[18%] rounded-full bg-accent/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[10%] top-[8%] h-36 w-36 rounded-full bg-voltage/12 blur-3xl"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 320 420"
        className="relative h-auto w-full drop-shadow-[0_0_28px_rgb(var(--color-accent)/0.18)]"
        fill="none"
        role="presentation"
      >
        <defs>
          <radialGradient id={glowId} cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="rgb(var(--color-voltage))" stopOpacity="0.18" />
            <stop offset="42%" stopColor="rgb(var(--color-accent))" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(var(--color-accent))" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="320" height="420" fill={`url(#${glowId})`} />

        {/* Soft trunk glow behind stub */}
        <path
          d="M160 360 V408"
          stroke="rgb(var(--color-accent))"
          strokeOpacity="0.16"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {BRANCHES.map((branch) => (
          <path
            key={`${branch.d}-${branch.delay}`}
            d={branch.d}
            className={cn(strokeClass[branch.stroke], !reduce && "hero-tree-trace")}
            stroke="currentColor"
            strokeWidth={branch.weight ?? 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={
              reduce
                ? undefined
                : {
                    animationDuration: branch.duration,
                    animationDelay: branch.delay,
                  }
            }
          />
        ))}

        {NODES.map((node) => (
          <g key={`${node.cx}-${node.cy}`}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r + 4}
              className={fillClass[node.tone]}
              fill="currentColor"
              opacity="0.16"
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              className={fillClass[node.tone]}
              fill="currentColor"
            />
          </g>
        ))}

        {!reduce
          ? BRANCHES.map((branch, index) => (
              <circle
                key={`dot-${index}`}
                r={index % 3 === 0 ? 3.4 : 2.6}
                className={index % 2 === 0 ? "text-voltage" : "text-accent"}
                fill="currentColor"
                opacity="0.95"
              >
                <animateMotion
                  dur={branch.duration}
                  begin={branch.delay}
                  repeatCount="indefinite"
                  path={branch.d}
                />
              </circle>
            ))
          : null}
      </svg>
    </motion.div>
  );
}
