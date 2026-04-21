"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-section-sheet"
        aria-label="Open section menu"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-white/15 bg-[#0a0a0a]/90 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground shadow-lg backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
      >
        <span className="tabular-nums text-subtle">{current.number}</span>
        <span>{current.label}</span>
        <span aria-hidden className="text-subtle">
          &uarr;
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Case study sections"
          id="mobile-section-sheet"
        >
          <button
            type="button"
            aria-label="Close section menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-white/10 bg-[#0a0a0a] px-5 pb-8 pt-5 shadow-2xl motion-safe:animate-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-200">
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/15" />
            <div className="flex items-baseline justify-between pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                Jump to section
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle hover:text-foreground"
              >
                Close
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto">
              {sections.map((section) => {
                const isActive = active === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex items-center justify-between gap-4 border-b border-white/[0.06] py-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                        isActive ? "text-accent" : "text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`tabular-nums ${isActive ? "text-accent" : "text-subtle"}`}
                        >
                          {section.number}
                        </span>
                        <span>{section.label}</span>
                      </span>
                      {isActive && (
                        <span aria-hidden className="h-px w-6 bg-accent" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
