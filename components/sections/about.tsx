export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-12 md:py-40"
    >
      <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          01 · About
        </span>
        <p className="max-w-3xl font-serif text-3xl leading-[1.25] tracking-tight md:text-[2.5rem] md:leading-[1.2]">
          Three CS students at Kennesaw State. We pick problems commercial software
          overlooks. Our first project is <span className="italic">Nest</span> — an AI
          navigator that swaps Georgia&rsquo;s 250-page DFCS transition handbook for a
          two-minute intake and a personalized 90-day plan.
        </p>
      </div>
    </section>
  );
}
