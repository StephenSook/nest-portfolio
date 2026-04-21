"use client";

import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { glossary, type GlossaryKey } from "@/lib/glossary";

type Props = {
  term: GlossaryKey;
  children?: ReactNode;
};

export function Term({ term, children }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();
  const entry = glossary[term];

  useEffect(() => {
    if (!open) return;
    const handlePointer = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <span ref={wrapperRef} className="relative inline-block align-baseline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        className="inline cursor-help border-b border-dotted border-white/40 text-foreground/90 transition-colors hover:border-accent hover:text-foreground focus-visible:border-accent focus-visible:text-foreground focus-visible:outline-none"
      >
        {children ?? entry.short}
      </button>
      {open && (
        <span
          id={tooltipId}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 top-[calc(100%+0.5rem)] z-40 w-72 max-w-[calc(100vw-3rem)] -translate-x-1/2 rounded-sm border border-white/10 bg-background/95 p-4 text-left text-sm font-normal leading-relaxed text-muted shadow-xl shadow-black/40 backdrop-blur-sm"
        >
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {entry.full}
          </span>
          <span className="mt-2 block text-foreground/85">{entry.definition}</span>
        </span>
      )}
    </span>
  );
}
