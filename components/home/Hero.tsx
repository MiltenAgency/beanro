"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/lib/content/home";
import { HIDDEN_OPACITY, spring } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: HIDDEN_OPACITY, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay },
  });

  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden bg-forest pt-[108px] pb-8 sm:min-h-screen sm:pb-12 lg:pb-14">
      {/* High-Resolution Cinematic Tea Plantation Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.bgImage}
          alt={hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Artistic Vignette Overlay for Crisp Typographic Legibility */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/60 via-black/25 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          aria-hidden
        />
      </div>

      {/* Main Hero Center Content (Directly Inspired by Pinterest Matcha Mori Layout) */}
      <div className="relative z-10 mx-auto flex flex-1 max-w-[1200px] flex-col items-center justify-center px-6 py-8 text-center sm:py-12">
        {/* Circular Mon Crest Emblem */}
        <motion.div {...rise(0.04)}>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:h-24 sm:w-24 sm:p-5">
            <Image
              src={hero.crest}
              alt="Komorebi Mon Crest"
              width={80}
              height={80}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Grand Centered Brand Wordmark */}
        <motion.h1
          {...rise(0.12)}
          className="t-display mt-5 text-[48px] font-bold leading-none tracking-[0.14em] text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:mt-7 sm:text-[72px] lg:text-[96px] xl:text-[108px]"
        >
          {hero.title}
        </motion.h1>

        {/* PURELY [Leaf Icon] JAPANESE Secondary Brandmark Lockup */}
        <motion.div
          {...rise(0.2)}
          className="mt-3 flex items-center justify-center gap-3 sm:mt-4 sm:gap-4.5"
        >
          <span className="font-title text-[14px] uppercase tracking-[0.25em] text-cream sm:text-[18px] lg:text-[22px]">
            {hero.subtitleLeft}
          </span>

          {/* Stylized Tea Leaf Vector Icon */}
          <div className="flex shrink-0 items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="text-sand drop-shadow-xs sm:h-6 sm:w-6"
              aria-hidden
            >
              <path
                d="M12 2C7 5 4 10 4 15C4 18.866 7.13401 22 11 22C16 22 20 18 20 12C20 6.5 16 3 12 2Z"
                fill="currentColor"
                fillOpacity="0.9"
              />
              <path
                d="M7 16C10 14 13 11 15 7"
                stroke="#172a08"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="font-title text-[14px] uppercase tracking-[0.25em] text-cream sm:text-[18px] lg:text-[22px]">
            {hero.subtitleRight}
          </span>

          <span className="text-white/50" aria-hidden>
            •
          </span>

          <span className="font-title text-[14px] tracking-[0.2em] text-sand sm:text-[18px] lg:text-[22px]">
            {hero.kanji}
          </span>
        </motion.div>

        {/* Grounded Artisanal Narrative Subhead */}
        <motion.p
          {...rise(0.28)}
          className="mx-auto mt-6 max-w-[620px] px-4 font-body text-[15px] leading-[25px] text-cream/90 drop-shadow-sm sm:mt-7 sm:text-[17px] sm:leading-[28px]"
        >
          {hero.subhead}
        </motion.p>

        {/* Intentional Action Call-to-Actions */}
        <motion.div
          {...rise(0.34)}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-6"
        >
          <Link
            href={hero.cta.primary.href}
            className="group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/20 px-9 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-brown"
          >
            <span className="t-title text-[18px] uppercase tracking-[-0.5px] text-white transition-colors duration-300 group-hover:text-brown sm:text-[20px]">
              {hero.cta.primary.label}
            </span>
          </Link>

          <Link
            href={hero.cta.secondary.href}
            className="group inline-flex items-center gap-2.5 px-6 py-4 t-title text-[18px] uppercase tracking-[-0.5px] text-cream transition-colors duration-300 hover:text-white drop-shadow-xs sm:text-[20px]"
          >
            <span>{hero.cta.secondary.label}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              aria-hidden
            >
              <path
                d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Floating Provenance Ledger (Craft Details) */}
      <motion.div
        {...rise(0.4)}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-[60px]"
      >
        <div className="rounded-[22px] border border-white/20 bg-black/40 px-5 py-4 shadow-2xl backdrop-blur-md sm:px-8 sm:py-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 sm:divide-x sm:divide-white/15">
            {hero.provenance.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col gap-0.5 sm:gap-1 ${idx !== 0 ? "sm:pl-6" : ""}`}
              >
                <span className="font-alt text-[10px] font-semibold uppercase tracking-[0.1em] text-cream/70 sm:text-[11px]">
                  {item.label}
                </span>
                <span className="font-body text-[13px] font-medium text-white sm:text-[15px]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
