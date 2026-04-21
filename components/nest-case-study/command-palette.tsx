"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

type Action = {
  id: string;
  label: string;
  shortcut?: string;
  run: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [modLabel, setModLabel] = useState("Ctrl");

  useEffect(() => {
    const ua = navigator.userAgent;
    const platform =
      (navigator as Navigator & { userAgentData?: { platform?: string } })
        .userAgentData?.platform ?? navigator.platform ?? "";
    if (/Mac|iPhone|iPad/i.test(`${platform} ${ua}`)) setModLabel("\u2318");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    setTimeout(fn, 60);
  };

  const actions: Action[] = [
    {
      id: "copy-url",
      label: "Copy page URL",
      run: () => {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      },
    },
    {
      id: "open-app",
      label: "Open live Nest app",
      run: () => {
        window.open("https://nest-zeta-nine.vercel.app", "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "view-source",
      label: "View source on GitHub",
      run: () => {
        window.open(
          "https://github.com/StephenSook/nest-portfolio",
          "_blank",
          "noopener,noreferrer",
        );
      },
    },
    {
      id: "print",
      label: "Save case study as PDF",
      shortcut: `${modLabel}+P`,
      run: () => {
        window.print();
      },
    },
    {
      id: "portfolio",
      label: "Back to portfolio home",
      run: () => {
        window.location.href = "/";
      },
    },
  ];

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette — jump to section or run an action"
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh] motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150"
      overlayClassName="fixed inset-0 bg-black/75 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150"
      contentClassName="relative w-full max-w-xl overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/60 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:slide-in-from-top-2 motion-safe:duration-150"
    >
      <Command.Input
        placeholder="Jump to section, or run a command..."
        className="w-full border-b border-white/10 bg-transparent px-5 py-4 font-mono text-sm tracking-wide text-foreground outline-none placeholder:text-subtle"
      />
      <Command.List className="max-h-[60vh] overflow-y-auto p-2">
        <Command.Empty className="px-3 py-10 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
          No matches.
        </Command.Empty>

        <Command.Group
          heading="Sections"
          className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.18em] [&_[cmdk-group-heading]]:text-subtle"
        >
          {sections.map((s) => (
            <Command.Item
              key={s.id}
              value={`${s.number} ${s.label} ${s.id} section`}
              onSelect={() =>
                run(() => {
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                })
              }
              className="flex cursor-pointer items-center gap-4 rounded-sm px-3 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground/80 data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-accent"
            >
              <span className="w-6 tabular-nums text-subtle">{s.number}</span>
              <span>{s.label}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group
          heading="Actions"
          className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.18em] [&_[cmdk-group-heading]]:text-subtle"
        >
          {actions.map((a) => (
            <Command.Item
              key={a.id}
              value={`${a.label} ${a.id}`}
              onSelect={() => run(a.run)}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-sm px-3 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground/80 data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-accent"
            >
              <span>{a.label}</span>
              {a.shortcut && (
                <span className="font-mono text-[10px] tracking-[0.15em] text-subtle">
                  {a.shortcut}
                </span>
              )}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>

      <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-subtle">
        <span>
          <kbd className="rounded-sm border border-white/10 px-1 py-0.5">
            {modLabel}
          </kbd>{" "}
          +{" "}
          <kbd className="rounded-sm border border-white/10 px-1 py-0.5">K</kbd>{" "}
          to toggle
        </span>
        <span>
          <kbd className="rounded-sm border border-white/10 px-1 py-0.5">esc</kbd>{" "}
          to close
        </span>
      </div>
    </Command.Dialog>
  );
}
