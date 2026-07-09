import { InboxIcon, MessageIcon, RouteIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const problems = [
  {
    title: "The message is unclear",
    text: "Visitors can't tell what you offer or what to do next.",
    icon: MessageIcon,
  },
  {
    title: "The next step is messy",
    text: "Signups, bookings, and payments are scattered or manual.",
    icon: RouteIcon,
  },
  {
    title: "The business has no system",
    text: "Follow-up lives in inboxes and spreadsheets.",
    icon: InboxIcon,
  },
];

export function Problem() {
  return (
    <Reveal>
      <div>
        <span className="eyebrow">The problem</span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Most small-business sites stall in the same three places.
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <Reveal key={problem.title} delay={index * 70}>
              <article className="card card-hover h-full">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-canvas-deep text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Reveal>
  );
}
