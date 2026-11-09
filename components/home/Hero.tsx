"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/lib/content/home";
import { HIDDEN_OPACITY, spring } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: HIDDEN_OPACITY, y: 35 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay },
  });

  return (
    <section className="grid-lines relative overflow-hidden bg-page pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <h1 className="t-display text-center text-[34px] leading-[1.25] tracking-[-1px] text-brown sm:text-[48px] lg:text-[62px] lg:leading-[1.2] lg:tracking-[-2px]">
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

        <div className="relative mx-auto mt-6 flex max-w-[800px] items-center justify-center sm:mt-8">
          {/* Dynamic Matcha Splash */}
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.14 }}
            className="w-[85%] max-w-[620px] sm:w-[75%]"
          >
            <Image
              src={hero.splash.src}
              alt={hero.splash.alt}
              width={1024}
              height={1024}
              priority
              className="h-auto max-h-[380px] w-full object-contain sm:max-h-[440px]"
            />
          </motion.div>

          {/* Floating Hero Glass */}
          <motion.div
            initial={reduced ? false : { opacity: HIDDEN_OPACITY, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[180px] overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-brown/10 sm:w-[220px] lg:w-[240px] lg:rounded-[32px]"
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
