const pains = [
  "Visitors don't know what to do next",
  "Signups are manual and slow",
  "Payments are messy or offline",
  "Forms are scattered across tools",
  "Admin work lives in spreadsheets",
  "The website doesn't clearly explain the business",
  "No one knows what's actually working",
];

export function Problem() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <span className="eyebrow">The problem</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Your website should do more than exist.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Most small business websites look fine but quietly leak leads. The fix isn&apos;t just a
          prettier page — it&apos;s a clearer system that guides people to act.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {pains.map((pain) => (
          <li
            key={pain}
            className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink-soft"
          >
            <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-canvas-deep text-xs font-bold text-ink-muted">
              !
            </span>
            {pain}
          </li>
        ))}
      </ul>
    </div>
  );
}
