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

const stages = [
  {
    title: "Visitor",
    tone: "bg-accent-blue",
    nodes: ["Finds you", "Gets it", "Takes action"],
  },
  {
    title: "Website",
    tone: "bg-accent",
    nodes: ["Form", "Booking", "Payment"],
  },
  {
    title: "Your business",
    tone: "bg-accent-soft",
    nodes: ["Lead in one place", "Auto follow-up", "Clear next steps"],
  },
] as const;

function ScrubbedStageColumn({
  title,
  tone,
  nodes,
  columnIndex,
  progress,
}: {
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
    <motion.div
      className="relative z-10 flex flex-col rounded-2xl border border-line bg-surface/90 p-4 shadow-soft"
      style={{ opacity, scale, y }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{title}</p>
      <ul className="mt-3 space-y-2">
        {nodes.map((node, nodeIndex) => (
          <motion.li
            key={node}
            className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas/70 px-3 py-2.5 text-sm font-medium leading-snug text-ink-soft"
            style={{ opacity: nodeOpacities[nodeIndex] }}
          >
            <motion.span
              className={cn("mt-1.5 h-2 w-2 flex-none rounded-full", tone)}
              aria-hidden="true"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: columnIndex * 0.35 + nodeIndex * 0.2,
              }}
            />
            <span className="min-w-0 flex-1">{node}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function StageColumn({
  title,
  tone,
  nodes,
  columnIndex,
  reduce,
}: {
  title: string;
  tone: string;
  nodes: readonly string[];
  columnIndex: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="relative z-10 flex flex-col rounded-2xl border border-line bg-surface/90 p-4 shadow-soft"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.5, ease: easeOut, delay: columnIndex * 0.18 }
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{title}</p>
      <ul className="mt-3 space-y-2">
        {nodes.map((node, nodeIndex) => (
          <motion.li
            key={node}
            className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas/70 px-3 py-2.5 text-sm font-medium leading-snug text-ink-soft"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: 0.4,
                    ease: easeOut,
                    delay: columnIndex * 0.18 + 0.12 + nodeIndex * stagger.tight,
                  }
            }
          >
            <motion.span
              className={cn("mt-1.5 h-2 w-2 flex-none rounded-full", tone)}
              aria-hidden="true"
              animate={
                reduce
                  ? undefined
                  : {
                      scale: [1, 1.25, 1],
                      opacity: [0.85, 1, 0.85],
                    }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: columnIndex * 0.4 + nodeIndex * 0.25,
                    }
              }
            />
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
      whileInView={reduce || cinematic ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={reduce ? { duration: 0 } : { duration: 0.45, ease: easeOut }}
      style={cinematic && !reduce ? { opacity: headerOpacity } : undefined}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        What a working site looks like
      </p>
      <h2
        className={cn(
          "mt-2 font-display font-semibold tracking-tight text-ink",
          cinematic ? "text-2xl sm:text-3xl" : "text-2xl",
        )}
      >
        The system behind the site
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
        "relative overflow-hidden rounded-3xl border border-line bg-canvas-deep p-5 shadow-lift sm:p-6",
        cinematic && "p-6 sm:p-8 ring-1 ring-accent/20",
        className,
      )}
    >
      <TopoLines className="text-ink" />
      {cinematic ? (
        <div
          className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          aria-hidden="true"
        />
      ) : null}

      <div className="relative">
        <MapHeader cinematic={cinematic} reduce={reduce} progress={scrollYProgress} />

        <div className="relative mt-6">
          <SystemMapConnectors
            cinematic={Boolean(useScrub)}
            drawProgress={useScrub ? drawProgress : undefined}
          />

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-4">
            {stages.map((stage, index) => (
              <Fragment key={stage.title}>
                {index > 0 ? (
                  <div className="flex justify-center lg:hidden" aria-hidden="true">
                    <span className="h-3 w-px bg-accent/40" />
                  </div>
                ) : null}
                {useScrub ? (
                  <ScrubbedStageColumn
                    title={stage.title}
                    tone={stage.tone}
                    nodes={stage.nodes}
                    columnIndex={index}
                    progress={scrollYProgress}
                  />
                ) : (
                  <StageColumn
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
          className="mt-5 rounded-2xl border border-line bg-surface/80 px-4 py-3 text-sm font-medium text-ink-soft"
          initial={reduce || cinematic ? false : { opacity: 0, y: 8 }}
          whileInView={reduce || cinematic ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.45, ease: easeOut, delay: 0.55 }
          }
          style={useScrub ? { opacity: captionOpacity, y: captionY } : undefined}
        >
          Most sites stop at stage one. I build all three.
        </motion.figcaption>
      </div>
    </figure>
  );
}
