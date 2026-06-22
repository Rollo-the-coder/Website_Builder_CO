import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of this website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms govern your use of this website and how service inquiries are handled.
      </p>

      <LegalHeading>Use of this site</LegalHeading>
      <p>
        This website is provided for informational purposes and to request services. You agree to
        provide accurate information and not to misuse the site or its forms.
      </p>

      <LegalHeading>No guarantee</LegalHeading>
      <p>
        Content is provided as-is without warranties. Pricing shown is a starting range; final
        project scope and pricing are confirmed in a separate agreement.
      </p>

      <LegalHeading>Services & agreements</LegalHeading>
      <p>
        Any engagement is governed by a separate written proposal or agreement. Nothing on this site
        constitutes a binding offer of services.
      </p>

      <LegalHeading>Limitation of liability</LegalHeading>
      <p>
        To the extent permitted by law, this website owner is not liable for indirect or incidental
        damages arising from use of this website. Project-specific obligations are governed by signed
        agreements.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about these Terms can be sent through the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          contact form
        </Link>
        .
      </p>
    </LegalPage>
  );
}
