export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-12 md:py-32"
    >
      <header className="mb-12 grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          05 · Contact
        </span>
        <div>
          <h2 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Let&rsquo;s talk.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Hiring, collaborating, or curious about the stakes behind Nest — reach out.
          </p>
        </div>
      </header>

      <div className="md:pl-[calc(7ch+5rem)]">
        <div className="space-y-8 md:space-y-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Stephen Sookra
            </span>
            <a
              href="mailto:stephensookra@gmail.com"
              className="mt-3 block font-serif text-3xl leading-[1.1] tracking-tight text-foreground transition-colors hover:text-accent md:text-5xl"
            >
              stephensookra@gmail.com
            </a>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Tylin Delaney
            </span>
            <a
              href="mailto:tylinjd1@gmail.com"
              className="mt-3 block font-serif text-3xl leading-[1.1] tracking-tight text-foreground transition-colors hover:text-accent md:text-5xl"
            >
              tylinjd1@gmail.com
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-24 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-xs text-subtle md:flex-row md:items-center md:justify-between">
        <span className="font-mono uppercase tracking-[0.18em]">
          Nest · KSU CCSE · C-Day 2026 · UC-151-197
        </span>
        <span>
          &copy; 2026 Stephen Sookra · Tylin Delaney · Brenden Bryant
        </span>
      </footer>
    </section>
  );
}
