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
    </SectionFrame>
  );
}
