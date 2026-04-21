import { SectionFrame } from "./section-frame";

export type FaqItem = {
  q: string;
  a: string;
};

export const faqItems: FaqItem[] = [
  {
    q: "Is Nest open source?",
    a: "Yes. The application is at github.com/tylinndd/nest and this portfolio at github.com/StephenSook/nest-portfolio \u2014 both MIT-licensed. Fork either one.",
  },
  {
    q: "Can I try Nest without installing it?",
    a: "Yes. A live instance runs at nest-zeta-nine.vercel.app \u2014 no account, no install. The deployment points at the same ChromaDB corpus and Groq endpoint documented in the architecture section.",
  },
  {
    q: "Does the architecture generalize to other states?",
    a: "Yes. The pipeline \u2014 ChromaDB retrieval, Llama 3.3 grounded generation, deterministic keyword routing for crisis \u2014 is state-agnostic. Swap the corpus and you have a Tennessee or Texas Nest. Georgia is v1 because it\u2019s where the team lives and where we had partner access.",
  },
  {
    q: "How was the Georgia corpus validated?",
    a: "We hand-graded retrieval quality against a ~40-question test list during the twelve-week build. For v2 we would run RAGAS or TruLens on every corpus update to track faithfulness and answer-relevance quantitatively.",
  },
  {
    q: "Why Groq + Llama 3.3 instead of OpenAI?",
    a: "Cost (Groq\u2019s pricing is near-free at our volume), latency (sub-second token streaming beats GPT-4o on our prompts), and open weights (we can audit what the model was trained on before trusting it with eligibility answers).",
  },
  {
    q: "Who owns what on this project?",
    a: "Stephen Sookra \u2014 frontend and pitch. Tylin Delaney \u2014 RAG pipeline, FastAPI, corpus ingestion. Brenden Bryant \u2014 design direction and light coding. The \u201cWho built what\u201d section above has the full breakdown.",
  },
];

export function Faq() {
  return (
    <SectionFrame id="faq" number="10" eyebrow="FAQ">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Questions we keep getting.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Recruiter and reviewer questions we&rsquo;ve answered enough times to write them
        down. If yours isn&rsquo;t here, the team links are in the footer.
      </p>

      <dl className="mt-16 space-y-10">
        {faqItems.map((item, i) => (
          <div key={item.q} className="border-t border-white/[0.08] pt-6">
            <dt>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Q &middot; {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                {item.q}
              </p>
            </dt>
            <dd className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </SectionFrame>
  );
}
