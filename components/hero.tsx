import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { WebsiteSystemMap } from "@/components/website-system-map";

const trustPoints = [
  "Seattle / Bellevue / Eastside",
  "Bookings & payments",
  "Portals & automations",
  "Ongoing management",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">Seattle · Bellevue · Eastside</span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Your website should run the business, not just describe it.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I build small-business websites with the systems behind them — bookings, payments,
            portals, and automations — then keep everything running.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">
              Get a free website audit
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#what-i-do" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up lg:pl-6" style={{ animationDelay: "120ms" }}>
          <WebsiteSystemMap />
        </div>
      </div>
    </section>
  );
}
