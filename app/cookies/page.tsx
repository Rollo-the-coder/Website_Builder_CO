import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How this site uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        This Cookie Policy explains how this site uses cookies and similar technologies. Cookie use is
        kept minimal and aligned with the analytics tooling enabled for this project.
      </p>

      <LegalHeading>What cookies are</LegalHeading>
      <p>
        Cookies are small files stored on your device that help websites function and understand
        usage. Some are essential; others are used for analytics.
      </p>

      <LegalHeading>How we use them</LegalHeading>
      <p>
        Currently this site uses minimal cookies. If analytics are enabled, anonymized analytics
        cookies may be used to understand traffic and improve the site.
      </p>

      <LegalHeading>Managing cookies</LegalHeading>
      <p>
        You can control or delete cookies through your browser settings. Disabling some cookies may
        affect site functionality.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about cookies can be sent through the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          contact form
        </Link>
        .
      </p>
    </LegalPage>
  );
}
