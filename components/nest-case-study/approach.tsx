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
    </SectionFrame>
  );
}
