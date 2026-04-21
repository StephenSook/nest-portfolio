import type { ReactNode } from "react";
import { SectionAnchor } from "./section-anchor";

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
          <SectionAnchor id={id} label={eyebrow}>
            {eyebrowLabel}
          </SectionAnchor>
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
