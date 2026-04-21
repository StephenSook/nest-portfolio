import { SectionFrame } from "./section-frame";

const beats = [
  {
    number: "I",
    title: "Two-minute intake.",
    body: "Eight questions about name, age, county, documents, education plan, housing, and health. Answers stay on the device. We never ask for an SSN or a case number.",
  },
  {
    number: "II",
    title: "A ninety-day plan.",
    body: "Ranked by urgency — coral is today, amber this month, sage is later. Every task links to a real Georgia resource with a verified date. No dead links, no placeholder text.",
  },
  {
    number: "III",
    title: "Ask Navigator, cited.",
    body: "A RAG chat over the Georgia policy corpus. Every answer shows its sources — Embark Georgia, KSU ASCEND, Wellroot, Child Welfare Gateway. Crisis keywords route deterministically to 988 and 211 without touching the LLM.",
  },
];

const nonGoals = [
  {
    title: "Not a benefits screener.",
    body: "SNAP, TANF, and WIC eligibility belong to a proper screener. Best Fit — an Atlanta-built tool that already does this — is where we route. Duplicating it would be worse than linking to it.",
  },
  {
    title: "Not a crisis counselor.",
    body: "When a message contains crisis language, Nest bypasses the model and surfaces 988 and 211 directly. Trained humans belong there, not a system trained on policy PDFs.",
  },
  {
    title: "Not a DFCS integration.",
    body: "We cite public policy a youth can re-read themselves. Real state-system integration is a separate project with separate compliance requirements — and well beyond what a student team should ship unsupervised.",
  },
];

export function Approach() {
  return (
    <SectionFrame id="approach" number="03" eyebrow="Our approach">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Replace the PDF with a conversation.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Not a chatbot layered on the handbook. A product that takes the same
        information, orders it by what&rsquo;s urgent for{" "}
        <em className="font-serif italic text-foreground/80">this</em> youth in{" "}
        <em className="font-serif italic text-foreground/80">this</em> county,
        and cites every claim.
      </p>

      <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        {beats.map((b) => (
          <li key={b.number} className="border-t border-white/[0.08] pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Beat {b.number}
            </span>
            <p className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {b.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {b.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-24 border-t border-white/[0.08] pt-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          And equally &mdash; what Nest isn&rsquo;t
        </span>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Scope discipline was a design goal, not a regret. Three decisions we made early
          and never revisited:
        </p>
        <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8">
          {nonGoals.map((g) => (
            <li key={g.title} className="border-t border-white/[0.04] pt-5">
              <p className="font-serif text-xl leading-tight tracking-tight text-foreground/90 md:text-2xl">
                {g.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {g.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionFrame>
  );
}
