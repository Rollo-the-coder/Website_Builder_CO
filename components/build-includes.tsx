"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { buildIncludes } from "@/lib/site";

export function BuildIncludes() {
  return (
    <div>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What a build includes</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Story, systems, and upkeep — owned end to end.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            One partner for the marketing narrative, the working parts behind the site, and the
            management after launch.
          </p>
        </div>
      </Reveal>

      <RevealStagger className="mt-12 grid grid-cols-3 gap-3 border-t border-line pt-8 sm:gap-x-10 sm:gap-y-8 sm:pt-10">
        {buildIncludes.map((item, index) => (
          <RevealItem key={item.title}>
            <div>
              <p className="text-[10px] font-semibold tabular-nums tracking-wide text-accent sm:text-xs">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-sm font-semibold tracking-tight text-ink sm:mt-3 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-snug text-ink-soft sm:mt-2 sm:text-sm sm:leading-relaxed">
                {item.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );
}
