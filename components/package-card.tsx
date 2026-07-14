import type { ManagementPkg, Pkg } from "@/lib/site";
import { ButtonLink } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function PackageDetails({ pkg, compact }: { pkg: Pkg; compact?: boolean }) {
  return (
    <>
      <p
        className={cn(
          "font-semibold uppercase text-ink-muted",
          compact ? "text-[10px] tracking-[0.12em]" : "text-xs tracking-[0.14em]",
        )}
      >
        Best for
      </p>
      <p
        className={cn(
          "mt-1 text-ink-soft",
          compact ? "text-[11px] leading-snug" : "text-sm leading-relaxed",
        )}
      >
        {pkg.blurb}
      </p>
      <ul className={cn("flex-1", compact ? "mt-3 space-y-1.5" : "mt-5 space-y-2")}>
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className={cn(
              "flex items-start text-ink-soft",
              compact ? "gap-1.5 text-[11px] leading-snug" : "gap-2 text-sm",
            )}
          >
            <CheckIcon
              className={cn(
                "mt-0.5 flex-none text-accent",
                compact ? "h-3 w-3" : "h-4 w-4",
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {pkg.note || pkg.mobileNote ? (
        <p
          className={cn(
            "leading-relaxed text-ink-muted",
            compact ? "mt-3 text-[10px]" : "mt-4 text-xs",
          )}
        >
          {compact ? (pkg.mobileNote ?? pkg.note) : pkg.note}
        </p>
      ) : null}
    </>
  );
}

function ManagementDetails({
  pkg,
  compact,
}: {
  pkg: ManagementPkg;
  compact?: boolean;
}) {
  return (
    <>
      <p
        className={cn(
          "text-ink-muted",
          compact ? "text-[10px] leading-snug" : "text-xs leading-relaxed",
        )}
      >
        {pkg.blurb}
      </p>
      <ul className={cn(compact ? "mt-2 space-y-1" : "mt-3 space-y-1.5")}>
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className={cn(
              "flex items-start leading-snug text-ink-soft",
              compact ? "gap-1.5 text-[10px]" : "gap-2 text-xs",
            )}
          >
            <CheckIcon
              className={cn(
                "mt-0.5 flex-none text-accent",
                compact ? "h-3 w-3" : "h-3.5 w-3.5",
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function PackageCard({
  pkg,
  embedded = false,
  detailsOpen = false,
}: {
  pkg: Pkg;
  embedded?: boolean;
  /** When true on mobile, show feature details. Desktop always shows them. */
  detailsOpen?: boolean;
}) {
  if (embedded) {
    return (
      <article className="relative flex h-full flex-col bg-transparent p-3 sm:p-5 md:p-6">
        <h3 className="font-display text-sm font-semibold leading-snug tracking-tight text-ink sm:text-base md:text-lg">
          {pkg.mobileName ? (
            <>
              <span className="md:hidden">{pkg.mobileName}</span>
              <span className="hidden md:inline">{pkg.name}</span>
            </>
          ) : (
            pkg.name
          )}
        </h3>

        {/* Desktop: best-for sits above price (original order) */}
        <div className="mt-3 hidden md:block">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Best for</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{pkg.blurb}</p>
        </div>

        <div className="mt-2 sm:mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted sm:text-xs sm:tracking-[0.14em]">
            Starting at
          </p>
          <p className="text-lg font-semibold tabular-nums text-ink sm:text-2xl">{pkg.setup}</p>
        </div>

        {/* Mobile: shared expand state */}
        <div
          id={`pricing-details-${pkg.contactSlug}`}
          className={cn("mt-3 md:hidden", !detailsOpen && "hidden")}
          hidden={!detailsOpen}
        >
          <PackageDetails pkg={pkg} compact />
        </div>

        {/* Desktop: features + note */}
        <div className="mt-5 hidden md:block">
          <ul className="flex-1 space-y-2">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {pkg.note ? (
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">{pkg.note}</p>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "card-hover relative flex h-full flex-col rounded-xl border bg-cloud p-6 shadow-soft transition duration-300",
        pkg.featured
          ? "border-accent/50 ring-1 ring-accent/35 hover:ring-accent/55"
          : "border-line hover:border-accent/40",
      )}
    >
      {pkg.featured ? (
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
  detailsOpen = false,
}: {
  pkg: ManagementPkg;
  embedded?: boolean;
  detailsOpen?: boolean;
}) {
  if (embedded) {
    return (
      <div className="px-3 py-2.5 sm:px-5 sm:py-4 md:px-6">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          <h3 className="font-display text-xs font-semibold text-ink sm:text-base">{pkg.name}</h3>
          <p className="shrink-0 text-[11px] font-semibold tabular-nums text-ink sm:text-sm">
            {pkg.price}
          </p>
        </div>

        {/* Mobile: shared expand state */}
        <div className={cn("mt-1.5 md:hidden", !detailsOpen && "hidden")} hidden={!detailsOpen}>
          <ManagementDetails pkg={pkg} compact />
        </div>

        {/* Desktop: always expanded */}
        <div className="mt-1 hidden md:block">
          <ManagementDetails pkg={pkg} />
        </div>
      </div>
    );
  }

  return (
    <article className="card-hover flex h-full flex-col rounded-xl border border-line/80 bg-cloud px-4 py-4 shadow-soft transition duration-300 hover:border-accent/40">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-base font-semibold text-ink">{pkg.name}</h3>
        <p className="shrink-0 text-sm font-semibold tabular-nums text-ink">{pkg.price}</p>
      </div>
      <div className="mt-1.5">
        <ManagementDetails pkg={pkg} />
      </div>
    </article>
  );
}
