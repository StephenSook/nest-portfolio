import { SectionFrame } from "./section-frame";

type Contribution = {
  name: string;
  role: string;
  bullets: string[];
};

const contributions: Contribution[] = [
  {
    name: "Stephen Sookra",
    role: "Frontend \u00b7 Pitch lead",
    bullets: [
      "Built the Next.js 16 case-study site \u2014 scroll reveals, magnetic links, Lenis smooth scroll.",
      "Editorial art direction \u2014 serif / mono system, satori OG cards, print stylesheet.",
      "Pitch narrative and C-Day booth demo flow.",
      "Accessibility pass \u2014 skip links, reduced motion, focus rings, footnote citations.",
    ],
  },
  {
    name: "Tylin Delaney",
    role: "Backend \u00b7 RAG",
    bullets: [
      "ChromaDB retrieval pipeline \u2014 chunk sizing, embedding selection, ~500 indexed passages.",
      "FastAPI service wrapping Llama 3.3 on Groq \u2014 prompt templates, cite-or-refuse guardrails.",
      "Georgia corpus ingestion \u2014 DFCS handbook plus partner nonprofit docs (Embark, ASCEND, Wellroot).",
      "Deterministic crisis routing \u2014 keyword classifier for 988 / 211 bypass.",
    ],
  },
  {
    name: "Brenden Bryant",
    role: "Design \u00b7 Light coding",
    bullets: [
      "Brand direction \u2014 amber accent, \u201chandbook to handheld\u201d narrative framing.",
      "Typography and color exploration \u2014 serif / sans pairing, contrast targets.",
      "Design review across the case study and home page.",
      "Light coding contributions \u2014 component polish and iteration.",
    ],
  },
];

export function TeamContributions() {
  return (
    <SectionFrame id="credits" number="08" eyebrow="Who built what">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Three engineers, distinct scopes.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Nest was a twelve-week build. Here&rsquo;s who owned what &mdash; so recruiters
        reviewing this case study know whose commit history to check.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {contributions.map((person) => (
          <article key={person.name} className="border-t border-white/[0.08] pt-6">
            <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
              {person.name}
            </h3>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {person.role}
            </p>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-muted">
              {person.bullets.map((bullet, i) => (
                <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2 before:bg-white/25">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
