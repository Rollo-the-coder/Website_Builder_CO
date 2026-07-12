import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

/** Blueprint code-lines brand mark for Gotta Build. */
export function BrandMark({
  className,
  title = "Gotta Build",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8 shrink-0", className)}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      <rect width="32" height="32" rx="6" className="fill-primary" />
      <rect
        x="1.25"
        y="1.25"
        width="29.5"
        height="29.5"
        rx="5"
        className="stroke-accent"
        strokeWidth="1.5"
        fill="none"
        opacity="0.55"
      />

      <g strokeLinecap="round">
        <path d="M7 8h2" className="stroke-voltage" strokeWidth="1.6" />
        <path d="M11 8h12" className="stroke-primary-foreground" strokeWidth="1.45" opacity="0.5" />

        <path d="M7 12h2" className="stroke-accent" strokeWidth="1.6" />
        <path d="M11 12h14" className="stroke-primary-foreground" strokeWidth="1.45" opacity="0.85" />

        <path d="M7 16h2" className="stroke-accent" strokeWidth="1.6" opacity="0.9" />
        <path d="M11 16h10" className="stroke-primary-foreground" strokeWidth="1.45" opacity="0.45" />

        <path d="M7 20h2" className="stroke-voltage" strokeWidth="1.6" opacity="0.85" />
        <path d="M11 20h13" className="stroke-primary-foreground" strokeWidth="1.45" opacity="0.65" />

        <path d="M7 24h2" className="stroke-accent" strokeWidth="1.6" opacity="0.7" />
        <path d="M11 24h9" className="stroke-primary-foreground" strokeWidth="1.45" opacity="0.35" />
      </g>
    </svg>
  );
}
