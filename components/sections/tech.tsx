const logos = [
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "react", name: "React" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "framer", name: "Framer Motion" },
  { slug: "vite", name: "Vite" },
  { slug: "fastapi", name: "FastAPI" },
  { slug: "python", name: "Python" },
  { slug: "langchain", name: "LangChain" },
  { slug: "vercel", name: "Vercel" },
  { slug: "github", name: "GitHub" },
  { slug: "figma", name: "Figma" },
];

export function Tech() {
  const doubled = [...logos, ...logos];

  return (
    <section
      id="tech"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <header className="mx-auto mb-16 grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[auto_1fr] md:gap-20 md:px-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          04 · Tech we reach for
        </span>
        <p className="max-w-xl text-lg text-muted">
          The tools we use across our work — frontend, backend, AI, and everything in
          between.
        </p>
      </header>

      <div
        className="group relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Technologies our team works with"
      >
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {doubled.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element -- remote SVGs from simple-icons CDN; next/image would not optimize vectors
            <img
              key={`${logo.slug}-${i}`}
              src={`https://cdn.simpleicons.org/${logo.slug}/71717a`}
              alt={logo.name}
              width={36}
              height={36}
              loading="lazy"
              className="h-9 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
