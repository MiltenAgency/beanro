"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/lib/content/home";
import { HIDDEN_OPACITY, spring } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: HIDDEN_OPACITY, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay },
  });

  return (
    <section className="grid-lines relative overflow-hidden bg-page pt-6 pb-8 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <h1 className="t-display text-center text-[30px] leading-[1.25] tracking-[-1px] text-brown sm:text-[42px] lg:text-[54px] lg:leading-[1.18] lg:tracking-[-2px]">
          {hero.lines.map((line, i) => (
            <motion.span
              key={line}
              {...rise(i * 0.08)}
              className="block lg:[&:not(:first-child)]:mt-1"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <div className="relative mx-auto mt-4 flex max-w-[700px] items-center justify-center sm:mt-6">
          {/* Dynamic Matcha Splash */}
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.14 }}
            className="w-[85%] max-w-[540px] sm:w-[70%]"
          >
            <Image
              src={hero.splash.src}
              alt={hero.splash.alt}
              width={1024}
              height={1024}
              priority
              className="h-auto max-h-[320px] w-full object-contain sm:max-h-[380px]"
            />
          </motion.div>

          {/* Floating Hero Glass */}
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[160px] overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-brown/10 sm:w-[190px] lg:w-[210px] lg:rounded-[28px]"
            >
              <Image
                src={hero.cup.src}
                alt={hero.cup.alt}
                width={1024}
                height={1024}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
