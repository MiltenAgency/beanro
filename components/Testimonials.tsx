"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { testimonialsSection } from "@/lib/content/shared";
import { spring } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";

function Stars() {
  return (
    <div className="flex gap-1.5" aria-label="Five out of five">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 14 14" aria-hidden className="text-orange">
          <path
            fill="currentColor"
            d="M7 0l1.9 4.3L13.6 5l-3.5 3.2.9 4.8L7 10.7 2.9 13l.9-4.8L.4 5l4.7-.7z"
          />
        </svg>
      ))}
    </div>
  );
}

/** Testimonial carousel — three cards wide on desktop, arrow-driven like the original. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const items = testimonialsSection.items;

  const move = (delta: number) =>
    setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <section className="grid-lines bg-page pt-20 pb-10 lg:pt-28 lg:pb-0">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
        <SectionHeading lines={testimonialsSection.lines} blurb={testimonialsSection.blurb} />

        {/* Full-bleed track: 520px cards on a 560px pitch, exactly as the original. */}
        <div className="mt-12 -mr-6 overflow-hidden lg:-mr-[60px] lg:-ml-[75px]">
          <motion.ul
            className="flex gap-10"
            animate={{ x: -index * 560 }}
            transition={reduced ? { duration: 0 } : spring}
          >
            {items.map((item) => (
              <li
                key={item.author}
                className="w-[85vw] shrink-0 rounded-[32px] bg-cream p-10 sm:w-[420px] lg:h-[502px] lg:w-[520px]"
              >
                <Stars />
                <blockquote className="t-title mt-8 text-[24px] leading-[1.25] text-brown uppercase">
                  {item.quote}
                </blockquote>
                <p className="mt-auto pt-8 font-body text-[18px] leading-[27px] font-medium text-rust">
                  {item.author}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-8 flex gap-3">
          {[
            { label: "Previous testimonial", delta: -1, d: "M13 8H3M7 4L3 8l4 4" },
            { label: "Next testimonial", delta: 1, d: "M3 8h10M9 4l4 4-4 4" },
          ].map((btn) => (
            <button
              key={btn.label}
              type="button"
              aria-label={btn.label}
              onClick={() => move(btn.delta)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-brown transition-colors hover:bg-orange hover:text-cream"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d={btn.d}
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
