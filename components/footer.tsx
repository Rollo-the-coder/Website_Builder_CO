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
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 font-display font-semibold text-ink">
              <BrandMark />
              {site.name}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <p className="mt-4 text-sm text-ink-muted">{site.location}</p>
            {site.publicContactEmail ? (
              <p className="mt-2">
                <a
                  href={`mailto:${site.publicContactEmail}`}
                  className="text-sm font-medium text-ink transition hover:text-accent"
                >
                  {site.publicContactEmail}
                </a>
              </p>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-4 space-y-2">
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
            <ul className="mt-4 space-y-2">
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

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built for small businesses across the {site.location}.</p>
        </div>
      </div>
    </footer>
  );
}
