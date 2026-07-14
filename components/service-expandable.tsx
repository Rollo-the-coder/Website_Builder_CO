"use client";

import { useId, useState } from "react";
import type { Service } from "@/lib/site";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceExpandableList({ services }: { services: Service[] }) {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const baseId = useId();

  return (
    <ul className="divide-y divide-line border-y border-line">
      {services.map((service, index) => {
        const open = openTitle === service.title;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li key={service.title} className={cn(open && "bg-accent/[0.03]")}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-start gap-3 py-4 text-left transition sm:gap-4 sm:py-5",
                  open && "px-3 sm:px-4",
                  "hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/50",
                )}
                onClick={() => setOpenTitle(open ? null : service.title)}
              >
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block font-display text-base font-semibold tracking-tight sm:text-lg",
                      open ? "text-accent" : "text-ink",
                    )}
                  >
                    {service.title}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-ink-soft">
                    {service.summary}
                  </span>
                </span>
                <ChevronIcon
                  className={cn(
                    "mt-1 h-5 w-5 flex-none text-ink-muted transition duration-200",
                    open && "rotate-180 text-accent",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={cn(!open && "hidden")}
            >
              <div className="px-3 pb-6 sm:px-4 sm:pb-7">
                <div className="border-l-2 border-accent/30 pl-4 sm:pl-5">
                  <p className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                    {service.description}
                  </p>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    What&apos;s included
                  </p>
                  <ul className="mt-3 space-y-3">
                    {service.points.map((point) => (
                      <li key={point.label} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                        <p className="text-sm leading-relaxed text-ink-soft">
                          <span className="font-semibold text-ink">{point.label}.</span>{" "}
                          {point.detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <p className="text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Best for:</span>{" "}
                      {service.bestFor}
                    </p>
                    <span className="inline-flex w-fit flex-none items-center rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">
                      {service.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
