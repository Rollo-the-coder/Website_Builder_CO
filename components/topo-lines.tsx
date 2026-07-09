import { cn } from "@/lib/cn";

/** Decorative topographic contour SVG. Opacity capped at 6%. */
export function TopoLines({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.06">
        <path d="M-20 120 C120 80, 220 160, 360 130 S560 60, 820 110" />
        <path d="M-20 200 C140 160, 260 240, 400 200 S620 140, 820 190" />
        <path d="M-20 290 C160 250, 280 330, 440 290 S640 230, 820 280" />
        <path d="M-20 380 C150 340, 300 420, 460 380 S660 320, 820 370" />
        <path d="M-20 470 C170 430, 310 510, 480 470 S680 410, 820 460" />
      </g>
    </svg>
  );
}
