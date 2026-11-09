import Image from "next/image";
import clsx from "clsx";

import { statement } from "@/lib/content/home";
import { Reveal } from "@/components/motions/Reveal";

/**
 * Large brand statement whose sentence has image chips set inline with the
 * words — a pill-cropped drink and a round coffee bean.
 */
export function Statement() {
  return (
    <section className="grid-lines bg-page py-20 lg:pt-28 lg:pb-[170px]">
      <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-[60px]">
        <Reveal distance={30}>
          <p className="t-title text-[20px] leading-[24px] tracking-[-0.5px] text-orange uppercase">
            {statement.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="t-display mx-auto mt-8 max-w-[1145px] text-[26px] leading-[1.5] tracking-[-1px] text-brown sm:text-[36px] lg:text-[48px] lg:leading-[72px] lg:tracking-[-2px]">
            {statement.run.map((token, i) =>
              token.type === "text" ? (
                <span key={i}>{token.value} </span>
              ) : (
                <span
                  key={i}
                  className={
                    token.shape === "pill"
                      ? "mx-2 inline-block h-[1.6em] w-[1.05em] translate-y-[0.4em] overflow-hidden rounded-[14px] bg-cream align-baseline lg:h-[2.52em] lg:w-[1.65em] lg:translate-y-[0.72em] lg:rounded-[20px]"
                      : "mx-2 inline-block h-[0.9em] w-[1.1em] translate-y-[0.14em] align-baseline lg:h-[1.25em] lg:w-[1.54em] lg:translate-y-[0.22em]"
                  }
                >
                  <Image
                    src={token.src}
                    alt={token.alt}
                    width={token.shape === "pill" ? 320 : 380}
                    height={token.shape === "pill" ? 488 : 294}
                    className="h-full w-full object-cover"
                  />
                </span>
              ),
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
