"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HIDDEN_OPACITY, spring, viewportOnce } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  /** Which way the element travels in from. */
  direction?: Direction;
  distance?: number;
  delay?: number;
  scale?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}

/**
 * Scroll-triggered appear, matching the original export's animation payload:
 * opacity 0.001 → 1 plus an axis offset, on the signature spring.
 */
export function Reveal({
  children,
  direction = "up",
  distance = 50,
  delay = 0,
  scale,
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const from: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <Tag
      className={className}
      initial={{ opacity: HIDDEN_OPACITY, ...from[direction], ...(scale ? { scale } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={viewportOnce}
      transition={{ ...spring, delay }}
    >
      {children}
    </Tag>
  );
}
