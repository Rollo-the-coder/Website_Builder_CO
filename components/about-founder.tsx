"use client";

import { CheckIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { cn } from "@/lib/cn";

/**
 * Portrait at `public/founder.png`. Set to null to show the placeholder frame.
 */
export const FOUNDER_PHOTO_SRC: string | null = "/founder.png";

const points = [
  {
    short: "Marketing plans built with the site — not bolted on later",
    full: "Marketing plans shaped alongside the build — messaging, channels, and next campaigns defined up front",
  },
  {
    short: "UI/UX plus systems — payments, portals, workflows",
    full: "Custom UI/UX plus the systems behind it — payments, portals, and workflows owned end to end",
  },
  {
    short: "Grant funding experience; led global web teams on shipped work",
    full: "Raised grant funding and led global web teams on real shipped projects",
  },
] as const;

type AboutFounderProps = {
  className?: string;
};

export function AboutFounder({ className }: AboutFounderProps) {
  return (
    <div
      id="about"
      className={cn(
        "rounded-xl border-2 border-ink/10 bg-cloud p-4 shadow-lift sm:p-6 lg:p-10",
        className,
      )}
    >
      <Reveal>
        <span className="eyebrow">About</span>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:mt-4 sm:text-3xl lg:text-4xl">
          <span className="block sm:inline">Narrative that converts.</span>{" "}
          <span className="block sm:inline">Systems that run.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-4 sm:mt-6">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 sm:gap-5 lg:gap-10">
          <FounderPhoto />

          <div className="min-w-0">
            <p className="text-[13px] leading-snug text-ink-soft sm:text-sm lg:text-lg lg:leading-relaxed">
              <span className="lg:hidden">
                Seven years shipping for startups and growing businesses. You work with me directly.
              </span>
              <span className="hidden lg:inline">
                Seven years in web development with startups and growing businesses. Founder-led from
                first draft through launch — not a handoff to a junior team.
              </span>
            </p>

            <RevealStagger tight className="mt-3 grid gap-2 sm:mt-4 sm:gap-2.5 lg:mt-5 lg:gap-3">
              {points.map((point) => (
                <RevealItem key={point.full}>
                  <p className="flex items-start gap-1.5 text-[12px] leading-snug text-ink-soft sm:gap-2 sm:text-[13px] lg:text-sm lg:leading-relaxed">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent sm:h-4 sm:w-4" />
                    <span>
                      <span className="lg:hidden">{point.short}</span>
                      <span className="hidden lg:inline">{point.full}</span>
                    </span>
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function FounderPhoto() {
  if (FOUNDER_PHOTO_SRC) {
    return (
      <div className="w-[108px] shrink-0 sm:w-[148px] lg:w-[220px]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-mist sm:rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FOUNDER_PHOTO_SRC}
            alt="Portrait of the Gotta Build founder"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[108px] shrink-0 sm:w-[148px] lg:w-[220px]">
      <div
        className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-line bg-mist sm:rounded-xl"
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
        <div className="relative px-2 text-center">
          <p className="font-display text-xs font-semibold text-ink sm:text-sm">Photo soon</p>
        </div>
      </div>
    </div>
  );
}
