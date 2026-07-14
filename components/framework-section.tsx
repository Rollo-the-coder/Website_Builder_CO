"use client";

import { WebsiteSystemMap } from "@/components/website-system-map";
import { Reveal } from "@/components/reveal";

export function FrameworkSection() {
  return (
    <Reveal loose>
      <div className="mx-auto max-w-4xl">
        <WebsiteSystemMap />
      </div>
    </Reveal>
  );
}
