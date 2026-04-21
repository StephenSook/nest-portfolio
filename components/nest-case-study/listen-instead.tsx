"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "nest-listen-prompt:v1";
const SHOW_AFTER_MS = 6000;

export function ListenInstead() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === "dismissed";
    } catch {
      // localStorage can throw in sandboxed contexts — fail open
    }
    if (dismissed) return;

    const listenSection = document.getElementById("listen");
    if (!listenSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            dismiss();
          }
        }
      },
      { rootMargin: "0px 0px -40% 0px" },
    );
    observer.observe(listenSection);

    const timer = window.setTimeout(() => setVisible(true), SHOW_AFTER_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      // see above — fail silently
    }
  }

  function onListen() {
    const target = document.getElementById("listen");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    dismiss();
  }

  if (!visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Suggestion to listen to the audio deep dive"
      className="fixed bottom-5 left-5 z-40 max-w-[20rem] motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:fade-in motion-safe:duration-500"
    >
      <div className="rounded-sm border border-white/[0.1] bg-[#0a0a0a]/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Rather listen?
            </span>
            <p className="mt-1.5 text-sm leading-snug text-foreground/95">
              Two engineers walk through the architecture &mdash; 12 minutes.
            </p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss listen suggestion"
            className="-m-1 shrink-0 rounded-sm p-1 font-mono text-[11px] text-subtle transition-colors hover:text-accent"
          >
            &times;
          </button>
        </div>
        <button
          type="button"
          onClick={onListen}
          className="mt-3 w-full rounded-sm border border-accent/40 bg-accent/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent/70 hover:bg-accent/15"
        >
          Play deep dive &rarr;
        </button>
      </div>
    </div>
  );
}
