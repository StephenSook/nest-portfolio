"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import type { TeamMember } from "@/lib/team";

const EASE = [0.2, 0.8, 0.2, 1] as const;
const MAX_TILT = 4;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 150,
    damping: 15,
    mass: 0.2,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 150,
    damping: 15,
    mass: 0.2,
  });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    rotateY.set(nx * MAX_TILT);
    rotateX.set(-ny * MAX_TILT);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-colors hover:border-white/[0.12]"
      >
        <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-white/[0.02]">
          <Image
            src={member.imageSrc}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 100vw"
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
          />
        </div>

        <h3 className="font-serif text-[1.75rem] leading-[1.05] tracking-tight">
          {member.name}
        </h3>
        <p className="mt-2 text-sm text-muted">{member.role}</p>

        <dl className="mt-6 space-y-2 border-t border-white/[0.06] pt-5 text-sm">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Class of
            </dt>
            <dd className="whitespace-pre-line text-right text-foreground">{member.classOf}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Summer &lsquo;26
            </dt>
            <dd className="whitespace-pre-line text-right text-foreground">{member.summer26}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
              Dream
            </dt>
            <dd className="whitespace-pre-line text-right text-foreground">{member.dreamRole}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-5">
          <SocialLink href={member.linkedIn} label={`${member.name} on LinkedIn`}>
            <LinkedInIcon />
          </SocialLink>
          {member.portfolio ? (
            <SocialLink href={member.portfolio} label={`${member.name}'s portfolio`}>
              <GlobeIcon />
            </SocialLink>
          ) : null}
          {member.github ? (
            <SocialLink href={member.github} label={`${member.name} on GitHub`}>
              <GitHubIcon />
            </SocialLink>
          ) : null}
        </div>
      </motion.div>
    </motion.article>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-subtle transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[18px]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
