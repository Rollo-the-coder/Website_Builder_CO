import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Want to know what your current website is costing you?",
  description = "Request a free Website/System Audit. You'll get a clear, practical read on what to fix first.",
}: CtaBandProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(30rem 30rem at 80% -20%, rgba(95,127,106,0.45), transparent 60%), radial-gradient(30rem 30rem at 0% 120%, rgba(82,106,122,0.32), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="secondary" className="bg-canvas">
            Request a Website/System Audit
            <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/work/boost-baseball" variant="ghost" className="text-primary-foreground hover:text-accent-soft">
            View Boost Case Study
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
