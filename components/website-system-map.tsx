"use client";

import { Fragment, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/cn";
import { TopoLines } from "@/components/topo-lines";
import { SystemMapConnectors } from "@/components/system-map-connectors";
import { easeOut, stagger } from "@/lib/motion";

import { frameworkStages } from "@/lib/site";

const stages = frameworkStages.map((stage, index) => ({
  ...stage,
  tone: (["bg-accent-blue", "bg-accent", "bg-voltage"] as const)[index]!,
}));

function ScrubbedStageColumn({
  step,
  title,
  tone,
  nodes,
  columnIndex,
  progress,
}: {
  step: string;
  title: string;
  tone: string;
  nodes: readonly string[];
  columnIndex: number;
  progress: MotionValue<number>;
}) {
  const start = columnIndex * 0.28;
  const mid = start + 0.18;
  const opacity = useTransform(progress, [start, mid, mid + 0.35, 1], [0.35, 1, 1, 0.55]);
  const scale = useTransform(progress, [start, mid], [0.96, 1]);
  const y = useTransform(progress, [start, mid], [18, 0]);
  const node0 = useTransform(progress, [start + 0.05, mid], [0.2, 1]);
  const node1 = useTransform(progress, [start + 0.09, mid + 0.04], [0.2, 1]);
  const node2 = useTransform(progress, [start + 0.13, mid + 0.08], [0.2, 1]);
  const nodeOpacities = [node0, node1, node2];

  return (
    <motion.div className="relative z-10 flex flex-col" style={{ opacity, scale, y }}>
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-semibold tabular-nums tracking-wide text-accent">{step}</span>
        <p className="font-display text-lg font-semibold tracking-tight text-ink">{title}</p>
      </div>
      <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
        {nodes.map((node, nodeIndex) => (
          <motion.li
            key={node}
            className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
            style={{ opacity: nodeOpacities[nodeIndex] }}
          >
            <span className={cn("mt-1.5 h-1.5 w-1.5 flex-none rounded-full", tone)} aria-hidden="true" />
            <span className="min-w-0 flex-1">{node}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function StageColumn({
  step,
  title,
  tone,
  nodes,
  columnIndex,
  reduce,
}: {
  step: string;
  title: string;
  tone: string;
  nodes: readonly string[];
  columnIndex: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="relative z-10 flex flex-col rounded-lg border border-line/80 bg-cloud/70 p-4"
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.55, ease: easeOut, delay: 0.2 + columnIndex * 0.16 }
      }
    >
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-semibold tabular-nums tracking-wide text-accent">{step}</span>
        <p className="font-display text-lg font-semibold tracking-tight text-ink">{title}</p>
      </div>
      <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
        {nodes.map((node, nodeIndex) => (
          <motion.li
            key={node}
            className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: 0.4,
                    ease: easeOut,
                    delay: 0.35 + columnIndex * 0.16 + nodeIndex * stagger.tight,
                  }
            }
          >
            <span className={cn("mt-1.5 h-1.5 w-1.5 flex-none rounded-full", tone)} aria-hidden="true" />
            <span className="min-w-0 flex-1">{node}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function MapHeader({
  cinematic,
  reduce,
  progress,
}: {
  cinematic: boolean;
  reduce: boolean | null;
  progress: MotionValue<number>;
}) {
  const headerOpacity = useTransform(progress, [0, 0.2], [0.4, 1]);

  return (
    <motion.div
      initial={reduce || cinematic ? false : { opacity: 0, y: 10 }}
      animate={reduce || cinematic ? undefined : { opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: easeOut, delay: 0.05 }}
      style={cinematic && !reduce ? { opacity: headerOpacity } : undefined}
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-sm bg-voltage" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          How it should work
        </p>
      </div>
      <h2
        className={cn(
          "mt-2 font-display font-semibold tracking-tight text-ink",
          cinematic ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
        )}
      >
        Message → conversion → operations
      </h2>
    </motion.div>
  );
}

export function WebsiteSystemMap({
  className,
  cinematic = false,
}: {
  className?: string;
  cinematic?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const captionOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.55, 0.85], [12, 0]);
  const drawProgress = useTransform(scrollYProgress, [0.1, 0.55], [0, 1]);
  const useScrub = cinematic && !reduce;

  return (
    <figure
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-ink/15 bg-canvas-deep p-5 shadow-lift sm:p-6",
        cinematic && "rounded-2xl p-6 sm:p-8 ring-1 ring-accent/20",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-ink) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ink) / 0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <TopoLines className="text-ink" />
      <div
        className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <MapHeader cinematic={cinematic} reduce={reduce} progress={scrollYProgress} />

        <div className="relative mt-7">
          <SystemMapConnectors
            cinematic={Boolean(useScrub)}
            drawProgress={useScrub ? drawProgress : undefined}
          />

          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-5">
            {stages.map((stage, index) => (
              <Fragment key={stage.title}>
                {index > 0 ? (
                  <div className="flex justify-center lg:hidden" aria-hidden="true">
                    <span className="flex h-6 w-px items-center bg-accent/40">
                      <span className="mx-auto h-1.5 w-1.5 rounded-full bg-voltage" />
                    </span>
                  </div>
                ) : null}
                {useScrub ? (
                  <ScrubbedStageColumn
                    step={stage.step}
                    title={stage.title}
                    tone={stage.tone}
                    nodes={stage.nodes}
                    columnIndex={index}
                    progress={scrollYProgress}
                  />
                ) : (
                  <StageColumn
                    step={stage.step}
                    title={stage.title}
                    tone={stage.tone}
                    nodes={stage.nodes}
                    columnIndex={index}
                    reduce={reduce}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <motion.figcaption
          className="mt-6 border-t border-line pt-4 text-sm font-medium text-ink-soft"
          initial={reduce || cinematic ? false : { opacity: 0, y: 8 }}
          animate={reduce || cinematic ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.45, ease: easeOut, delay: 0.7 }
          }
          style={useScrub ? { opacity: captionOpacity, y: captionY } : undefined}
        >
          Most sites stop at stage one — a page that describes the business. I
          build all three.
        </motion.figcaption>
      </div>
    </figure>
  );
}
