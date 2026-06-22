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

// Stylized system preview used as hero proof. Pure CSS, no external assets.
export function SystemPreview({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-surface shadow-lift", className)}>
      <BrowserChrome label="app.boostbaseball.example/admin" />
      <div className="grid gap-px bg-line sm:grid-cols-3">
        {[
          { label: "Registrations", value: "128", trend: "+12 this week" },
          { label: "Payments", value: "$9,840", trend: "Collected" },
          { label: "Active plans", value: "34", trend: "Installments" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold text-ink">{stat.value}</p>
            <p className="text-xs text-accent">{stat.trend}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3 p-4">
        {[
          { name: "Spring Hitting Clinic", status: "Paid", tone: "bg-sage text-ink" },
          { name: "Fall Travel Roster", status: "Installment", tone: "bg-mist text-ink" },
          { name: "Private Lessons — Pkg", status: "Pending", tone: "bg-lavender text-ink" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-xl border border-line bg-canvas px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                B
              </span>
              <span className="text-sm font-medium text-ink">{row.name}</span>
            </div>
            <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", row.tone)}>
              {row.status}
            </span>
          </div>
        ))}
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
