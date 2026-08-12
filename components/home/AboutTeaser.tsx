import Image from "next/image";

import { aboutTeaser } from "@/lib/content/home";
import { PillButton } from "@/components/Buttons";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Image left, pitch right — the block that hands off to the About page.
 * Columns are 684 / 565 in the original, not an even split.
 */
export function AboutTeaser() {
  return (
    <section className="grid-lines bg-page py-14 lg:pt-10 lg:pb-16">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-[684px_565px] lg:justify-between lg:gap-0 lg:pl-14 lg:pr-[60px]">
        <Reveal direction="right" distance={250}>
          <div className="aspect-[684/527] overflow-hidden rounded-[40px] lg:rounded-[60px]">
            <Image
              src={aboutTeaser.image.src}
              alt={aboutTeaser.image.alt}
              width={1350}
              height={1040}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal direction="left" distance={250}>
            <h2 className="t-display text-[32px] leading-[1.5] tracking-[-1px] text-brown sm:text-[40px] lg:text-[48px] lg:tracking-[-2px]">
              {aboutTeaser.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-[560px] font-body text-[18px] leading-[27px] text-rust">
              {aboutTeaser.body}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <PillButton
              href={aboutTeaser.cta.href}
              label={aboutTeaser.cta.label}
              className="mt-10"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
