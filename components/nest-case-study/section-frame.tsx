import type { ReactNode } from "react";

type SectionFrameProps = {
  id?: string;
  number: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
};

export function SectionFrame({
  id,
  number,
  eyebrow,
  children,
  className = "",
}: SectionFrameProps) {
  const eyebrowLabel = (
    <>
      {number} &middot; {eyebrow}
    </>
  );

  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:px-12 md:py-32 ${className}`}
    >
      <header className="mb-12 grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        {id ? (
          <a
            href={`#${id}`}
            aria-label={`Link to section: ${eyebrow}`}
            className="group relative inline-flex items-baseline self-start font-mono text-[10px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-accent focus-visible:text-accent md:pt-3"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:-left-5"
            >
              #
            </span>
            {eyebrowLabel}
          </a>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
            {eyebrowLabel}
          </span>
        )}
        <div>{children}</div>
      </header>
    </section>
  );
}
