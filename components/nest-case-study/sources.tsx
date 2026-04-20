import { citations } from "@/lib/citations";

export function Sources() {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-12 md:py-32"
    >
      <header className="mb-12 grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          Sources
        </span>
        <div>
          <h2
            id="sources-heading"
            className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl"
          >
            Show the work.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Every number on this page traces back to public reporting. The primary artifact
            Nest replaces is itself cited below &mdash; so anyone can check us against it.
          </p>
        </div>
      </header>

      <ol className="mt-6 grid gap-6 border-t border-white/[0.08] pt-10 text-base leading-relaxed text-muted md:text-[17px]">
        {citations.map((c) => (
          <li
            key={c.n}
            id={`source-${c.n}`}
            className="grid scroll-mt-24 gap-4 border-b border-white/[0.04] pb-6 last:border-b-0 md:grid-cols-[auto_1fr] md:gap-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent md:pt-1.5">
              {String(c.n).padStart(2, "0")}
            </span>
            <div className="space-y-1.5">
              <p className="text-foreground/90">{c.text}</p>
              {c.publisher && (
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {c.publisher}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
