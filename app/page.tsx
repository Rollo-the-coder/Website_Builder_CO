import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Seattle Small Business Websites & Systems",
  description:
    "I build small-business websites with the systems behind them — bookings, payments, portals, and automations — then keep everything running. Seattle, Bellevue, and Eastside first.",
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
