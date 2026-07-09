import Link from "next/link";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    title: "Clarify",
    description: "Message, offer, and page structure — so visitors instantly get it.",
    bullets: ["Narrative & offer strategy", "Page structure & CTAs", "Local positioning"],
    href: "/services#clarify",
    tint: "bg-mist",
  },
  {
    title: "Build",
    description: "The site plus the working parts behind it.",
    bullets: [
      "Websites & rebuilds",
      "Forms, booking & payments",
      "Portals, dashboards & AI automations",
    ],
    href: "/services#build",
    tint: "bg-sage",
  },
  {
    title: "Manage",
    description: "Launch it, secure it, keep improving it.",
    bullets: ["Updates & monitoring", "Security & analytics", "Ongoing improvements"],
    href: "/services#manage",
    tint: "bg-lavender",
  },
] as const;

const audiences = [
  "Youth sports programs",
  "Baseball academies",
  "Gyms & coaches",
  "Tutors & education programs",
  "Local service businesses",
  "Wellness / appointment-based businesses",
];

export function Pillars() {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">What I do</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Clarify. Build. Manage.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          One studio for the site, the systems behind it, and the upkeep after launch.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 70}>
            <article className="card card-hover flex h-full flex-col">
              <span
                className={`inline-flex w-fit items-center rounded-lg ${pillar.tint} px-3 py-1 text-sm font-semibold text-ink`}
              >
                {pillar.title}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pillar.href}
                className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition hover:text-accent"
              >
                Explore {pillar.title.toLowerCase()}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-sm font-medium text-ink">
          Built for businesses where the website touches operations:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft"
            >
              {audience}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
