"use client";

import { useState, type FormEvent } from "react";

type Result =
  | { kind: "idle" }
  | { kind: "crisis"; triggered: string }
  | { kind: "cited"; answer: string; source: string; page?: string }
  | { kind: "refuse" };

const CRISIS_PATTERNS: { pattern: RegExp; label: string }[] = [
  { pattern: /\b(kill|hurt|harm)\s+(my\s?self|myself)\b/i, label: "self-harm language" },
  { pattern: /\bsuicid(e|al)\b/i, label: "suicide" },
  { pattern: /\bend(ing)?\s+it(\s+all)?\b/i, label: "ending it" },
  { pattern: /\bwant\s+to\s+die\b/i, label: "wanting to die" },
  { pattern: /\bi'?m\s+(not\s+)?safe\b/i, label: "safety phrasing" },
  { pattern: /\brun(ning)?\s+away\b/i, label: "running away" },
];

const CITED_ANSWERS: {
  match: RegExp;
  answer: string;
  source: string;
  page: string;
}[] = [
  {
    match: /medicaid|health\s*(insurance|coverage)|doctor\s+after\s+18/i,
    answer:
      "Former foster youth in Georgia stay eligible for Medicaid through their 26th birthday under the ACA's foster-care extension. No income test, no separate application — the eligibility carries forward from your last open case.",
    source: "Making the Transition — GA DFCS Handbook for Older Youth in Care",
    page: "p. 41",
  },
  {
    match: /chafee|etv|education\s+(training|voucher)|college\s+money/i,
    answer:
      "Chafee ETV in Georgia covers up to $5,000 per year toward college, vocational, or training programs — eligibility runs through age 26 if you were in DFCS custody on or after your 14th birthday.",
    source: "Making the Transition — GA DFCS Handbook for Older Youth in Care",
    page: "p. 29",
  },
  {
    match: /housing|voucher|place\s+to\s+live|rent\s+help|fup/i,
    answer:
      "The Family Unification Program (FUP) reserves vouchers specifically for youth aging out. In Georgia, referrals come through your county's public housing authority — your ILP case worker can start the paperwork.",
    source: "Making the Transition — GA DFCS Handbook for Older Youth in Care",
    page: "p. 67",
  },
  {
    match: /ilp|independent\s+living|case\s+worker|transition\s+plan/i,
    answer:
      "ILP (Independent Living Program) services in Georgia run through age 21 with voluntary extension to 23. They cover life-skills training, stipends for approved expenses, and continued case management.",
    source: "Making the Transition — GA DFCS Handbook for Older Youth in Care",
    page: "p. 18",
  },
];

export function RefusalPlayground() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result>({ kind: "idle" });

  function classify(input: string): Result {
    const trimmed = input.trim();
    if (!trimmed) return { kind: "idle" };

    for (const { pattern, label } of CRISIS_PATTERNS) {
      if (pattern.test(trimmed)) {
        return { kind: "crisis", triggered: label };
      }
    }

    for (const { match, answer, source, page } of CITED_ANSWERS) {
      if (match.test(trimmed)) {
        return { kind: "cited", answer, source, page };
      }
    }

    return { kind: "refuse" };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(classify(query));
  }

  return (
    <div className="mt-16 rounded-sm border border-white/[0.08] bg-white/[0.015] p-6 md:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Try the guardrails
        </span>
        <span className="font-mono text-[10px] tracking-[0.12em] text-subtle">
          client-side &middot; no backend
        </span>
      </div>
      <h4 className="mt-4 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
        See the three branches yourself.
      </h4>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        A scripted reproduction of the logic above. Crisis phrasing routes to
        988 / 211. Foster-care questions resolve to a cited passage. Everything
        else refuses &mdash; exactly the shape of the production sentinel.
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="refusal-input" className="sr-only">
          Type a question or phrase
        </label>
        <input
          id="refusal-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about Medicaid, Chafee, housing — or try anything"
          className="flex-1 rounded-sm border border-white/[0.12] bg-[#0d1117] px-4 py-3 font-mono text-[13px] text-foreground placeholder:text-subtle focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className="rounded-sm border border-accent/40 bg-accent/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent/70 hover:bg-accent/15"
        >
          Run
        </button>
      </form>

      <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
        {[
          "How do I keep Medicaid after 18?",
          "What is Chafee ETV?",
          "Help with housing",
          "ILP rules in Georgia",
        ].map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => {
              setQuery(ex);
              setResult(classify(ex));
            }}
            className="rounded-sm border border-white/[0.08] px-2 py-1 transition-colors hover:border-accent/40 hover:text-accent"
          >
            {ex}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-8">
        {result.kind === "idle" && (
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
            Awaiting input &middot; branch will appear here
          </p>
        )}

        {result.kind === "crisis" && (
          <div className="rounded-sm border border-[#e85a5a]/40 bg-[#e85a5a]/[0.06] p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#ff8585]">
              Branch 01 &middot; Crisis route &middot; matched {result.triggered}
            </span>
            <p className="mt-3 font-serif text-xl leading-tight tracking-tight md:text-2xl">
              The LLM never saw this message.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Keyword classifier caught it first &mdash; message is short-circuited
              to a safety card. No inference, no tokens, no logs beyond the
              anonymized event.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:988"
                className="rounded-sm border border-white/[0.12] bg-[#0d1117] p-4 transition-colors hover:border-accent/50"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                  988
                </span>
                <p className="mt-1 font-serif text-lg tracking-tight">
                  Suicide &amp; Crisis Lifeline
                </p>
                <p className="mt-1 text-xs text-muted">Call or text, 24/7</p>
              </a>
              <a
                href="tel:211"
                className="rounded-sm border border-white/[0.12] bg-[#0d1117] p-4 transition-colors hover:border-accent/50"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                  211
                </span>
                <p className="mt-1 font-serif text-lg tracking-tight">
                  Georgia United Way
                </p>
                <p className="mt-1 text-xs text-muted">Shelter &middot; food &middot; crisis</p>
              </a>
            </div>
          </div>
        )}

        {result.kind === "cited" && (
          <div className="rounded-sm border border-accent/30 bg-accent/[0.04] p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Branch 02 &middot; Cited answer &middot; retrieval succeeded
            </span>
            <p className="mt-3 text-base leading-relaxed text-foreground/95 md:text-lg">
              {result.answer}
            </p>
            <p className="mt-4 border-t border-white/[0.08] pt-4 font-mono text-[11px] leading-relaxed text-subtle">
              <span className="text-accent">Source &middot;</span> {result.source}{" "}
              {result.page && (
                <span className="text-muted">&middot; {result.page}</span>
              )}
            </p>
          </div>
        )}

        {result.kind === "refuse" && (
          <div className="rounded-sm border border-white/[0.12] bg-white/[0.02] p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Branch 03 &middot; Refusal &middot; no passage matched
            </span>
            <p className="mt-3 font-mono text-sm leading-relaxed text-foreground/90 md:text-base">
              I can&rsquo;t answer that from the Georgia foster-care corpus I was
              given. Try rephrasing, or ask about Medicaid, Chafee ETV, housing
              vouchers, or Independent Living.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              The production sentinel returns this exact string any time retrieval
              similarity falls below threshold. No hallucinated fallback &mdash; the
              model is instructed to refuse rather than guess.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
