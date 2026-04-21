"use client";

import { useIsMac } from "@/lib/use-is-mac";

export function PrintButton() {
  const isMac = useIsMac();
  const modKey = isMac ? "\u2318" : "Ctrl";

  return (
    <div className="flex flex-col items-start gap-1.5 md:items-end">
      <button
        type="button"
        onClick={() => window.print()}
        aria-label="Save the case study as a PDF via browser print"
        className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-foreground focus-visible:text-foreground"
      >
        Save as PDF &rarr;
      </button>
      <span
        aria-hidden
        className="font-mono text-[9px] tracking-[0.15em] text-subtle/60"
      >
        Or press{" "}
        <kbd className="rounded-sm border border-white/10 px-1 py-0.5 text-foreground/60">
          {modKey}
        </kbd>
        {" + "}
        <kbd className="rounded-sm border border-white/10 px-1 py-0.5 text-foreground/60">
          P
        </kbd>
      </span>
    </div>
  );
}
