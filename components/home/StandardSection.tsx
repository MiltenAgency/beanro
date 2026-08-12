"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { standard } from "@/lib/content/home";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Scroll-driven expansion. In the original this section runs ~2.1k pixels tall:
 * the clip is pinned and grows from 440×250 to the full 1320×750 container as
 * the section passes the viewport, while the two side labels drift outward.
 */
export function StandardSection() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start end", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 0.75], ["440px", "1320px"]);
  const radius = useTransform(scrollYProgress, [0, 0.75], [20, 60]);
  const leftX = useTransform(scrollYProgress, [0, 0.75], [120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.75], [-120, 0]);

  return (
    <section className="grid-lines bg-page pt-20 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
        <Reveal>
          <h2 className="t-display text-center text-[32px] leading-[1.5] tracking-[-1px] text-brown sm:text-[44px] lg:text-[48px] lg:leading-[72px] lg:tracking-[-2px]">
            {standard.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-16 flex items-start justify-between">
          <motion.p
            style={reduced ? undefined : { x: leftX }}
            className="t-title text-[24px] leading-[1.15] text-rust uppercase"
          >
            {standard.leftLabel.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>

          <motion.p
            style={reduced ? undefined : { x: rightX }}
            className="t-title text-right text-[24px] leading-[1.15] text-rust uppercase"
          >
            {standard.rightLabel.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>
        </div>

        <div ref={track} className="relative mt-10 h-[1200px] lg:h-[1570px]">
          <div className="sticky top-[14vh] flex justify-center">
            <motion.div
              style={
                reduced
                  ? { width: "100%", borderRadius: 60 }
                  : { width, borderRadius: radius }
              }
              className="aspect-[1320/750] max-w-full overflow-hidden"
            >
              <video
                src={standard.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-20 max-w-[620px] text-center font-body text-[18px] leading-[27px] text-rust">
            {standard.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
