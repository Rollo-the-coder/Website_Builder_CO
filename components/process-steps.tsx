import { processSteps } from "@/lib/site";

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step) => (
        <li key={step.step} className="card flex h-full flex-col">
          <span className="text-sm font-semibold text-accent">{step.step}</span>
          <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
