import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found · Nest",
  description:
    "No passage retrieved for that path. Head back to the portfolio or read the Nest case study.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-12"
    >
      <header className="flex items-center justify-between text-sm">
        <Link
          href="/"
          className="font-serif text-3xl leading-none transition-opacity hover:opacity-80 md:text-[2rem]"
        >
          Nest
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Status &middot; 404
        </span>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Retrieval failed
        </span>

        <h1 className="font-serif font-normal tracking-tight leading-[0.9] text-[clamp(3rem,10vw,8rem)]">
          No passage
          <br />
          for that <span className="italic text-accent">path</span>.
        </h1>

        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl">
          The retrieval layer can only return documents that exist in the index.
          This URL isn&rsquo;t one of them &mdash; head back to the portfolio, or
          go straight to the case study.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-background transition-colors hover:bg-amber-600"
          >
            <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">
              &larr;
            </span>
            Back to the portfolio
          </Link>
          <Link
            href="/nest"
            className="text-base text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Read the case study
          </Link>
        </div>
      </div>

      <footer className="flex items-end justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Error &middot; 404
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Stephen Sookra &middot; Tylin Delaney &middot; Brenden Bryant
        </span>
      </footer>
    </main>
  );
}
