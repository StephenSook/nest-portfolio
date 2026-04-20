"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticLink({ href, children, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.1 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
