"use client";

import { motion } from "framer-motion";
import { SectionFrame } from "./section-frame";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const nodes = [
  { id: "user", x: 200, y: 10, w: 200, h: 60, label: "USER QUESTION", hint: "e.g., \u201chow do I get Chafee ETV?\u201d" },
  { id: "classifier", x: 180, y: 120, w: 240, h: 60, label: "KEYWORD CLASSIFIER", hint: "deterministic · regex + phrase list" },
  { id: "crisis", x: 20, y: 260, w: 220, h: 80, label: "988 / 211", hint: "crisis bypass · no LLM call" },
  { id: "retrieval", x: 360, y: 260, w: 220, h: 80, label: "CHROMADB RETRIEVAL", hint: "top-k passages · Georgia policy corpus" },
  { id: "llm", x: 360, y: 380, w: 220, h: 80, label: "GROQ · LLAMA 3.3 70B", hint: "grounded generation · cites sources" },
  { id: "response", x: 360, y: 500, w: 220, h: 70, label: "CITED ANSWER", hint: "inline source links · Embark · ASCEND · Wellroot" },
];

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.9, delay, ease: EASE }, opacity: { duration: 0.2, delay } },
  }),
};

const nodeVariant = {
  hidden: { opacity: 0, y: 8 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE },
  }),
};

function Node({
  x,
  y,
  w,
  h,
  label,
  hint,
  delay,
  tone = "default",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  hint: string;
  delay: number;
  tone?: "default" | "crisis";
}) {
  const stroke = tone === "crisis" ? "#e27d60" : "rgba(255,255,255,0.22)";
  const labelColor = tone === "crisis" ? "#e27d60" : "currentColor";
  return (
    <motion.g
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={nodeVariant}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill="rgba(255,255,255,0.015)"
        stroke={stroke}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - 6}
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={11}
        letterSpacing={1.4}
        fill={labelColor}
      >
        {label}
      </text>
      <text
        x={x + w / 2}
        y={y + h / 2 + 14}
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize={10}
        fill="currentColor"
        opacity={0.48}
      >
        {hint}
      </text>
    </motion.g>
  );
}

export function ArchitectureDiagram() {
  return (
    <SectionFrame id="architecture" number="05" eyebrow="The architecture">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Grounded by design.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Every answer comes from a retrieved passage of Georgia policy — never the model&rsquo;s
        training data. Crisis keywords bypass the LLM entirely.
      </p>

      <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 md:p-10">
        <svg
          viewBox="0 0 600 600"
          className="mx-auto block h-auto w-full max-w-3xl text-foreground"
          role="img"
          aria-labelledby="arch-title arch-desc"
        >
          <title id="arch-title">Nest request flow</title>
          <desc id="arch-desc">
            A user question passes through a deterministic keyword classifier. Crisis phrases are
            routed directly to 988 and 211. Non-crisis questions retrieve passages from a
            ChromaDB index of Georgia policy, which are then passed to Llama 3.3 on Groq to
            produce a cited answer.
          </desc>

          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="rgba(255,255,255,0.35)" />
            </marker>
            <marker
              id="arrow-coral"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="#e27d60" />
            </marker>
          </defs>

          <motion.path
            d="M 300 70 L 300 120"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
            fill="none"
            markerEnd="url(#arrow)"
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={pathVariant}
          />

          <motion.path
            d="M 300 180 L 300 220 L 130 220 L 130 260"
            stroke="#e27d60"
            strokeWidth={1}
            strokeDasharray="4 4"
            fill="none"
            markerEnd="url(#arrow-coral)"
            custom={0.35}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={pathVariant}
          />
          <motion.text
            x={130}
            y={214}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize={10}
            fill="#e27d60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            CRISIS
          </motion.text>

          <motion.path
            d="M 300 180 L 300 220 L 470 220 L 470 260"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
            fill="none"
            markerEnd="url(#arrow)"
            custom={0.35}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={pathVariant}
          />
          <motion.text
            x={470}
            y={214}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize={10}
            fill="currentColor"
            opacity={0.55}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.55 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            OTHER
          </motion.text>

          <motion.path
            d="M 470 340 L 470 380"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
            fill="none"
            markerEnd="url(#arrow)"
            custom={0.9}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={pathVariant}
          />

          <motion.path
            d="M 470 460 L 470 500"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
            fill="none"
            markerEnd="url(#arrow)"
            custom={1.15}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={pathVariant}
          />

          <Node {...nodes[0]} delay={0.05} />
          <Node {...nodes[1]} delay={0.2} />
          <Node {...nodes[2]} delay={0.55} tone="crisis" />
          <Node {...nodes[3]} delay={0.55} />
          <Node {...nodes[4]} delay={1.0} />
          <Node {...nodes[5]} delay={1.25} />
        </svg>
      </div>

      <dl className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <div className="border-t border-white/[0.08] pt-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Principle · 01
          </dt>
          <dd className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
            Retrieval first.
          </dd>
          <p className="mt-3 text-base leading-relaxed text-muted">
            ChromaDB holds the Georgia corpus. The LLM never generates from training memory —
            only from passages we&rsquo;ve verified and dated.
          </p>
        </div>
        <div className="border-t border-white/[0.08] pt-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Principle · 02
          </dt>
          <dd className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
            Cite or don&rsquo;t answer.
          </dd>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Llama 3.3 is prompted to refuse rather than speculate. Every claim links to the
            specific passage it came from.
          </p>
        </div>
        <div className="border-t border-white/[0.08] pt-6">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Principle · 03
          </dt>
          <dd className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
            Crisis is deterministic.
          </dd>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Phrases matching a crisis list route to 988 and 211 before any model call. We never
            ask an LLM to triage someone&rsquo;s life.
          </p>
        </div>
      </dl>
    </SectionFrame>
  );
}
