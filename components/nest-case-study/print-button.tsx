"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-foreground"
    >
      Download as PDF &rarr;
    </button>
  );
}
