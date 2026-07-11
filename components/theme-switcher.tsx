"use client";

import { cn } from "@/lib/cn";
import { DEFAULT_THEME, THEMES } from "@/lib/theme";
import { useThemePreview } from "@/components/theme-preview";

/** Home-page only — not mounted in the global header/nav. */
export function ThemeSwitcher() {
  const { theme: active, setTheme } = useThemePreview();
  const showingDemo = active !== DEFAULT_THEME;

  return (
    <div className="sticky top-16 z-30 border-b border-line/70 bg-canvas/92 backdrop-blur-md">
      <div className="container-page flex flex-col gap-2.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
        <div className="min-w-0">
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
          className="flex flex-wrap gap-1.5 sm:gap-2"
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
                  "inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-left transition sm:gap-2.5 sm:px-3 sm:py-2",
                  selected
                    ? "border-accent bg-surface shadow-soft ring-1 ring-accent/30"
                    : "border-line/80 bg-surface/60 hover:border-accent/35 hover:bg-surface",
                )}
              >
                <span className="flex -space-x-1" aria-hidden="true">
                  {theme.chips.map((chip) => (
                    <span
                      key={chip}
                      className="h-3 w-3 rounded-full border border-line/80 sm:h-3.5 sm:w-3.5"
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
