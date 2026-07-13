import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Seattle Small Business Websites & Digital Systems",
  description:
    "Gotta Build creates modern websites and digital systems that turn messaging into leads, bookings, payments, portals, and smoother operations. Founder-led in Seattle and Bellevue.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HomeContent />
    </>
  );
}
