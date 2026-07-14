"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { easeOut, stagger } from "@/lib/motion";

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-canvas-deep px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="ml-3 truncate rounded-md bg-surface px-3 py-1 text-xs text-ink-muted">
        {label}
      </span>
    </div>
  );
}

const capabilityNodes = [
  { label: "Signup flow", text: "Parent enrollment path", tone: "bg-accent-blue" },
  { label: "Payment options", text: "Checkout + installments", tone: "bg-accent" },
  { label: "Admin visibility", text: "Rosters, budgets, next actions", tone: "bg-accent-soft" },
] as const;

const rows = [
  { name: "Parent signup flow", status: "Program details", activeLabel: "Live" },
  { name: "Payments & installment plans", status: "Checkout options", activeLabel: "Live" },
  { name: "Admin operations dashboard", status: "Next actions", activeLabel: "Live" },
] as const;

// Labeled proof preview for case-study surfaces. Pure CSS + motion, no external assets.
export function SystemPreview({
  className,
  cinematic = false,
}: {
  className?: string;
  cinematic?: boolean;
}) {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40, visible: false });
  const [activated, setActivated] = useState(false);
  const enterDelay = cinematic ? 0.08 : 0;
  const enterStagger = cinematic ? stagger.loose : stagger.base;

  useEffect(() => {
    if (reduce) {
      setActivated(true);
      return;
    }
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActivated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, visible: true });
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-canvas-deep shadow-lift",
        cinematic && "ring-1 ring-accent/25",
        className,
      )}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setSpotlight((s) => ({ ...s, visible: false }))}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(28rem 18rem at 84% 0%, var(--mock-wash-1), transparent 65%), radial-gradient(24rem 20rem at 8% 100%, var(--mock-wash-2), transparent 60%)",
        }}
        aria-hidden="true"
      />
      {cinematic && !reduce ? (
        <motion.div
          className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
          aria-hidden="true"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
      {!reduce && spotlight.visible ? (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(18rem 14rem at ${spotlight.x}% ${spotlight.y}%, var(--spotlight), transparent 55%)`,
          }}
          aria-hidden="true"
        />
      ) : null}
      <div className="relative">
        <BrowserChrome label="boostbaseball.example/system-preview" />
        <div className={cn("p-4", cinematic && "p-5 sm:p-6")}>
          <motion.p
            className="w-fit rounded-full bg-sage px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={activated ? { opacity: 1, y: 0 } : reduce ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: cinematic ? 0.5 : 0.4, ease: easeOut, delay: enterDelay }}
          >
            System overview
          </motion.p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {capabilityNodes.map((panel, index) => (
              <motion.div
                key={panel.label}
                className="rounded-xl border border-line bg-surface/90 px-3 py-3 shadow-soft"
                initial={reduce ? false : { opacity: 0, y: cinematic ? 18 : 12, scale: cinematic ? 0.96 : 1 }}
                animate={
                  activated
                    ? { opacity: 1, y: 0, scale: 1 }
                    : reduce
                      ? undefined
                      : { opacity: 0, y: cinematic ? 18 : 12, scale: cinematic ? 0.96 : 1 }
                }
                transition={{
                  duration: cinematic ? 0.55 : 0.45,
                  ease: easeOut,
                  delay: reduce ? 0 : enterDelay + 0.1 + index * enterStagger,
                }}
              >
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  <span className={cn("h-2 w-2 rounded-full", panel.tone)} aria-hidden="true" />
                  {panel.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-ink">{panel.text}</p>
              </motion.div>
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {rows.map((row, index) => (
              <motion.li
                key={row.name}
                className="flex items-center justify-between rounded-xl border border-line bg-surface/90 px-4 py-3"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={
                  activated ? { opacity: 1, y: 0 } : reduce ? undefined : { opacity: 0, y: 10 }
                }
                transition={{
                  duration: cinematic ? 0.5 : 0.4,
                  ease: easeOut,
                  delay: reduce ? 0 : enterDelay + 0.4 + index * enterStagger,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                    B
                  </span>
                  <span className="text-sm font-medium text-ink">{row.name}</span>
                </div>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-500",
                    activated ? "bg-sage text-accent" : "bg-mist text-ink-muted",
                    cinematic && activated && "ring-1 ring-accent/30",
                  )}
                >
                  {activated ? row.activeLabel : row.status}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Generic labeled placeholder for screenshots/mockups not yet provided.
export function ScreenshotPlaceholder({
  label,
  caption,
  className,
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-dashed border-line bg-surface shadow-soft",
        className,
      )}
    >
      <BrowserChrome label={label} />
      <div className="grid min-h-[12rem] place-items-center bg-canvas-deep/60 px-6 py-10 text-center">
        <div>
          <p className="text-sm font-medium text-ink-muted">Screenshot coming soon</p>
          {caption ? <p className="mt-2 text-xs text-ink-muted">{caption}</p> : null}
        </div>
      </div>
    </figure>
  );
}

/** Real site screenshot framed in browser chrome. */
export function SiteScreenshot({
  src,
  alt,
  label,
  caption,
  href,
  className,
  hideCaptionOnMobile = false,
}: {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  href?: string;
  className?: string;
  hideCaptionOnMobile?: boolean;
}) {
  const frame = (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-canvas-deep shadow-lift",
        href && "transition hover:border-accent/35 hover:shadow-lift",
        className,
      )}
    >
      <BrowserChrome label={label} />
      <div className="relative aspect-[16/10] bg-canvas-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "border-t border-line bg-surface px-4 py-3 text-sm text-ink-soft",
            hideCaptionOnMobile && "hidden lg:block",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );

  if (!href) return frame;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      {frame}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
