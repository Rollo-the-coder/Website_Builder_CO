"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "https://us.i.posthog.com";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthogKey || !pathname) return;
    const query = searchParams?.toString();
    const url = query
      ? `${window.location.origin}${pathname}?${query}`
      : `${window.location.origin}${pathname}`;
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

/**
 * PostHog analytics — inactive until NEXT_PUBLIC_POSTHOG_KEY is set.
 * No project keys are committed to the repo.
 */
export function Analytics() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!posthogKey || initialized.current) return;
    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: "identified_only",
      capture_pageview: false, // App Router: capture manually
      capture_pageleave: true,
    });
    initialized.current = true;
  }, []);

  if (!posthogKey) return null;

  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}

/** Capture custom events when PostHog is configured. */
export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (!posthogKey || typeof window === "undefined") return;
  posthog.capture(event, properties);
}
