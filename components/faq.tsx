type FaqItem = { question: string; answer: string; mobileAnswer?: string };

const faqs: FaqItem[] = [
  {
    question: "Do I need a full rebuild or just updates?",
    mobileAnswer:
      "That’s what the audit answers — refresh vs rebuild, with a clear recommendation either way.",
    answer:
      "That's exactly what the audit answers. Sometimes a focused refresh of messaging and key pages is enough; other times a rebuild unlocks signups, payments, and automation. You get a clear recommendation either way.",
  },
  {
    question: "Is this just web design?",
    mobileAnswer:
      "No — messaging plus forms, bookings, payments, portals, and automations that turn visitors into customers.",
    answer:
      "No. The goal is a working system: clear messaging plus the forms, bookings, payments, portals, and automations that turn visitors into customers and reduce manual work.",
  },
  {
    question: "What's included beyond the website itself?",
    mobileAnswer:
      "Messaging, signups/payments, portals, automations, chatbots, launch hardening, and management — smallest useful build first.",
    answer:
      "Depending on scope: messaging strategy, signup and payment flows, client or admin portals, follow-up automations, AI chatbots or content systems, launch hardening, and ongoing management. We pick the smallest useful build first.",
  },
  {
    question: "How does pricing work?",
    mobileAnswer:
      "Starting prices shown; final quote after scope. Defined price before any build work. Ops systems from $4,500.",
    answer:
      "Packages start at the prices shown. Final quotes depend on scope. You'll always get a defined scope and price before any build work begins. Operations systems begin at $4,500 and increase with complexity.",
  },
  {
    question: "Do you work with businesses outside Seattle?",
    mobileAnswer: "Seattle / Eastside first — remote-capable wherever the work happens.",
    answer:
      "Local Seattle, Bellevue, and Eastside businesses come first, but delivery is remote-capable wherever the work happens.",
  },
  {
    question: "What is the founding client offer?",
    mobileAnswer:
      "Three qualified projects at a reduced rate for feedback and case-study documentation. Exact pricing in the proposal.",
    answer:
      "Three qualified Seattle and Eastside projects can receive a reduced introductory rate in exchange for structured feedback and permission to document the work as a case study. Exact pricing appears in the proposal.",
  },
];

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-xl border border-line bg-cloud">
      {faqs.map((item) => (
        <details key={item.question} className="group px-3.5 py-3 sm:px-5 sm:py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-[13px] font-semibold leading-snug text-ink marker:content-none sm:items-center sm:gap-4 sm:text-base sm:font-medium [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border border-line text-sm leading-none text-ink-muted transition group-open:rotate-45 sm:mt-0 sm:h-6 sm:w-6 sm:border-0 sm:text-base"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="mt-2 pr-8 text-[12px] leading-snug text-ink-soft sm:mt-3 sm:pr-10 sm:text-sm sm:leading-relaxed">
            <span className="lg:hidden">{item.mobileAnswer ?? item.answer}</span>
            <span className="hidden lg:inline">{item.answer}</span>
          </p>
        </details>
      ))}
    </div>
  );
}
