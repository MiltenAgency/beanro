"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/lib/content/home";
import { HIDDEN_OPACITY, spring } from "@/lib/motion";

/**
 * Hero: headline rises in two beats, the splash fans out behind it and the cup
 * lands in front. The original draws the cup into a WebGL canvas that the
 * static export cannot carry, so the same cup asset is composited here and
 * given a slow float — see PRODUCT.md → Deviations.
 *
 * Geometry is taken from the original at 1440px: splash 1072×448 at y450,
 * cup ≈365×557 centred, both expressed as percentages so they scale down.
 */
export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: HIDDEN_OPACITY, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay },
  });

  return (
    <section className="grid-lines relative overflow-hidden bg-page pt-12 lg:pt-[87px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-0">
        <h1 className="t-display text-center text-[40px] leading-[1.5] tracking-[-1.5px] text-brown sm:text-[56px] lg:text-[70px] lg:leading-[105px] lg:tracking-[-4px]">
          {hero.lines.map((line, i) => (
            <motion.span
              key={line}
              {...rise(i * 0.08)}
              className="block lg:[&:not(:first-child)]:mt-[10px]"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <div className="relative mx-auto w-full pb-[8%]">
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.14 }}
            className="mx-auto w-[86%] lg:w-[74.4%]"
          >
            <Image
              src={hero.splash.src}
              alt={hero.splash.alt}
              width={1920}
              height={803}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="absolute inset-x-0 top-0 flex justify-center"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[28%] overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-brown/10 lg:w-[23%] lg:rounded-[44px]"
            >
              <Image
                src={hero.cup.src}
                alt={hero.cup.alt}
                width={440}
                height={910}
                priority
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
