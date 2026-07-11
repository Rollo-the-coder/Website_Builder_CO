import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Gotta Build website uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        This Cookie Policy explains how {site.name} uses cookies and similar technologies on{" "}
        {site.url.replace(/^https?:\/\//, "")}. It should be read with the{" "}
        <Link href="/privacy" className="text-accent hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <LegalHeading>What cookies are</LegalHeading>
      <p>
        Cookies are small text files stored on your device. Similar technologies include local
        storage and pixels used by hosting or analytics tools. Some are needed for the site to work;
        others help understand usage.
      </p>

      <LegalHeading>How this site uses them</LegalHeading>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="font-medium text-ink">Essential / functional</strong> — needed for
          basic site operation, security, and remembering preferences such as a theme preview you
          choose on the homepage.
        </li>
        <li>
          <strong className="font-medium text-ink">Analytics (optional)</strong> — when PostHog
          is enabled, product analytics cookies/local storage may be used to understand page views
          and conversions (for example audit form submissions). Analytics are off unless a PostHog
          project key is configured.
        </li>
      </ul>
      <p>
        The contact form does not set advertising cookies. Form submissions are processed
        server-side to deliver your request.
      </p>

      <LegalHeading>Managing cookies</LegalHeading>
      <p>
        You can block or delete cookies in your browser settings. Blocking essential cookies may
        affect site functionality. Browser &ldquo;Do Not Track&rdquo; signals are not consistently
        standardized; I treat cookie and analytics choices through configuration and your browser
        controls.
      </p>

      <LegalHeading>Updates</LegalHeading>
      <p>
        If cookie use changes meaningfully (for example when analytics are turned on), this policy
        and the &ldquo;Last updated&rdquo; date will be revised.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions:{" "}
        <a href={`mailto:${site.publicContactEmail}`} className="text-accent hover:underline">
          {site.publicContactEmail}
        </a>{" "}
        or the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          contact form
        </Link>
        .
      </p>
    </LegalPage>
  );
}
