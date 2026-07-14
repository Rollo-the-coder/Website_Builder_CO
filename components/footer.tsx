import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { BrandMark } from "@/components/brand-mark";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-deep">
      <div className="container-page py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink">
              <BrandMark />
              {site.name}
            </div>
            <p className="mt-3 hidden max-w-sm text-sm leading-relaxed text-ink-soft sm:mt-4 sm:block">
              {site.description}
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm sm:mt-4 sm:block sm:space-y-2">
              <p className="text-ink-muted">{site.location}</p>
              {site.publicContactEmail ? (
                <a
                  href={`mailto:${site.publicContactEmail}`}
                  className="font-medium text-ink transition hover:text-accent"
                >
                  {site.publicContactEmail}
                </a>
              ) : null}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold text-ink">Legal</h3>
            <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-line pt-4 text-xs text-ink-muted sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:pt-6 sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="sm:text-right">Built for small businesses across the {site.location}.</p>
        </div>
      </div>
    </footer>
  );
}
