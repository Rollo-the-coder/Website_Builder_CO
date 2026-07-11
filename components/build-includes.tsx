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

      <RevealStagger className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {buildIncludes.map((item, index) => (
          <RevealItem key={item.title}>
            <div>
              <p className="text-xs font-semibold tabular-nums tracking-wide text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );
}
