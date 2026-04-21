// Inline subsection of the Problem section. Shows the same question handed
// through both artifacts — the dense GA PAMMS policy language on the left,
// Nest's cited answer on the right — so readers feel the structural
// mismatch rather than just reading about it.
//
// The handbook excerpts are verbatim from Georgia PAMMS policy 13.4
// Transition from Foster Care (effective 2023, revised 2025), with one
// cross-reference to 19.8 Medicaid for Former Foster Care Youth.

export function HandbookCompare() {
  return (
    <div className="mt-20 border-t border-white/[0.08] pt-12">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        The shape of the mismatch
      </span>
      <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-5xl">
        Same question. <span className="text-muted">Different shape.</span>
      </h3>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        A nineteen-year-old asks one thing &mdash; <em className="font-serif">can I
        keep my Medicaid?</em> Here&rsquo;s what today&rsquo;s handbook gives them,
        and what Nest gives them.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article aria-label="Today — from the DFCS handbook">
          <header className="mb-4 flex items-baseline justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Today &middot; the handbook
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle/60">
              verbatim
            </span>
          </header>

          <div className="rounded-sm border border-white/[0.08] bg-white/[0.015] p-6 md:p-7">
            <header className="mb-4 flex flex-wrap gap-x-6 gap-y-1 border-b border-white/[0.08] pb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-subtle">
              <span>Policy 13.4</span>
              <span>Transition from Foster Care</span>
              <span className="ml-auto">Rev. 2025</span>
            </header>

            <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/65">
              Requirements
            </h4>
            <ol className="mb-5 space-y-2 pl-5 font-serif text-[13px] leading-[1.55] text-foreground/55 [list-style:decimal]">
              <li>
                Utilize the Transition Meeting (TM) to develop the Transition
                Plan within 30 calendar days of the youth&rsquo;s 16th birthday.
              </li>
              <li>
                Ensure the Transition Plan includes: Housing Options, Education,
                Workforce Supports and Employment Services, Money Management
                and Finances, Health Care Coverage, Permanent Connections
                &hellip;
              </li>
              <li>
                Facilitate the Comprehensive Transition Planning Meeting (CTPM)
                at least 90 days prior to the youth&rsquo;s exit from foster
                care.
              </li>
              <li>
                Youth shall be provided with their health and education records
                at no cost at the time they leave foster care.
              </li>
            </ol>

            <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/65">
              Related policies
            </h4>
            <p className="font-serif text-[13px] leading-[1.55] text-foreground/45">
              See 13.11 Post Foster Care Resources &middot; 13.13 Extended
              Foster Care &middot; 14.3 Chafee ETV &middot;{" "}
              <mark className="bg-accent/15 text-foreground/75">
                19.8 Medicaid for Former Foster Care Youth
              </mark>
              .
            </p>
          </div>

          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Excerpted from GA PAMMS 13.4 &middot; four more cross-references to find
            the Medicaid answer.
          </p>
        </article>

        <article aria-label="With Nest — cited answer">
          <header className="mb-4 flex items-baseline justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              With Nest &middot; cited answer
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent/60">
              one screen
            </span>
          </header>

          <div className="rounded-sm border border-accent/25 bg-accent/[0.03] p-6 md:p-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Question
            </span>
            <p className="mt-2 font-serif text-xl leading-snug tracking-tight text-foreground md:text-2xl">
              How do I keep my Medicaid when I age out?
            </p>

            <span className="mt-6 block font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Answer
            </span>
            <p className="mt-2 text-base leading-relaxed text-foreground/90 md:text-lg">
              You&rsquo;re automatically enrolled in Georgia&rsquo;s Former
              Foster Care Medicaid through your 26th birthday if you were in
              state custody on your 18th birthday.{" "}
              <strong className="font-semibold text-foreground">
                No reapplication
              </strong>{" "}
              &mdash; but report address changes to Georgia Gateway within 10
              days, or coverage can pause.
            </p>

            <span className="mt-6 block font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Source
            </span>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              DFCS Policy 19.8 &mdash; Medicaid for Former Foster Care Youth
            </p>
          </div>

          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Retrieved from the indexed corpus &middot; zero navigation required.
          </p>
        </article>
      </div>
    </div>
  );
}
