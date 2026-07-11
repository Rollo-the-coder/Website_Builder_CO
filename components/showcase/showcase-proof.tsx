"use client";

import { motion, useReducedMotion } from "framer-motion";

const problems = [
  {
    title: "The message is unclear",
    text: "Visitors can't tell what you offer or what to do next.",
  },
  {
    title: "The next step is messy",
    text: "Signups, bookings, and payments are scattered or manual.",
  },
  {
    title: "The business has no system",
    text: "Follow-up lives in inboxes and spreadsheets.",
  },
] as const;

const pillars = [
  {
    title: "Clarify",
    text: "Message, offer, and page structure — so visitors instantly get it.",
  },
  {
    title: "Build",
    text: "The site plus the working parts behind it.",
  },
  {
    title: "Manage",
    text: "Launch it, secure it, keep improving it.",
  },
] as const;

export function ShowcaseProof() {
  const reduce = useReducedMotion();

  return (
    <section className="px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The stall</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Most small-business sites stall in the same three places.
        </h2>

        <div className="mt-12 divide-y divide-line/50 border-y border-line/50">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              className="grid gap-3 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-10"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.08 }}
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed text-ink-soft">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What I do</p>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.1 }}
              >
                <p className="font-display text-5xl font-semibold tracking-tight text-accent/90 sm:text-6xl">
                  {pillar.title}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
