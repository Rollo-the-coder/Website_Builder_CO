"use client";

import { InboxIcon, MessageIcon, RouteIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

const problems = [
  {
    title: "The message is unclear",
    text: "The offer and marketing narrative don't land — visitors can't tell what you do or why it matters.",
    icon: MessageIcon,
  },
  {
    title: "The next step is messy",
    text: "Signups, bookings, and payments are scattered, manual, or missing — so interest dies in the gap.",
    icon: RouteIcon,
  },
  {
    title: "The business has no system",
    text: "Follow-up, rosters, and operations live in inboxes and spreadsheets instead of one working flow.",
    icon: InboxIcon,
  },
];

export function Problem() {
  return (
    <div>
      <Reveal>
        <div>
          <span className="eyebrow">The problem</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Most small-business sites stall in the same three places.
          </h2>
        </div>
      </Reveal>
      <RevealStagger className="mt-10 divide-y divide-line border-y border-line">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <RevealItem key={problem.title}>
              <article className="group grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 sm:py-7">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-display text-2xl font-semibold tabular-nums text-accent/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-cloud text-accent transition duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink sm:text-xl">{problem.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                    {problem.text}
                  </p>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </div>
  );
}
