type FaqItem = { question: string; answer: string };

const faqs: FaqItem[] = [
  {
    question: "Do I need a full rebuild or just updates?",
    answer:
      "That's exactly what the audit answers. Sometimes a focused refresh of messaging and key pages is enough; other times a rebuild unlocks signups, payments, and automation. You get a clear recommendation either way.",
  },
  {
    question: "Is this just web design?",
    answer:
      "No. The goal is a working system: clear messaging plus the forms, bookings, payments, portals, and automations that turn visitors into customers and reduce manual work.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Packages start at the ranges shown and final quotes depend on scope. You'll always get a defined scope and price before any build work begins.",
  },
  {
    question: "Do you work with businesses outside Seattle?",
    answer:
      "Local Seattle, Bellevue, and Eastside businesses come first, but the work is remote-capable nationally once scope is clear.",
  },
];

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-surface">
      {faqs.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-ink marker:content-none">
            {item.question}
            <span className="text-ink-muted transition group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
