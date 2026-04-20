import { SectionFrame } from "./section-frame";

export function Problem() {
  return (
    <SectionFrame id="problem" number="02" eyebrow="The problem">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        The resource exists. It&rsquo;s just unusable.
      </h2>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted md:text-xl">
        <p>
          Every foster youth aging out in Georgia is handed the same document:
          the DFCS{" "}
          <em className="font-serif italic text-foreground/80">
            Making the Transition
          </em>{" "}
          handbook. Two hundred and fifty pages. Twenty-plus deadlines in the
          first ninety days after exit. No search, no personalization, no way to
          tell which of the programs you actually qualify for.
        </p>
        <p>
          Case managers carry forty-plus youth each. A deadline missed at
          nineteen — the Chafee ETV application, the Medicaid extension, the
          Extended Youth Support Services intake — compounds into the
          homelessness and degree-completion statistics on the previous screen.
        </p>
        <p>
          The handbook isn&rsquo;t wrong. It&rsquo;s just the wrong shape for
          someone trying to keep housing and a job and school while figuring
          out who to call first.
        </p>
      </div>
    </SectionFrame>
  );
}
