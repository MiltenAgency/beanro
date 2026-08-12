"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

import { stirBlock } from "@/lib/content/home";
import { spring } from "@/lib/motion";
import { Reveal } from "@/components/motions/Reveal";

const TONE = {
  yellow: "bg-yellow text-brown",
  orange: "bg-orange text-brown",
  forest: "bg-forest text-cream",
  peach: "bg-peach text-brown",
} as const;

/** The brown panel: a word that swaps in place, surrounded by tilted flavour pills. */
export function StirBlock() {
  const [word, setWord] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setWord((w) => (w + 1) % stirBlock.swap.length), 2200);
    return () => clearInterval(id);
  }, [reduced]);

  const current = stirBlock.swap[word];

  return (
    <section className="grid-lines bg-page py-10 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
        <Reveal distance={80}>
          <div className="relative overflow-hidden rounded-[40px] bg-brown px-6 py-20 text-center lg:rounded-[60px] lg:px-16 lg:py-20">
            {stirBlock.tags.map((tag) => (
              <span
                key={tag.label}
                style={{ top: tag.top, left: tag.left, rotate: `${tag.rotate}deg` }}
                className={clsx(
                  "absolute hidden rounded-full px-4 py-[10px] font-body text-[16px] leading-[24px] font-bold whitespace-nowrap uppercase lg:inline-block",
                  TONE[tag.tone],
                )}
              >
                {tag.label}
              </span>
            ))}

            <h2 className="t-display relative mx-auto max-w-[1000px] text-[34px] leading-[1.5] tracking-[-1px] text-white sm:text-[48px] lg:text-[72px] lg:leading-[108px] lg:tracking-[-2px]">
              <span className="block">{stirBlock.lineOne}</span>
              <span className="block">{stirBlock.lineTwo}</span>

              {/* The words cross-fade in place; a `wait` transition would leave
                  the sticker briefly empty, which the original never does. */}
              <span className="relative inline-flex h-[140px] w-[434px] max-w-full -rotate-[5deg] items-center justify-center overflow-hidden rounded-2xl bg-orange text-brown">
                <AnimatePresence initial={false}>
                  <motion.span
                    key={current.text}
                    initial={reduced ? false : { y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduced ? undefined : { y: -60, opacity: 0 }}
                    transition={spring}
                    className={clsx(
                      "absolute inset-0 flex items-center justify-center",
                      current.font === "alt" &&
                        "font-alt font-semibold tracking-[-0.2px] normal-case",
                    )}
                  >
                    {current.text}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="block">{stirBlock.lineThree}</span>
              <span className="block">{stirBlock.lineFour}</span>
            </h2>

            <p className="relative mx-auto mt-[100px] max-w-[415px] font-body text-[18px] leading-[27px] text-peach">
              {stirBlock.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
