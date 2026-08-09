"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { faqSection } from "@/lib/content/shared";
import { spring } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motions/Reveal";

export function Faq() {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section className="grid-lines bg-page py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
        <SectionHeading lines={faqSection.lines} blurb={faqSection.blurb} />

        <ul className="mt-12 flex flex-col gap-7">
          {faqSection.items.map((item, i) => {
            const expanded = open === i;
            return (
              <Reveal key={item.question} as="li" distance={100} delay={i * 0.04}>
                {/* Padding lives on the card so an open panel keeps the original's
                    40 / 25 / 40 rhythm instead of stacking two paddings. */}
                <div className="rounded-[32px] bg-cream p-10">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <h4 className="t-title text-[24px] leading-[35.2px] text-brown uppercase sm:text-[32px]">
                      {item.question}
                    </h4>
                    <motion.span
                      animate={{ rotate: expanded ? 180 : 0 }}
                      transition={reduced ? { duration: 0 } : spring}
                      className="shrink-0 text-orange"
                    >
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                        <path
                          d="M11 4v14M5 12l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={spring}
                        className="overflow-hidden"
                      >
                        <p className="mt-[25px] max-w-[602px] font-body text-[16px] leading-[27px] text-rust">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
