"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { DEFAULT_THEME, THEMES } from "@/lib/theme";
import { useThemePreview } from "@/components/theme-preview";

const SCROLL_DELTA = 8;
const SCROLL_SHOW_TOP = 24;

/** Home-page only — not mounted in the global header/nav. */
export function ThemeSwitcher() {
  const { theme: active, setTheme } = useThemePreview();
  const showingDemo = active !== DEFAULT_THEME;
  const reduceMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;

      if (window.matchMedia("(min-width: 768px)").matches) {
        setHidden(false);
        last = window.scrollY;
        return;
      }

      const y = window.scrollY;
      if (y <= SCROLL_SHOW_TOP) {
        setHidden(false);
      } else if (y > last + SCROLL_DELTA) {
        setHidden(true);
      } else if (y < last - SCROLL_DELTA) {
        setHidden(false);
      }
      last = y;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-16 z-30 border-b border-line/70 bg-canvas/92 backdrop-blur-md",
        reduceMotion ? "transition-none" : "transition-transform duration-200 ease-out",
        hidden && "max-md:-translate-y-[calc(100%+1px)] max-md:pointer-events-none",
      )}
    >
      <div className="container-page flex items-center justify-between gap-2 py-2 md:gap-4 md:py-3">
        {/* Mobile: one-row strip */}
        <div className="flex min-w-0 flex-1 items-center gap-2 md:hidden">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
            Looks
          </p>
          {showingDemo ? (
            <button
              type="button"
              onClick={() => setTheme(DEFAULT_THEME)}
              className="shrink-0 text-[11px] font-semibold text-accent underline-offset-2 transition hover:underline"
            >
              Back
            </button>
          ) : null}
          <div
            className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto"
            role="radiogroup"
            aria-label="Try a few looks"
          >
            {THEMES.map((theme) => {
              const selected = active === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={theme.label}
                  title={theme.label}
                  onClick={() => setTheme(theme.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 transition",
                    selected
                      ? "border-accent bg-surface shadow-soft ring-1 ring-accent/30"
                      : "border-line/80 bg-surface/60",
                  )}
                >
                  <span className="flex -space-x-0.5" aria-hidden="true">
                    {theme.chips.map((chip) => (
                      <span
                        key={chip}
                        className="h-2.5 w-2.5 rounded-full border border-line/80"
                        style={{ backgroundColor: chip }}
                      />
                    ))}
                  </span>
                  <span className="text-[11px] font-semibold text-ink">{theme.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: full copy + labeled cards */}
        <div className="hidden min-w-0 md:block">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Try a few looks
            </p>
            {showingDemo ? (
              <button
                type="button"
                onClick={() => setTheme(DEFAULT_THEME)}
                className="text-xs font-semibold text-accent underline-offset-2 transition hover:underline"
              >
                Back to this site
              </button>
            ) : null}
          </div>
          <p className="mt-0.5 text-sm text-ink-soft">
            Just for fun — flip through styles and color palettes. Every website built is custom from
            the ground up for your preferences and needs.
          </p>
        </div>

        <div
          className="hidden flex-wrap gap-2 md:flex"
          role="radiogroup"
          aria-label="Try a few looks"
        >
          {THEMES.map((theme) => {
            const selected = active === theme.id;
            const isBrand = theme.role === "brand";
            return (
              <button
                key={theme.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setTheme(theme.id)}
                className={cn(
                  "inline-flex items-center gap-2.5 rounded-full border px-3 py-2 text-left transition",
                  selected
                    ? "border-accent bg-surface shadow-soft ring-1 ring-accent/30"
                    : "border-line/80 bg-surface/60 hover:border-accent/35 hover:bg-surface",
                )}
              >
                <span className="flex -space-x-1" aria-hidden="true">
                  {theme.chips.map((chip) => (
                    <span
                      key={chip}
                      className="h-3.5 w-3.5 rounded-full border border-line/80"
                      style={{ backgroundColor: chip }}
                    />
                  ))}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5">
                    <span className="block text-sm font-semibold text-ink">{theme.label}</span>
                    {isBrand ? (
                      <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                        This site
                      </span>
                    ) : null}
                    {theme.role === "demo" ? (
                      <span className="rounded-full bg-mist px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                        Demo
                      </span>
                    ) : null}
                  </span>
                  <span className="block text-[11px] text-ink-muted">{theme.blurb}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
