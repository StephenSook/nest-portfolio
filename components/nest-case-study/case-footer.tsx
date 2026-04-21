import { MagneticLink } from "@/components/ui/magnetic-link";
import { PrintButton } from "./print-button";

export function CaseFooter() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40">
      <div className="flex flex-col gap-20">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
            12 · End note
          </span>
          <div>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Replace the PDF
              <br />
              with a conversation.
              <br />
              <span className="text-muted">That was the brief.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-12 border-t border-white/[0.08] pt-12 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Credits
            </span>
            <p className="mt-4 font-serif text-2xl leading-snug tracking-tight md:text-3xl">
              Stephen Sookra, Tylin Delaney, and Brenden Bryant.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
              Kennesaw State University &middot; Department of Computer Science &middot; 2026.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <PrintButton />
            <MagneticLink
              href="/"
              className="group inline-flex items-center gap-3 self-start font-serif text-2xl leading-none tracking-tight transition-opacity hover:opacity-80 md:text-3xl"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-1">
                &larr;
              </span>
              Back to portfolio
            </MagneticLink>
          </div>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Nest &middot; Georgia &middot; 2026
        </p>
      </div>
    </footer>
  );
}
