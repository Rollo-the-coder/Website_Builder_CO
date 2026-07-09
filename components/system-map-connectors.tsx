"use client";

import { useEffect, useState } from "react";

/** Desktop connector path + optional ambient dot. Respects prefers-reduced-motion. */
export function SystemMapConnectors() {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-x-[14%] top-1/2 hidden h-8 -translate-y-1/2 lg:block"
      viewBox="0 0 400 32"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        className="system-map-connector text-accent/40"
        d="M0 16 C60 16, 80 4, 140 16 S220 28, 260 16 S340 4, 400 16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
      />
      {!reduceMotion ? (
        <circle r="3.5" fill="currentColor" className="text-accent">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M0 16 C60 16, 80 4, 140 16 S220 28, 260 16 S340 4, 400 16"
          />
        </circle>
      ) : null}
    </svg>
  );
}
