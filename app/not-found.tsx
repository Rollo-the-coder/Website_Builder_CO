import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";

export default function NotFound() {
  return (
    <Section className="py-28 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        This page wandered off.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Request an audit
        </ButtonLink>
      </div>
    </Section>
  );
}
