import type { Pkg } from "@/lib/site";
import { ButtonLink } from "@/components/button";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function PackageCard({ pkg }: { pkg: Pkg }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-surface p-6 shadow-soft",
        pkg.featured ? "border-accent/40 ring-1 ring-accent/30" : "border-line",
      )}
    >
      {pkg.featured ? (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-ink">{pkg.name}</h3>
      <p className="mt-2 text-sm text-ink-soft">{pkg.blurb}</p>
      <div className="mt-5">
        <p className="text-2xl font-semibold text-ink">{pkg.setup}</p>
        <p className="text-sm text-ink-muted">setup &middot; {pkg.monthly}</p>
      </div>
      <ul className="mt-5 flex-1 space-y-2">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href="/contact"
        variant={pkg.featured ? "primary" : "secondary"}
        className="mt-6 w-full"
      >
        Request scope & quote
      </ButtonLink>
    </article>
  );
}
