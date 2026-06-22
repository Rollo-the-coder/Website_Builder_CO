const proofNotes = [
  {
    title: "Flagship build in market",
    text:
      "Boost Baseball demonstrates end-to-end systems delivery: registration, payments, parent communication, and admin workflows in one connected experience.",
    detail: "Use case: youth sports website systems and operations tooling.",
  },
  {
    title: "References and metrics in progress",
    text:
      "Additional testimonials and measured outcomes are being gathered from current launches and will be published once confirmed.",
    detail: "No inflated claims - only verified numbers and client-approved quotes.",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {proofNotes.map((item) => (
        <article key={item.title} className="card flex h-full flex-col">
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          <p className="mt-4 text-sm text-ink-muted">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
