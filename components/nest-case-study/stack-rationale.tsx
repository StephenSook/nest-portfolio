import { SectionFrame } from "./section-frame";

const layers = [
  {
    area: "Frontend",
    tech: "Vite · React 19 · TypeScript",
    why: "Fast dev loop. No framework opinions we had to fight while sprinting.",
  },
  {
    area: "Styling",
    tech: "Tailwind 4 · shadcn/ui · Radix",
    why: "Editorial typography without a design-system tax. Copy the component, own the component.",
  },
  {
    area: "State",
    tech: "Zustand · localStorage",
    why: "Onboarding survives tab closes. A youth walking between shelters picks up where they left off.",
  },
  {
    area: "API",
    tech: "FastAPI · Python 3.11",
    why: "Typed endpoints. Async streaming for the Groq call. Pytest from day one.",
  },
  {
    area: "Retrieval",
    tech: "ChromaDB · LangChain",
    why: "Local vector store. The Georgia corpus ships in the repo — no external service to break.",
  },
  {
    area: "Inference",
    tech: "Groq · Llama 3.3 70B",
    why: "Sub-second responses. Open weights so we can audit the prompt contract line by line.",
  },
];

export function StackRationale() {
  return (
    <SectionFrame id="stack" number="06" eyebrow="The stack">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Boring choices, on purpose.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Nothing novel in the infrastructure. The interesting work is upstream — in the corpus,
        the prompts, and the refusal to hallucinate. Everything else is load-bearing plumbing.
      </p>

      <dl className="mt-16 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
        {layers.map((l) => (
          <div key={l.area} className="border-t border-white/[0.08] pt-5">
            <dt>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {l.area}
              </span>
              <p className="mt-2 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                {l.tech}
              </p>
            </dt>
            <dd className="mt-3 text-base leading-relaxed text-muted">{l.why}</dd>
          </div>
        ))}
      </dl>
    </SectionFrame>
  );
}
