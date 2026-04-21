"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type ZoomScreen = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

type Props = {
  screens: ZoomScreen[];
  initialId: string;
  onClose: () => void;
};

export function ScreenZoom({ screens, initialId, onClose }: Props) {
  const [idx, setIdx] = useState(() =>
    Math.max(
      0,
      screens.findIndex((s) => s.id === initialId),
    ),
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setIdx((i) => Math.min(i + 1, screens.length - 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, screens.length]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const s = screens[idx];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Zoomed screenshot ${idx + 1} of ${screens.length} — ${s.title}`}
      className="fixed inset-0 z-50 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150"
    >
      <button
        type="button"
        aria-label="Close zoom"
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close zoom"
        className="absolute right-5 top-5 z-10 rounded-sm border border-white/10 bg-[#0a0a0a]/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
      >
        Close &times;
      </button>

      <button
        type="button"
        onClick={() => setIdx((i) => Math.max(0, i - 1))}
        disabled={idx === 0}
        aria-label="Previous screenshot"
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-sm border border-white/10 bg-[#0a0a0a]/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 md:block"
      >
        &larr; Prev
      </button>
      <button
        type="button"
        onClick={() => setIdx((i) => Math.min(screens.length - 1, i + 1))}
        disabled={idx === screens.length - 1}
        aria-label="Next screenshot"
        className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-sm border border-white/10 bg-[#0a0a0a]/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 md:block"
      >
        Next &rarr;
      </button>

      <div className="pointer-events-none relative flex h-full items-center justify-center px-6 pb-24 pt-16 md:pb-16">
        <figure className="pointer-events-auto flex flex-col items-center gap-5">
          <div className="relative aspect-[430/932] max-h-[calc(100vh-11rem)] w-auto overflow-hidden rounded-[2.5rem] bg-black shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)]">
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[2.5rem] ring-1 ring-inset ring-white/[0.08]" />
            <Image
              key={s.id}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 768px) 430px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <figcaption className="flex flex-col items-center gap-2">
            <p className="text-center font-serif text-xl tracking-tight text-foreground/90">
              {s.title}
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              <span className="tabular-nums">
                {String(idx + 1).padStart(2, "0")} /{" "}
                {String(screens.length).padStart(2, "0")}
              </span>
              <span aria-hidden className="hidden md:inline">
                &middot;
              </span>
              <span className="hidden md:inline">
                <kbd className="rounded-sm border border-white/10 px-1 py-0.5">
                  &larr;
                </kbd>{" "}
                <kbd className="rounded-sm border border-white/10 px-1 py-0.5">
                  &rarr;
                </kbd>{" "}
                to navigate
              </span>
            </div>
          </figcaption>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              aria-label="Previous screenshot"
              className="rounded-sm border border-white/10 bg-[#0a0a0a]/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground disabled:opacity-30"
            >
              &larr; Prev
            </button>
            <button
              type="button"
              onClick={() =>
                setIdx((i) => Math.min(screens.length - 1, i + 1))
              }
              disabled={idx === screens.length - 1}
              aria-label="Next screenshot"
              className="rounded-sm border border-white/10 bg-[#0a0a0a]/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground disabled:opacity-30"
            >
              Next &rarr;
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
}
