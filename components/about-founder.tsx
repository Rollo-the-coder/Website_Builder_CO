"use client";

import { CheckIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { cn } from "@/lib/cn";

/**
 * Portrait at `public/founder.png`. Set to null to show the placeholder frame.
 */
export const FOUNDER_PHOTO_SRC: string | null = "/founder.png";

const points = [
  "Specialty in shaping the business story so visitors know what you do, why it matters, and what to do next",
  "Custom UI/UX plus the systems behind it — payments, portals, and workflows owned end to end",
  "Raised grant funding and led global web teams on real shipped projects",
] as const;

type AboutFounderProps = {
  className?: string;
};

export function AboutFounder({ className }: AboutFounderProps) {
  return (
    <div
      id="about"
      className={cn(
        "grid items-center gap-10 rounded-xl border-2 border-ink/10 bg-cloud p-6 shadow-lift lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-10",
        className,
      )}
    >
      <Reveal>
        <FounderPhoto />
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Narrative that converts. Systems that run.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Seven years in web development, focused on startups and businesses that need a clear
            story and the operational pieces behind the site — not just a pretty page.
          </p>

          <RevealStagger tight className="mt-6 grid gap-3">
            {points.map((point) => (
              <RevealItem key={point}>
                <p className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <span>{point}</span>
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Reveal>
    </div>
  );
}

function FounderPhoto() {
  if (FOUNDER_PHOTO_SRC) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-mist sm:aspect-[5/6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FOUNDER_PHOTO_SRC}
          alt="Portrait of the Gotta Build founder"
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-line bg-mist sm:aspect-[5/6]"
      aria-label="Founder photo placeholder"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(18rem 14rem at 30% 20%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%), radial-gradient(16rem 12rem at 80% 90%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="relative text-center px-6">
        <p className="font-display text-lg font-semibold text-ink">Photo coming soon</p>
        <p className="mt-2 text-sm text-ink-muted">Portrait will sit here</p>
      </div>
    </div>
  );
}
