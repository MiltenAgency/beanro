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
    <section className="grid-lines relative overflow-hidden bg-page pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <h1 className="t-display text-center text-[32px] leading-[1.22] tracking-[-1px] text-brown sm:text-[46px] lg:text-[58px] lg:leading-[1.15] lg:tracking-[-2px]">
          {hero.lines.map((line, i) => (
            <motion.span
              key={line}
              {...rise(i * 0.08)}
              className="block lg:[&:not(:first-child)]:mt-1.5"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <div className="relative mx-auto mt-6 flex max-w-[1020px] items-center justify-center sm:mt-8 lg:max-w-[1140px]">
          {/* Dynamic Matcha Splash */}
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.14 }}
            className="w-[96%] max-w-[840px] sm:w-[90%] lg:max-w-[960px]"
          >
            <Image
              src={hero.splash.src}
              alt={hero.splash.alt}
              width={1024}
              height={1024}
              priority
              className="h-auto max-h-[460px] w-full object-contain sm:max-h-[540px] lg:max-h-[600px]"
            />
          </motion.div>

          {/* Floating Hero Glass (Transparent Cutout) */}
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[250px] sm:w-[310px] lg:w-[360px] filter drop-shadow-[0_24px_42px_rgba(35,50,15,0.38)]"
            >
              <Image
                src={hero.cup.src}
                alt={hero.cup.alt}
                width={1427}
                height={2094}
                priority
                className="h-auto w-full object-contain select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
