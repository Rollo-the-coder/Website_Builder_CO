import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Seattle Small Business Websites & Systems",
  description:
    "Marketing narrative plus the systems behind the site — bookings, payments, portals, and automations — then ongoing management. Seattle, Bellevue, and Eastside first.",
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
