"use client";

import { useEffect, useId, useRef, useState } from "react";
import { citations } from "@/lib/citations";

export function Cite({ n }: { n: number }) {
  const cite = citations.find((c) => c.n === n);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

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

  if (!cite) return null;

  return (
    <span ref={wrapperRef} className="relative inline-block align-baseline">
      <a
        href={`#source-${n}`}
        aria-label={`Citation ${n}. See sources.`}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="ml-0.5 align-super font-mono text-[0.58em] text-accent no-underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
      >
        {n}
      </a>
      {open && (
        <span
          id={tooltipId}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 top-[calc(100%+0.25rem)] z-40 w-72 max-w-[calc(100vw-3rem)] -translate-x-1/2 rounded-sm border border-white/10 bg-background/95 p-4 text-left text-sm font-normal normal-case leading-relaxed tracking-normal text-muted shadow-xl shadow-black/40 backdrop-blur-sm"
        >
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Source {String(n).padStart(2, "0")}
            {cite.publisher && (
              <span className="text-subtle"> &middot; {cite.publisher}</span>
            )}
          </span>
          <span className="mt-2 block text-foreground/85">{cite.text}</span>
        </span>
      )}
    </span>
  );
}
