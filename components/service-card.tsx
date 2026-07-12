import type { Service } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-cloud p-5 transition duration-300 hover:border-accent/40 hover:shadow-soft sm:p-6">
      <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
      <ul className="mt-4 space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
