"use client";

import { motion, type Variants } from "framer-motion";
import { Cite } from "./cite";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const stats = [
  {
    figure: "~700",
    label: "Georgia foster youth age out of state care each year.",
    citation: 1,
  },
  {
    figure: "1 in 4",
    label: "will experience homelessness within twelve months.",
    citation: 2,
  },
  {
    figure: "<3%",
    label: "will earn a four-year college degree by age 26.",
    citation: 3,
  },
  {
    figure: "250",
    label: "pages in the DFCS handbook that is the state's main resource.",
    unit: "pages",
    citation: 4,
  },
];

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

export function StakesReveal() {
  return (
    <section
      id="stakes"
      aria-label="The stakes — why Nest exists"
      className="relative"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-20 md:px-12 md:pt-28">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          01 · The stakes
        </span>
      </div>

      {stats.map((s, i) => (
        <motion.div
          key={s.figure}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={variants}
          className="relative flex min-h-[80vh] items-center border-b border-white/[0.05] px-6 md:min-h-[90vh] md:px-12"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
            <p className="font-serif font-normal tracking-tight leading-[0.88] text-[clamp(5.5rem,16vw,13rem)]">
              {s.figure}
              {s.unit && (
                <span className="ml-3 align-baseline font-sans text-xl font-normal text-muted md:ml-6 md:text-2xl">
                  {s.unit}
                </span>
              )}
            </p>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted md:text-xl">
              {s.label}
              <Cite n={s.citation} />
            </p>
          </div>
          <span className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:bottom-10 md:right-12">
            {String(i + 1).padStart(2, "0")} / {String(stats.length).padStart(2, "0")}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
