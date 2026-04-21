import { codeToHast } from "shiki";
import { codeSamples, type CodeSample } from "@/lib/code-samples";
import { hastToReact } from "@/lib/hast-to-react";
import { CopyCodeButton } from "./copy-code-button";
import { RefusalPlayground } from "./refusal-playground";

type RenderedSample = CodeSample & { ast: Awaited<ReturnType<typeof codeToHast>> };

async function renderSample(sample: CodeSample): Promise<RenderedSample> {
  const ast = await codeToHast(sample.code, {
    lang: sample.language,
    theme: "github-dark-default",
    transformers: [
      {
        pre(node) {
          node.properties.style = "background:transparent;padding:0;margin:0;";
        },
      },
    ],
  });
  return { ...sample, ast };
}

export async function CodeSpotlight() {
  const rendered = await Promise.all(codeSamples.map(renderSample));

  return (
    <section
      aria-label="Code spotlight — the two critical invariants"
      className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-12"
    >
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          05 &middot; Under the hood
        </span>
        <div>
          <h3 className="font-serif text-3xl leading-tight tracking-tight md:text-5xl">
            The two invariants we refused to bend.
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Crisis routing bypasses the model entirely. Every non-crisis answer
            must cite a retrieved passage or refuse. Both are enforced in code,
            not prompts &mdash; here&rsquo;s the shape.
          </p>

          <div className="mt-12 space-y-12">
            {rendered.map((sample) => (
              <figure key={sample.id}>
                <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {sample.caption}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-subtle">
                    {sample.path}
                  </span>
                </figcaption>
                <div className="group relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#0d1117]">
                  <CopyCodeButton code={sample.code} />
                  <div className="overflow-x-auto p-6 font-mono text-[13px] leading-[1.6] md:p-8">
                    {hastToReact(sample.ast)}
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {sample.description}
                </p>
              </figure>
            ))}
          </div>

          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Simplified from Tylin&rsquo;s repo &middot; see the{" "}
            <a
              href="https://github.com/StephenSook/nest-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub repository
            </a>{" "}
            for production source.
          </p>

          <RefusalPlayground />
        </div>
      </div>
    </section>
  );
}
