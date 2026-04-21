"use client";

import { useState } from "react";

export function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // If the clipboard API isn't available (insecure context, etc.)
      // we silently do nothing — the code is still visible to the user.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Code copied" : "Copy code to clipboard"}
      aria-live="polite"
      className="absolute right-3 top-3 z-10 rounded-sm border border-white/10 bg-[#0d1117]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle backdrop-blur transition-colors hover:border-accent/50 hover:text-accent focus-visible:border-accent/50 focus-visible:text-accent md:opacity-60 md:hover:opacity-100 md:focus-visible:opacity-100"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
