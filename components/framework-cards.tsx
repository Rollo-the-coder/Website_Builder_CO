import { framework } from "@/lib/site";
import { CheckIcon } from "@/components/icons";

const tints = ["bg-mist", "bg-sage", "bg-lavender"] as const;

export function FrameworkCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {framework.map((item, index) => (
        <article key={item.title} className="card card-hover flex h-full flex-col">
          <span
            className={`inline-flex w-fit items-center rounded-lg ${tints[index % tints.length]} px-3 py-1 text-sm font-semibold text-ink`}
          >
            {item.title}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.description}</p>
          <ul className="mt-4 space-y-2">
            {item.items.map((subItem) => (
              <li key={subItem} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>{subItem}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
