import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "~700", label: "GA foster youth age out of state care each year" },
  { value: "1 in 4", label: "experience homelessness within a year" },
  { value: "<3%", label: "earn a college degree by 26" },
];

const stack = [
  "React",
  "TypeScript",
  "Tailwind",
  "FastAPI",
  "LangChain",
  "ChromaDB",
  "Groq",
  "Vercel",
];

export function FeaturedProject() {
  return (
    <section
      id="nest"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-12 md:py-32"
    >
      <header className="mb-12 grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          03 · Featured project
        </span>
        <div>
          <h2 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Nest.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            AI-powered transition navigator for Georgia foster youth aging out of care.
          </p>
        </div>
      </header>

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/projects/nest-home.png"
            alt="Nest onboarding screen — Step 1 of 7, asking 'What should we call you?'"
            fill
            priority={false}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <dl className="mt-16 grid gap-12 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-white/[0.08] pt-6">
            <dt className="font-serif text-6xl leading-none tracking-tight md:text-7xl">
              {s.value}
            </dt>
            <dd className="mt-4 max-w-[20ch] text-sm leading-relaxed text-muted">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 flex flex-col gap-10 border-t border-white/[0.08] pt-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/nest"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-amber-600"
          >
            Read the case study
            <svg
              viewBox="0 0 16 16"
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </Link>
          <a
            href="https://nest-zeta-nine.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            See Nest live
          </a>
          <a
            href="https://github.com/tylinndd/nest"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
