import { z } from "zod";

export const HELP_OPTIONS = [
  "New website build",
  "Website rebuild / redesign",
  "Marketing narrative & offer clarity",
  "Forms, booking & payments",
  "Portal or dashboard",
  "Workflow automations",
  "AI chatbot",
  "Social media automation",
  "Security audit",
  "Launch hardening",
  "Ongoing management",
  "Not sure yet",
] as const;

export const CONTACT_METHODS = ["Email", "Phone", "Either"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  businessName: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email.").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  websiteUrl: z.string().trim().max(200).optional().or(z.literal("")),
  businessType: z.string().trim().max(120).optional().or(z.literal("")),
  helpWith: z.enum(HELP_OPTIONS, { errorMap: () => ({ message: "Please choose an option." }) }),
  biggestProblem: z
    .string()
    .trim()
    .min(10, "A sentence or two helps a lot.")
    .max(2000, "Please keep this under 2000 characters."),
  timeline: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  preferredContact: z.enum(CONTACT_METHODS).optional(),
  // Honeypot: must stay empty. Validated loosely here so the API can silently
  // accept-and-drop bot submissions instead of signaling a validation error.
  company: z.string().max(200).optional().or(z.literal("")),
  // Client timestamp used for a lightweight minimum fill-time spam check.
  startedAt: z.string().max(40).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
