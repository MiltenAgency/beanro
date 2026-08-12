"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { closingCta } from "@/lib/content/site";
import { spring, viewportOnce, HIDDEN_OPACITY } from "@/lib/motion";
import { PillButton } from "@/components/Buttons";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Closing call to action: two rotated highlight slabs behind the headline, with
 * a drink drifting in from each side. The original parks those drinks at
 * translate(±40px, 200px) rotate(∓11deg) before settling.
 */
export function ClosingCta() {
  const reduced = useReducedMotion();

  const drink = (side: "left" | "right") => ({
    initial: reduced
      ? false
      : {
          opacity: HIDDEN_OPACITY,
          x: side === "left" ? -40 : 40,
          y: 200,
          rotate: side === "left" ? 11 : -11,
        },
    whileInView: { opacity: 1, x: 0, y: 0, rotate: 0 },
  });

  return (
    <section className="grid-lines relative overflow-hidden bg-page py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
        {/* Geometry from the original at 1440: drinks at x117/x1060 on the
            section's top edge, headline slabs starting 114px below. */}
        <div className="relative flex flex-col items-center pt-16 text-center lg:pt-[114px]">
          <motion.div
            {...drink("left")}
            viewport={viewportOnce}
            transition={spring}
            className="pointer-events-none absolute top-[9px] left-[57px] hidden w-[273px] lg:block"
          >
            <Image
              src={closingCta.leftImage.src}
              alt={closingCta.leftImage.alt}
              width={460}
              height={720}
              className="h-auto w-full"
            />
          </motion.div>

          <motion.div
            {...drink("right")}
            viewport={viewportOnce}
            transition={spring}
            className="pointer-events-none absolute top-[12px] right-[72px] hidden w-[248px] lg:block"
          >
            <Image
              src={closingCta.rightImage.src}
              alt={closingCta.rightImage.alt}
              width={460}
              height={720}
              className="h-auto w-full"
            />
          </motion.div>

          <Reveal className="flex flex-col items-center">
            {/* Two slabs, each rotated ~1° in opposite directions and overlapping
                by roughly 13px — measured off the original. */}
            <h2 className="t-display flex flex-col items-center text-[36px] leading-[1.5] tracking-[-1px] text-cream sm:text-[48px] lg:text-[64px] lg:leading-[96px] lg:tracking-[-3px]">
              <span className="-rotate-[1deg] rounded-2xl bg-brown px-8 py-[8px]">
                {closingCta.lines[0]}
              </span>
              <span className="-mt-[13px] rotate-[1deg] rounded-2xl bg-rust px-8 py-[8px]">
                {closingCta.lines[1]}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-[90px] max-w-[500px] font-body text-[18px] leading-[27px] text-rust">
              {closingCta.body}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <PillButton
              href={closingCta.cta.href}
              label={closingCta.cta.label}
              className="mt-10"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
