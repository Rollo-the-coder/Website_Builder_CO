"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { serviceGroups } from "@/lib/site";

export function ServiceGroupsSummary() {
  return (
    <div>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built around business outcomes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            AI chatbots, SEO and content systems, automation, analytics, and security stay visible —
            organized by what they help the business do.
          </p>
        </div>
      </Reveal>

      <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceGroups.map((group) => (
          <RevealItem key={group.id}>
            <Link
              href={`/services#${group.id}`}
              className="card-hover flex h-full flex-col rounded-xl border border-line bg-cloud p-5 transition hover:border-accent/40 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {group.outcome}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                {group.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{group.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                View details
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );
}
