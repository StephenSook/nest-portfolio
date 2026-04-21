"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

export function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Case study sections"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group flex items-center justify-end gap-3 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-accent" : "text-subtle hover:text-foreground"
                }`}
              >
                <span
                  className={`whitespace-nowrap transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
                <span className="w-5 text-right tabular-nums">
                  {section.number}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-white/15 group-hover:w-6 group-hover:bg-white/40"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
