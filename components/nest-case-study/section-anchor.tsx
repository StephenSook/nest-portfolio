"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  children: ReactNode;
};

export function SectionAnchor({ id, label, children }: Props) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    // Let the browser handle the hash navigation itself (no preventDefault)
    // so this still works when JS fails or clipboard access is blocked.
    try {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        },
        () => {
          // Clipboard rejected (insecure context, permission denied).
          // Native hash nav already happened; silent no-op is fine here.
        },
      );
    } catch {
      // navigator.clipboard undefined in very old contexts — same story.
    }
  }

  return (
    <a
      href={`#${id}`}
      aria-label={`Copy link to section: ${label}`}
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
