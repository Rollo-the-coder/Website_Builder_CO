import { Fragment } from "react";
import { cn } from "@/lib/cn";
import { TopoLines } from "@/components/topo-lines";
import { SystemMapConnectors } from "@/components/system-map-connectors";

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
    nodes: ["Lead lands in one place", "Automatic follow-up", "You see what's next"],
  },
] as const;

function StageColumn({
  title,
  tone,
  nodes,
}: {
  title: string;
  tone: string;
  nodes: readonly string[];
}) {
  return (
    <div className="relative z-10 flex flex-col rounded-2xl border border-line bg-surface/90 p-4 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{title}</p>
      <ul className="mt-3 space-y-2">
        {nodes.map((node) => (
          <li
            key={node}
            className="rounded-xl border border-line bg-canvas/70 px-3 py-2 text-sm font-medium text-ink-soft"
          >
            <span className={cn("mr-2 inline-block h-2 w-2 rounded-full", tone)} aria-hidden="true" />
            {node}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WebsiteSystemMap({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line bg-canvas-deep p-5 shadow-lift sm:p-6",
        className,
      )}
    >
      <TopoLines className="text-ink" />

      <div className="relative">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            What a working site looks like
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
            The system behind the site
          </h2>
        </div>

        <div className="relative mt-6">
          <SystemMapConnectors />

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-4">
            {stages.map((stage, index) => (
              <Fragment key={stage.title}>
                {index > 0 ? (
                  <div className="flex justify-center lg:hidden" aria-hidden="true">
                    <span className="h-3 w-px bg-accent/40" />
                  </div>
                ) : null}
                <StageColumn title={stage.title} tone={stage.tone} nodes={stage.nodes} />
              </Fragment>
            ))}
          </div>
        </div>

        <figcaption className="mt-5 rounded-2xl border border-line bg-surface/80 px-4 py-3 text-sm font-medium text-ink-soft">
          Most sites stop at stage one. I build all three.
        </figcaption>
      </div>
    </figure>
  );
}
