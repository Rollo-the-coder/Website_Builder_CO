import type { ReactNode } from "react";
import { Section } from "@/components/section";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 rounded-xl border border-dashed border-line bg-lavender/60 px-4 py-3 text-sm text-ink-soft">
          Plain-language policy overview for this launch-stage site. Final legal review and
          business-entity details will be applied before public outreach at scale.
        </div>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </Section>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold text-ink">{children}</h2>;
}
