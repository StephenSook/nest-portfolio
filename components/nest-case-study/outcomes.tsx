import { SectionFrame } from "./section-frame";

// Volume stats (what we built) paired with product-guarantee stats (what the
// architecture enforces). When we have eval numbers from Tylin — citation
// accuracy on a test set, p95 latency, refusal precision — we can promote
// those in or alongside this grid.
const facts = [
  { figure: "3", label: "engineers" },
  { figure: "12", label: "weeks end-to-end" },
  { figure: "~500", label: "verified policy passages indexed" },
  { figure: "8", label: "onboarding steps, zero SSN required" },
  { figure: "100%", label: "deterministic crisis routing" },
  { figure: "0", label: "uncited claims by design" },
];

// Milestone dates — Stephen to verify/refine. Known dates are exact; kickoff
// and mid-build dates are best estimates pending confirmation.
const milestones = [
  {
    date: "Feb 2026",
    label: "Kickoff",
    note: "Three CS students, one Georgia handbook problem.",
  },
  {
    date: "Mar 2026",
    label: "Corpus ingested",
    note: "~500 passages across DFCS, Embark, ASCEND, Wellroot, and Child Welfare Gateway.",
  },
  {
    date: "Mar 2026",
    label: "Cite-or-refuse shipped",
    note: "Every LLM answer grounded in a retrieved passage. Refusal on any claim without a source.",
  },
  {
    date: "Apr 16, 2026",
    label: "Advisor review",
    note: "Domain review with an Executive Director in Georgia foster-youth services. Liability-focused feedback on crisis routing and document handling.",
  },
  {
    date: "Apr 20, 2026",
    label: "Submitted to C-Day",
    note: "Nest deployed, case study published, source code on GitHub under MIT.",
  },
  {
    date: "Apr 29, 2026",
    label: "C-Day presentation",
    note: "Kennesaw State CCSE · UC-151 / UC-197.",
  },
];

export function Outcomes() {
  return (
    <SectionFrame id="outcomes" number="07" eyebrow="What shipped">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        From handbook to handheld.
      </h2>
      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted md:text-xl">
        <p>
          Nest is live on Vercel, open-source on GitHub under MIT, and showcased at Kennesaw
          State&rsquo;s C-Day on April 29 in UC-151&ndash;197. The corpus covers Chafee ETV,
          Medicaid extension, Extended Youth Support Services, housing vouchers, and twenty
          other Georgia-specific programs.
        </p>
        <p>
          Georgia is v1. The architecture&mdash;local retrieval, cited generation, deterministic
          crisis routing&mdash;generalizes to any state with a transition handbook and a
          nineteen-year-old trying to read it.
        </p>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-6">
        {facts.map((f) => (
          <div key={f.label} className="border-t border-white/[0.08] pt-5">
            <dt className="font-serif text-5xl leading-none tabular-nums tracking-tight md:text-6xl">
              {f.figure}
            </dt>
            <dd className="mt-3 text-sm leading-snug text-muted md:text-base">{f.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-24 border-t border-white/[0.08] pt-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Twelve weeks, in order
        </span>
        <ol className="mt-10 space-y-8">
          {milestones.map((m, i) => (
            <li
              key={m.label}
              className="grid gap-3 md:grid-cols-[9rem_1fr] md:gap-10"
            >
              <div className="flex items-baseline gap-3 md:block">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle md:mt-2 md:block">
                  {m.date}
                </span>
              </div>
              <div className="border-t border-white/[0.06] pt-3 md:border-t-0 md:pt-0">
                <p className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                  {m.label}
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">
                  {m.note}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
}
