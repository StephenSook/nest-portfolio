import { SectionFrame } from "./section-frame";

export function AudioDeepDive() {
  return (
    <SectionFrame id="listen" number="08" eyebrow="Deep dive">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Ten minutes on the thinking behind it.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        A conversational breakdown of the problem, the decisions, and the trade-offs &mdash;
        generated from this case study and then edited by hand.
      </p>

      <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.01] p-6 md:p-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Audio · feature
        </span>
        <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Building Nest: why grounded AI was the only option.
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
          With the three engineers behind the project. Problem framing, corpus choices, crisis
          routing, and what we&rsquo;d do differently in v2.
        </p>

        <div className="mt-8">
          <audio controls preload="none" className="w-full">
            <source src="/audio/nest-deep-dive.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Produced April 2026
        </p>
      </div>
    </SectionFrame>
  );
}
