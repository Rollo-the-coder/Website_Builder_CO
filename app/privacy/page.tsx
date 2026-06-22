import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this site collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains what information is collected through this website and how it is
        used for client communication and service delivery.
      </p>

      <LegalHeading>Information we collect</LegalHeading>
      <p>
        When you submit the audit request form, we collect the details you provide such as your name,
        business name, email, phone (optional), website URL, and your message. If analytics are
        enabled, we may also collect anonymized usage data.
      </p>

      <LegalHeading>How we use information</LegalHeading>
      <p>
        We use your information to respond to your request, prepare an audit, and communicate about
        relevant services. We do not sell your personal information.
      </p>

      <LegalHeading>Data retention</LegalHeading>
      <p>
        We retain inquiry details only as long as needed to follow up and for reasonable
        record-keeping for project discussions. Data retention details are reviewed during launch
        hardening and updated as needed.
      </p>

      <LegalHeading>Third-party services</LegalHeading>
      <p>
        We may use third-party providers for email delivery and analytics. Those providers process
        data on our behalf under their own terms.
      </p>

      <LegalHeading>Your choices</LegalHeading>
      <p>
        You can request access to or deletion of information you submitted by using the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          contact page
        </Link>
        .
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about this policy can be sent through the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          contact form
        </Link>
        .
      </p>
    </LegalPage>
  );
}
