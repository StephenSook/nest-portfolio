"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

function detect(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform = nav.userAgentData?.platform ?? nav.platform ?? "";
  return /mac|iphone|ipad/i.test(`${platform} ${nav.userAgent ?? ""}`);
}

export function useIsMac(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    detect,
    () => false,
  );
}
