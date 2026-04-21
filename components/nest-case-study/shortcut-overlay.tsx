"use client";

import { useEffect, useState } from "react";

type Shortcut = {
  keys: string[];
  label: string;
  description: string;
};

function isEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  return target.isContentEditable;
}

export function ShortcutOverlay() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      userAgentData?: { platform?: string };
    };
    const platform = nav.userAgentData?.platform ?? nav.platform ?? "";
    setIsMac(/mac/i.test(platform));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        return;
      }
      if (e.key !== "?" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (isEditable(e.target)) return;
      e.preventDefault();
      setOpen((v) => !v);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const mod = isMac ? "\u2318" : "Ctrl";

  const shortcuts: Shortcut[] = [
    {
      keys: [mod, "K"],
      label: "Command palette",
      description: "Jump to any section or run an action",
    },
    {
      keys: [mod, "P"],
      label: "Save as PDF",
      description: "Browser print dialog, print stylesheet applies",
    },
    {
      keys: ["\u2190", "\u2192"],
      label: "Navigate zoomed screens",
      description: "While the screen zoom modal is open",
    },
    {
      keys: ["Esc"],
      label: "Close any modal",
      description: "Zoom, command palette, or this overlay",
    },
    {
      keys: ["?"],
      label: "This overlay",
      description: "Toggle the shortcut reference",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      className="fixed inset-0 z-[60] motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150"
    >
      <button
        type="button"
        aria-label="Close shortcut overlay"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      <div className="pointer-events-none relative flex h-full items-center justify-center px-6 py-12">
        <div className="pointer-events-auto w-full max-w-lg rounded-sm border border-white/[0.08] bg-[#0a0a0a] p-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] md:p-8">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Keyboard shortcuts
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-accent"
            >
              Close &times;
            </button>
          </div>
          <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
            Move faster.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A few shortcuts are wired across this case study.
          </p>

          <ul className="mt-6 space-y-4">
            {shortcuts.map((s) => (
              <li
                key={s.label}
                className="flex items-start justify-between gap-6 border-t border-white/[0.06] pt-4"
              >
                <div>
                  <p className="text-base tracking-tight text-foreground/95">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {s.keys.map((k, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <kbd className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-foreground/90">
                        {k}
                      </kbd>
                      {i < s.keys.length - 1 && (
                        <span className="font-mono text-[10px] text-subtle">
                          +
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
            Press <kbd className="rounded-sm border border-white/[0.12] px-1 py-0.5">?</kbd>{" "}
            anywhere to reopen
          </p>
        </div>
      </div>
    </div>
  );
}
