import { z } from "zod";

export const HELP_OPTIONS = [
  "Website redesign",
  "New business website",
  "Booking or lead system",
  "Payments or enrollment",
  "Portal or dashboard",
  "AI chatbot or automation",
  "AI SEO or content system",
  "Security or analytics",
  "Ongoing management",
  "Founding client project",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "$1,000–$2,000",
  "$2,000–$4,000",
  "$4,000–$7,000",
  "$7,000–$12,000",
  "$12,000+",
  "Not sure yet",
] as const;

export const CONTACT_METHODS = ["Email", "Phone", "Either"] as const;

export const CONTACT_INTENTS = ["audit", "fit_call"] as const;
export type ContactIntent = (typeof CONTACT_INTENTS)[number];

export const PACKAGE_HANDOFF_SLUGS = ["launch", "business", "operations"] as const;
export type PackageHandoffSlug = (typeof PACKAGE_HANDOFF_SLUGS)[number];

export type PackageHandoff = {
  label: string;
  setup: string;
  budget: (typeof BUDGET_OPTIONS)[number];
  helpWith: (typeof HELP_OPTIONS)[number];
};

/** Soft defaults when someone clicks Request an Audit on a pricing card. */
export const PACKAGE_HANDOFF: Record<PackageHandoffSlug, PackageHandoff> = {
  launch: {
    label: "Launch Site",
    setup: "$1,250",
    budget: "$1,000–$2,000",
    helpWith: "New business website",
  },
  business: {
    label: "Business Site + Lead System",
    setup: "$2,500",
    budget: "$2,000–$4,000",
    helpWith: "Booking or lead system",
  },
  operations: {
    label: "Operations System",
    setup: "$4,500",
    budget: "$4,000–$7,000",
    helpWith: "Payments or enrollment",
  },
};

export function getPackageHandoff(slug: string | null | undefined): PackageHandoff | null {
  if (!slug) return null;
  if ((PACKAGE_HANDOFF_SLUGS as readonly string[]).includes(slug)) {
    return PACKAGE_HANDOFF[slug as PackageHandoffSlug];
  }
  return null;
}

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name.").max(100),
    businessName: z.string().trim().min(2, "Please enter your business name.").max(120),
    email: z.string().trim().email("Please enter a valid email.").max(160),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    websiteUrl: z.string().trim().max(200).optional().or(z.literal("")),
    city: z.string().trim().max(120).optional().or(z.literal("")),
    helpWith: z.enum(HELP_OPTIONS, { errorMap: () => ({ message: "Please choose an option." }) }),
    biggestProblem: z
      .string()
      .trim()
      .min(10, "A sentence or two helps a lot.")
      .max(2000, "Please keep this under 2000 characters."),
    budget: z.union([z.enum(BUDGET_OPTIONS), z.literal("")]).optional(),
    preferredContact: z.enum(CONTACT_METHODS).optional(),
    intent: z.enum(CONTACT_INTENTS, {
      errorMap: () => ({ message: "Please choose how you'd like to continue." }),
    }),
    /** Soft pricing-card signal only — not a hard package selection. */
    packageInterest: z.string().trim().max(120).optional().or(z.literal("")),
    // Honeypot: must stay empty. Validated loosely here so the API can silently
    // accept-and-drop bot submissions instead of signaling a validation error.
    company: z.string().max(200).optional().or(z.literal("")),
    // Client timestamp used for a lightweight minimum fill-time spam check.
    startedAt: z.string().max(40).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.intent === "fit_call" && !data.phone?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Please add a phone number for fit call requests.",
      });
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;
