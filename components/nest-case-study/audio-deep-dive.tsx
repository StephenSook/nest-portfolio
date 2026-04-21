import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SectionFrame } from "./section-frame";

async function loadTranscript() {
  const path = join(process.cwd(), "public/audio/nest-deep-dive-transcript.txt");
  const raw = await readFile(path, "utf8");
  return raw.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

export async function AudioDeepDive() {
  const paragraphs = await loadTranscript();

  return (
    <SectionFrame id="listen" number="11" eyebrow="Deep dive">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Twenty minutes on the thinking behind it.
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
          <audio
            controls
            preload="none"
            aria-label="Nest deep dive · 20-minute conversational breakdown of the project, produced April 2026"
            className="w-full"
          >
            <source src="/audio/nest-deep-dive.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Produced April 2026 &middot; 20:01
        </p>

        <details className="group mt-8 border-t border-white/[0.06] pt-6">
          <summary className="flex cursor-pointer items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground">
            <span>Read the transcript</span>
            <span className="text-accent transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-[17px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </SectionFrame>
  );
}
