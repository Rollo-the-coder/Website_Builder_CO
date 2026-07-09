import { cn } from "@/lib/cn";

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

// Labeled proof preview for case-study surfaces. Pure CSS, no external assets or fake metrics.
export function SystemPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-canvas-deep shadow-lift",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(28rem 18rem at 84% 0%, rgba(82,106,122,0.16), transparent 65%), radial-gradient(24rem 20rem at 8% 100%, rgba(47,93,80,0.14), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <BrowserChrome label="boostbaseball.example/system-preview" />
        <div className="p-4">
          <p className="w-fit rounded-full bg-sage px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            System overview
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {capabilityNodes.map((panel) => (
              <div
                key={panel.label}
                className="rounded-xl border border-line bg-surface/90 px-3 py-3 shadow-soft"
              >
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  <span className={cn("h-2 w-2 rounded-full", panel.tone)} aria-hidden="true" />
                  {panel.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-ink">{panel.text}</p>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Parent signup flow", status: "Program details" },
              { name: "Payments & installment plans", status: "Checkout options" },
              { name: "Admin operations dashboard", status: "Next actions" },
            ].map((row) => (
              <li
                key={row.name}
                className="flex items-center justify-between rounded-xl border border-line bg-surface/90 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                    B
                  </span>
                  <span className="text-sm font-medium text-ink">{row.name}</span>
                </div>
                <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-ink-muted">
                  {row.status}
                </span>
              </li>
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
      <div className="grid place-items-center bg-[linear-gradient(135deg,theme(colors.mist),theme(colors.sage))] px-6 py-14 text-center">
        <span className="rounded-full bg-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
          Preview panel
        </span>
        {caption ? <figcaption className="mt-3 max-w-sm text-sm text-ink-soft">{caption}</figcaption> : null}
      </div>
    </figure>
  );
}
