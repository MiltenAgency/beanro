"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { spring } from "@/lib/motion";

const DIGIT_HEIGHT = 68;

/**
 * The original animates each figure as a reel of 0–9 that slides to its digit.
 * Same construction here: one masked column per digit, translated by
 * -digit × row height once the block scrolls into view.
 */
function Reel({ digit, delay }: { digit: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  return (
    <span
      ref={ref}
      className="relative block overflow-hidden"
      style={{ height: DIGIT_HEIGHT, width: "0.62em" }}
    >
      <motion.span
        className="absolute inset-x-0 top-0 block text-center"
        initial={{ y: 0 }}
        animate={inView || reduced ? { y: -digit * DIGIT_HEIGHT } : { y: 0 }}
        transition={reduced ? { duration: 0 } : { ...spring, delay }}
      >
        {Array.from({ length: 10 }).map((_, n) => (
          <span key={n} className="block" style={{ height: DIGIT_HEIGHT, lineHeight: 1 }}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function Counter({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const digits = String(value).padStart(2, "0").split("").map(Number);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="flex items-center text-brown"
        style={{
          fontFamily: '"Bungee Inline", sans-serif',
          fontSize: DIGIT_HEIGHT,
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        {digits.map((d, i) => (
          <Reel key={i} digit={d} delay={delay + i * 0.08} />
        ))}
        <span>{suffix}</span>
      </div>
      <p className="mt-4 font-body text-[18px] leading-[27px] text-rust">
        {label}
      </p>
    </div>
  );
}
