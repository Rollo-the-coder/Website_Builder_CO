import type { ReactNode } from "react";
import { Section } from "@/components/section";
import { RevealImmediate } from "@/components/reveal";

export function LegalPage({
  title,
  effectiveDate = "July 11, 2026",
  children,
}: {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}) {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <RevealImmediate>
          <span className="eyebrow">Legal</span>
        </RevealImmediate>
        <RevealImmediate delay={0.08}>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
        </RevealImmediate>
        <RevealImmediate delay={0.14}>
          <p className="mt-4 text-sm text-ink-muted">Last updated: {effectiveDate}</p>
        </RevealImmediate>
        <RevealImmediate delay={0.2}>
          <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
            {children}
          </div>
        </RevealImmediate>
      </div>
    </Section>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold text-ink">{children}</h2>;
}
