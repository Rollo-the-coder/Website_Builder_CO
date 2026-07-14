import type { ManagementPkg, Pkg } from "@/lib/site";
import { ButtonLink } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function PackageCard({
  pkg,
  embedded = false,
}: {
  pkg: Pkg;
  embedded?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col transition duration-300",
        embedded
          ? "bg-transparent p-5 sm:p-6"
          : cn(
              "card-hover rounded-xl border bg-cloud p-6 shadow-soft",
              pkg.featured
                ? "border-accent/50 ring-1 ring-accent/35 hover:ring-accent/55"
                : "border-line hover:border-accent/40",
            ),
      )}
    >
      {pkg.featured && !embedded ? (
        <span className="absolute -top-3 left-6 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-ink">{pkg.name}</h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Best for</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{pkg.blurb}</p>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Starting at</p>
        <p className="text-2xl font-semibold text-ink">{pkg.setup}</p>
      </div>
      <ul className="mt-5 flex-1 space-y-2">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {pkg.note ? <p className="mt-4 text-xs leading-relaxed text-ink-muted">{pkg.note}</p> : null}
      <ButtonLink
        href={`/contact?package=${pkg.contactSlug}`}
        variant={pkg.featured ? "primary" : "secondary"}
        className="mt-6 w-full"
        trackEventName="audit_cta_click"
        trackEventProps={{ location: "pricing_package", package: pkg.name }}
      >
        Request an Audit
      </ButtonLink>
    </article>
  );
}

export function ManagementCard({
  pkg,
  embedded = false,
}: {
  pkg: ManagementPkg;
  embedded?: boolean;
}) {
  if (embedded) {
    return (
      <div className="px-5 py-4 sm:px-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-base font-semibold text-ink">{pkg.name}</h3>
          <p className="shrink-0 text-sm font-semibold tabular-nums text-ink">{pkg.price}</p>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-ink-muted">{pkg.blurb}</p>
        <ul className="mt-3 space-y-1.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs leading-snug text-ink-soft">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <article className="card-hover flex h-full flex-col rounded-xl border border-line/80 bg-cloud px-4 py-4 shadow-soft transition duration-300 hover:border-accent/40">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-base font-semibold text-ink">{pkg.name}</h3>
        <p className="shrink-0 text-sm font-semibold tabular-nums text-ink">{pkg.price}</p>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{pkg.blurb}</p>
      <ul className="mt-3 flex-1 space-y-1.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-xs leading-snug text-ink-soft">
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
