import { ButtonLink } from "@/components/button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const deliverables = [
  "A written review of your site and lead flow",
  "A scorecard across 7 areas — messaging, CTAs, mobile, signup friction, trust, local SEO, automation",
  "Your top 3 fixes, in order",
  "No obligation, no hard sell",
];

const processStrip = ["Audit", "Scope", "Build", "Launch", "Manage"] as const;

const auditRows = [
  { label: "Message clarity", status: "Needs focus" },
  { label: "CTA path", status: "Improve" },
  { label: "Mobile experience", status: "Review" },
  { label: "Signup/payment friction", status: "High" },
  { label: "Trust/proof gaps", status: "Map" },
  { label: "SEO/local basics", status: "Check" },
  { label: "Automation opportunities", status: "Find" },
];

export function AuditScorecard() {
  return (
    <Reveal>
      <div className="grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <span className="eyebrow">Free audit</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get a straight answer about your website.
          </h2>
          <ul className="mt-6 space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 text-xs font-semibold uppercase tracking-[0.08em]">
              {processStrip.map((step, index) => (
                <li key={step} className="flex items-center gap-1">
                  <span
                    className={
                      index === 0
                        ? "rounded-full bg-accent px-2.5 py-1 text-primary-foreground"
                        : "rounded-full bg-mist px-2.5 py-1 text-ink-muted"
                    }
                  >
                    {step}
                  </span>
                  {index < processStrip.length - 1 ? (
                    <span className="text-ink-muted" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-sm text-ink-muted">The audit is step one — and it&apos;s free.</p>
          </div>

          <ButtonLink href="/contact" className="mt-8">
            Get a free website audit
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>

        <div className="rounded-2xl border border-line bg-canvas/70 p-4">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
            <div>
              <p className="text-sm font-semibold text-ink">Sample scorecard</p>
              <p className="text-xs text-ink-muted">What your report covers.</p>
            </div>
            <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-ink">
              Illustrative
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {auditRows.map((row, index) => (
              <Reveal key={row.label} delay={index * 60}>
                <li className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface px-4 py-3">
                  <span className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                    <CheckIcon className="h-4 w-4 flex-none text-accent" />
                    {row.label}
                  </span>
                  <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-ink-muted">
                    {row.status}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
