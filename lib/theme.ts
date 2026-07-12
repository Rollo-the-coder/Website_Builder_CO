export const THEME_STORAGE_KEY = "gb-theme-preview";

export type ThemeRole = "brand" | "direction" | "demo";

export const THEMES = [
  {
    id: "builder",
    label: "Builder",
    blurb: "Blueprint · signal",
    role: "brand" as const,
    chips: ["#1A5CFF", "#0B1220", "#E8EDF2"],
  },
  {
    id: "pnw",
    label: "PNW",
    blurb: "Cool · ops-clean",
    role: "direction" as const,
    chips: ["#0D9488", "#0F2E28", "#EEF2F1"],
  },
  {
    id: "editorial",
    label: "Editorial",
    blurb: "Bold · high contrast",
    role: "direction" as const,
    chips: ["#E85D04", "#111111", "#F4F2EF"],
  },
  {
    id: "showcase",
    label: "Cinematic",
    blurb: "Dark theme",
    role: "demo" as const,
    chips: ["#F0A202", "#0E1114", "#F3F1EC"],
  },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId = "builder";

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return THEMES.some((theme) => theme.id === value);
}
