"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  children: ReactNode;
};

export function SectionAnchor({ id, label, children }: Props) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function handleClick() {
    // Hash nav is the primary behavior — the browser handles it because we
    // never preventDefault. Copy is a nicety on top. Skip cleanly when
    // clipboard is unavailable (insecure context, sandboxed iframe) so we
    // don't throw a TypeError at the user's console.
    if (!navigator.clipboard) return;

    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(
      () => {
        if (timerRef.current !== null) {
          window.clearTimeout(timerRef.current);
        }
        setCopied(true);
        timerRef.current = window.setTimeout(() => {
          setCopied(false);
          timerRef.current = null;
        }, 1800);
      },
      () => {
        // Permission denied mid-flight. The aria-label advertises
        // navigation, not copy, and the hash nav already scrolled the
        // user — silence is the honest response here.
      },
    );
  }

  return (
    <a
      href={`#${id}`}
      aria-label={`Link to section: ${label}`}
      onClick={handleClick}
      className="group relative inline-flex items-baseline self-start font-mono text-[10px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-accent focus-visible:text-accent md:pt-3"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -left-4 text-accent transition-opacity md:-left-5 ${
          copied
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        {copied ? "\u2713" : "#"}
      </span>
      {children}
      <span className="sr-only" aria-live="polite">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </a>
  );
}
