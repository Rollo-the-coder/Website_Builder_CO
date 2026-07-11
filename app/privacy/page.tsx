import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalHeading } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Gotta Build collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy describes how {site.name} (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or &ldquo;we&rdquo;) collects,
        uses, and shares information when you visit {site.url.replace(/^https?:\/\//, "")} or
        submit an inquiry. It applies to this website and related client communications.
      </p>

      <LegalHeading>Who this covers</LegalHeading>
      <p>
        {site.name} provides website and digital-systems services for small businesses, primarily
        serving {site.location}, with remote work available. This policy covers website visitors and
        people who contact me about services.
      </p>

      <LegalHeading>Information I collect</LegalHeading>
      <p>I may collect:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="font-medium text-ink">Information you submit</strong> through the audit
          request form or email — such as name, email, phone (optional), business name, website URL,
          niche, project needs, timeline, budget range, and message content.
        </li>
        <li>
          <strong className="font-medium text-ink">Technical data</strong> that browsers and hosting
          providers typically log — such as IP address, browser type, pages visited, and approximate
          timestamps — used for security, debugging, and (if enabled) analytics.
        </li>
        <li>
          <strong className="font-medium text-ink">Communication records</strong> from email or other
          channels you use to contact me about a project.
        </li>
      </ul>
      <p>
        I do not intentionally collect sensitive categories of personal information through this
        website, and I do not knowingly collect information from children under 13.
      </p>

      <LegalHeading>How I use information</LegalHeading>
      <p>I use personal information to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Respond to audit requests and service inquiries</li>
        <li>Prepare proposals, scopes, and project work you request</li>
        <li>Operate, secure, and improve this website</li>
        <li>Send project-related communications you expect as part of working together</li>
        <li>Comply with legal obligations when required</li>
      </ul>
      <p>I do not sell your personal information.</p>

      <LegalHeading>How I share information</LegalHeading>
      <p>
        I share information only with service providers that help me run the business — for example
        website hosting, form/email delivery, and analytics (if enabled). Those providers process
        data under their own terms and only as needed to perform their services. I may also disclose
        information if required by law or to protect rights, safety, or security.
      </p>

      <LegalHeading>Data retention</LegalHeading>
      <p>
        Inquiry and project communications are kept as long as useful for follow-up, active work,
        and ordinary business record-keeping, then deleted or archived when no longer needed. You
        can ask me to delete inquiry data that is not required for an active engagement or legal
        obligation.
      </p>

      <LegalHeading>Security</LegalHeading>
      <p>
        I take reasonable technical and organizational steps to protect information (for example
        HTTPS, access controls, and provider-side safeguards). No method of transmission or storage
        is completely secure.
      </p>

      <LegalHeading>Your choices</LegalHeading>
      <p>
        You may request access to, correction of, or deletion of personal information you submitted,
        or ask questions about this policy, by emailing{" "}
        <a href={`mailto:${site.publicContactEmail}`} className="text-accent hover:underline">
          {site.publicContactEmail}
        </a>{" "}
        or using the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          contact form
        </Link>
        . Depending on where you live, you may have additional rights under applicable privacy laws.
      </p>

      <LegalHeading>Updates</LegalHeading>
      <p>
        I may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top
        will change when I do. Continued use of the site after an update means you accept the revised
        policy.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        {site.name}
        <br />
        Email:{" "}
        <a href={`mailto:${site.publicContactEmail}`} className="text-accent hover:underline">
          {site.publicContactEmail}
        </a>
        <br />
        Service area: {site.location}
      </p>
    </LegalPage>
  );
}
