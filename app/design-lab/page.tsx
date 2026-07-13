import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { ThemePreviewProvider } from "@/components/theme-preview";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ShowcaseHome } from "@/components/showcase/showcase-home";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Design Lab",
  description:
    "Explore alternate visual directions for Gotta Build. This is a design playground — the main site stays focused on conversion.",
  alternates: { canonical: "/design-lab" },
  robots: { index: false, follow: true },
};

export default function DesignLabPage() {
  return (
    <ThemePreviewProvider>
      <Section className="pb-8 pt-16 sm:pt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Design lab"
            title="Explore visual directions"
            description="Flip through styles and color palettes. Every client website is custom — this page is a playground, not the sales pitch."
          />
        </Reveal>
      </Section>
      <ThemeSwitcher />
      <ShowcaseHome />
    </ThemePreviewProvider>
  );
}
