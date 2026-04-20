"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { MagneticLink } from "@/components/ui/magnetic-link";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export function CaseHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-12">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between text-sm"
      >
        <Link
          href="/"
          className="font-serif text-3xl leading-none transition-opacity hover:opacity-80 md:text-[2rem]"
        >
          Nest
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Case study · 2026
        </span>
      </motion.header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8"
      >
        <motion.span
          variants={item}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent"
        >
          Flagship project · Live
        </motion.span>

        <motion.h1
          variants={item}
          className="font-serif font-normal tracking-tight text-[clamp(3.5rem,12vw,10rem)] leading-[0.9]"
        >
          Nest.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
        >
          An AI transition navigator for Georgia foster youth aging out of care.
          Two-minute intake. Ninety-day plan. Every answer cited to real
          policy — never hallucinated.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-6 pt-4"
        >
          <MagneticLink
            href="https://nest-zeta-nine.vercel.app"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-background transition-colors hover:bg-amber-600"
          >
            See Nest live
            <svg
              viewBox="0 0 16 16"
              aria-hidden
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </MagneticLink>
          <a
            href="https://github.com/tylinndd/nest"
            target="_blank"
            rel="noreferrer"
            className="text-base text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            View source
          </a>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex items-end justify-between"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Scroll
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Stephen Sookra · Tylin Delaney · Brenden Bryant
        </span>
      </motion.footer>
    </section>
  );
}
