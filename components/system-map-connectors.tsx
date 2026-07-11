"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type MotionValue } from "framer-motion";

/** Desktop connector path + ambient traveling dot. Respects prefers-reduced-motion. */
export function SystemMapConnectors({
  cinematic = false,
  drawProgress,
}: {
  cinematic?: boolean;
  drawProgress?: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (cinematic) return;
    if (reduceMotion) {
      setDrawn(true);
      return;
    }
    const id = window.setTimeout(() => setDrawn(true), 280);
    return () => window.clearTimeout(id);
  }, [reduceMotion, cinematic]);

  const pathD = "M0 16 C60 16, 80 4, 140 16 S220 28, 260 16 S340 4, 400 16";

  return (
    <svg
      className="pointer-events-none absolute inset-x-[14%] top-1/2 hidden h-8 -translate-y-1/2 lg:block"
      viewBox="0 0 400 32"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {cinematic && drawProgress && !reduceMotion ? (
        <motion.path
          className="text-accent/50"
          d={pathD}
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
          pathLength={1}
          style={{
            pathLength: drawProgress,
            opacity: drawProgress,
          }}
        />
      ) : (
        <path
          className={`text-accent/40 ${drawn || reduceMotion ? "" : "system-map-connector"}`}
          style={
            drawn || reduceMotion
              ? { strokeDasharray: 1, strokeDashoffset: 0 }
              : undefined
          }
          d={pathD}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          pathLength={1}
        />
      )}
      {!reduceMotion ? (
        <motion.circle
          r={cinematic ? 4 : 3.5}
          fill="currentColor"
          className="text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: cinematic ? 0.2 : 0.9, duration: 0.3 }}
        >
          <animateMotion dur={cinematic ? "4.5s" : "6s"} repeatCount="indefinite" path={pathD} />
        </motion.circle>
      ) : null}
    </svg>
  );
}
