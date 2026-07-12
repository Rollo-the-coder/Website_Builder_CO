"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/cn";

/** Sticky scrub chapters for the system reel. */
const chapters = [
  {
    id: "message",
    title: "Message",
    line: "The offer lands — visitors know what you do, why it matters, and what to do next.",
    nodes: ["Clear offer", "Why it matters", "Obvious next step"],
  },
  {
    id: "conversion",
    title: "Conversion",
    line: "Forms, booking, and payment live in one clear path — not three tools.",
    nodes: ["Form or booking", "Payment", "Confirmation"],
  },
  {
    id: "operations",
    title: "Operations",
    line: "The lead lands, follow-up fires, and you see what to do next.",
    nodes: ["Lead lands", "Automatic follow-up", "You see what's next"],
  },
] as const;

function ChapterPanel({
  chapter,
  index,
  progress,
  reduce,
}: {
  chapter: (typeof chapters)[number];
  index: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const start = index / chapters.length;
  const mid = start + 0.12;
  const end = (index + 1) / chapters.length;
  const opacity = useTransform(
    progress,
    [start, mid, end - 0.05, end],
    reduce ? [1, 1, 1, 1] : [0.25, 1, 1, 0.35],
  );
  const scale = useTransform(progress, [start, mid], reduce ? [1, 1] : [0.96, 1]);
  const x = useTransform(progress, [start, mid], reduce ? [0, 0] : [40, 0]);

  return (
    <motion.article
      className="flex min-h-[70vh] flex-col justify-center border-b border-line/40 py-16 last:border-b-0 lg:min-h-0 lg:border-b-0 lg:py-0"
      style={reduce ? undefined : { opacity, scale, x }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Act {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {chapter.title}
      </h3>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{chapter.line}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {chapter.nodes.map((node) => (
          <li
            key={node}
            className="rounded-full border border-line/70 bg-surface/60 px-4 py-2 text-sm font-medium text-ink"
          >
            {node}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function StoryStage({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const active0 = useTransform(progress, [0, 0.33, 0.4], [1, 1, 0.35]);
  const active1 = useTransform(progress, [0.28, 0.5, 0.72], [0.35, 1, 0.35]);
  const active2 = useTransform(progress, [0.6, 0.78, 1], [0.35, 1, 1]);
  const opacities = [active0, active1, active2];
  const draw = useTransform(progress, [0.05, 0.9], [0, 1]);

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-line/70 bg-surface/70 p-6 shadow-lift sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Live path</p>
      <div className="relative mt-6 space-y-4">
        {!reduce ? (
          <svg
            className="pointer-events-none absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-2 sm:block"
            viewBox="0 0 8 200"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M4 0 V200"
              stroke="currentColor"
              className="text-accent"
              strokeWidth="2"
              style={{ pathLength: draw }}
            />
          </svg>
        ) : null}
        {chapters.map((chapter, i) => (
          <motion.div
            key={chapter.id}
            className="rounded-2xl border border-line/60 bg-canvas/60 px-5 py-4 sm:ml-8"
            style={reduce ? undefined : { opacity: opacities[i] }}
          >
            <p className="font-display text-xl font-semibold text-ink">{chapter.title}</p>
            <p className="mt-1 text-sm text-ink-muted">{chapter.nodes.join(" → ")}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ShowcaseStory() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="showcase-story" ref={ref} className="relative">
      <div className="px-5 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The reel</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Scroll the machine into motion.
          </h2>
        </div>
      </div>

      {/* Mobile: stacked acts */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:hidden lg:px-8">
        {chapters.map((chapter, index) => (
          <ChapterPanel
            key={chapter.id}
            chapter={chapter}
            index={index}
            progress={scrollYProgress}
            reduce={true}
          />
        ))}
        <div className="pb-16">
          <StoryStage progress={scrollYProgress} reduce={true} />
        </div>
      </div>

      {/* Desktop: sticky scrub frame */}
      <div className={cn("relative hidden lg:block", reduce ? "py-20" : "h-[280vh]")}>
        <div className="sticky top-28 mx-auto grid max-w-6xl grid-cols-2 items-center gap-12 px-8 py-10">
          <div className="space-y-10">
            {chapters.map((chapter, index) => (
              <ChapterPanel
                key={chapter.id}
                chapter={chapter}
                index={index}
                progress={scrollYProgress}
                reduce={reduce}
              />
            ))}
          </div>
          <StoryStage progress={scrollYProgress} reduce={reduce} />
        </div>
      </div>
    </section>
  );
}
