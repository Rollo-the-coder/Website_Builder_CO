import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms that govern use of the Gotta Build website and service inquiries.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the {site.name} website at{" "}
        {site.url.replace(/^https?:\/\//, "")} and any inquiries you submit through it. By using
        this site, you agree to these Terms.
      </p>

      <LegalHeading>Who I am</LegalHeading>
      <p>
        {site.name} is operated by Erik, providing website builds, messaging/offer clarity, forms,
        bookings, payments, portals, automations, and ongoing website management for small
        businesses — primarily in {site.location}, with remote work available.
      </p>

      <LegalHeading>Using this website</LegalHeading>
      <p>
        You may use this site to learn about services and request an audit or consultation. You
        agree to provide accurate information, not misuse forms or attempt to disrupt the site, and
        not use the site for unlawful purposes.
      </p>

      <LegalHeading>No professional advice beyond stated services</LegalHeading>
      <p>
        Website content is for general information. It is not legal, financial, tax, or other
        regulated advice. Project recommendations are discussed case by case after an inquiry.
      </p>

      <LegalHeading>Pricing and packages</LegalHeading>
      <p>
        Package prices and ranges shown on this site are starting points only. Final scope, timeline,
        and price are agreed in a separate written proposal or agreement before paid build work
        begins. A free audit request does not create a paid engagement.
      </p>

      <LegalHeading>Service agreements</LegalHeading>
      <p>
        If we work together, the signed proposal, statement of work, or contract controls. If those
        documents conflict with these Terms, the project agreement controls for that engagement.
        Nothing on this website is a binding offer to provide services on specific terms.
      </p>

      <LegalHeading>Intellectual property</LegalHeading>
      <p>
        Site design, branding, copy, and other materials on this website are owned by {site.name}{" "}
        or used with permission. You may not copy or reuse them for commercial purposes without
        permission. Client project ownership is defined in the applicable project agreement.
      </p>

      <LegalHeading>Third-party links and tools</LegalHeading>
      <p>
        This site may link to third-party sites or demos (for example case-study live sites). I am
        not responsible for third-party content, policies, or availability.
      </p>

      <LegalHeading>Disclaimer</LegalHeading>
      <p>
        The website is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the fullest
        extent permitted by law, I disclaim warranties of merchantability, fitness for a particular
        purpose, and non-infringement. I do not guarantee uninterrupted or error-free operation.
      </p>

      <LegalHeading>Limitation of liability</LegalHeading>
      <p>
        To the fullest extent permitted by law, {site.name} and its operator are not liable for
        indirect, incidental, special, consequential, or punitive damages arising from your use of
        this website. Liability related to a paid project is limited as stated in that project&apos;s
        agreement.
      </p>

      <LegalHeading>Governing law</LegalHeading>
      <p>
        These Terms are governed by the laws of the State of Washington, USA, without regard to
        conflict-of-law rules, except where mandatory consumer protections in your jurisdiction
        apply.
      </p>

      <LegalHeading>Changes</LegalHeading>
      <p>
        I may update these Terms from time to time. The &ldquo;Last updated&rdquo; date will change
        when I do. Continued use of the site after changes means you accept the updated Terms.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about these Terms:{" "}
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
