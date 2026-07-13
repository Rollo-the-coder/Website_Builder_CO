"use client";

import { CheckIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Link from "next/link";

/**
 * Portrait at `public/founder.png`. Set to null to show the placeholder frame.
 */
export const FOUNDER_PHOTO_SRC: string | null = "/founder.png";

const points = [
  "Experience across web development, IT operations, digital marketing, product development, and distributed team leadership",
  "Previously led a global team responsible for the IT and marketing of a web business, and developed a funded digital product initiative",
  "Clients work directly with Erik throughout planning, building, launch, and ongoing management",
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
        <div className="mt-4">
          <p className="font-display text-xl font-semibold text-ink">{site.founderName}</p>
          <p className="text-sm font-medium text-ink-muted">{site.founderTitle}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          <span className="eyebrow">About</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Founder-led systems for real business workflows
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Gotta Build is led by {site.founderName}, a web and digital-systems builder based in the
            Seattle area.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Erik brings experience across web development, IT operations, digital marketing, product
            development, and distributed team leadership. Before launching Gotta Build, he led a
            global team responsible for the IT and marketing of a web business and developed a
            funded digital product initiative.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Gotta Build is where that experience is now focused: building practical systems that
            launch, support real business workflows, and continue improving after release.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Gotta Build is founder-led, so clients work directly with the person planning, building,
            and managing their system.
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

          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            AI-assisted development helps shorten the path from idea to working system, while each
            project remains personally scoped, reviewed, tested, and managed.
          </p>

          <p className="mt-6 text-sm text-ink-muted">
            Curious about visual directions?{" "}
            <Link href="/design-lab" className="font-semibold text-accent underline-offset-2 hover:underline">
              Explore visual directions
            </Link>
          </p>
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
          alt={`${site.founderName}, founder of Gotta Build`}
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
      <div className="relative text-center px-6">
        <p className="font-display text-lg font-semibold text-ink">Photo coming soon</p>
        <p className="mt-2 text-sm text-ink-muted">Portrait will sit here</p>
      </div>
    </div>
  );
}
