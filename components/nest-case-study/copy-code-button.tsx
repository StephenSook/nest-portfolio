"use client";

import { useState } from "react";

type State = "idle" | "copied" | "failed";

export function CopyCodeButton({ code }: { code: string }) {
  const [state, setState] = useState<State>("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setState("copied");
    } catch {
      // Insecure context, sandboxed iframe, or permission denied. Surface it
      // rather than silently no-op so the user knows their paste will be stale.
      setState("failed");
    }
    setTimeout(() => setState("idle"), 1800);
  };

  const label =
    state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy";
  const ariaLabel =
    state === "copied"
      ? "Code copied to clipboard"
      : state === "failed"
        ? "Copy to clipboard failed"
        : "Copy code to clipboard";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ariaLabel}
      aria-live="polite"
      className="absolute right-3 top-3 z-10 rounded-sm border border-white/10 bg-[#0d1117]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle backdrop-blur transition-colors hover:border-accent/50 hover:text-accent focus-visible:border-accent/50 focus-visible:text-accent md:opacity-60 md:hover:opacity-100 md:focus-visible:opacity-100"
    >
      {label}
    </button>
  );
}
