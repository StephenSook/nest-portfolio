"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore, type ReactNode } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <ReactLenis
      root
      options={{
        lerp: reducedMotion ? 1 : 0.1,
        smoothWheel: !reducedMotion,
      }}
    >
      {children}
    </ReactLenis>
  );
}
