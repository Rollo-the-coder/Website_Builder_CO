"use client";

import { WebsiteSystemMap } from "@/components/website-system-map";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { frameworkStages } from "@/lib/site";

export function FrameworkSection() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div>
        <Reveal>
          <span className="eyebrow">How it should work</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Message → conversion → operations
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Gotta Build connects clear messaging to real customer actions and the systems that run
            after someone converts.
          </p>
        </Reveal>
        <RevealStagger tight className="mt-8 space-y-5">
          {frameworkStages.map((stage) => (
            <RevealItem key={stage.title}>
              <article className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs font-semibold tabular-nums tracking-wide text-accent">
                  {stage.step}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{stage.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{stage.description}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
      <Reveal delay={0.1} loose>
        <WebsiteSystemMap />
      </Reveal>
    </div>
  );
}
