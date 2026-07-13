"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/analytics";

/** Fires once when the Boost case study page mounts. */
export function BoostPageTracker() {
  useEffect(() => {
    trackEvent("boost_case_study_view");
  }, []);

  return null;
}
