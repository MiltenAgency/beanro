import clsx from "clsx";
import { Reveal } from "@/components/motions/Reveal";

interface PageHeroProps {
  eyebrow?: string;
  lines: string[];
  body?: string;
  className?: string;
}

/** The shared inner-page header: small orange eyebrow over a display headline. */
export function PageHero({ eyebrow, lines, body, className }: PageHeroProps) {
  return (
    <section className={clsx("grid-lines bg-page pt-16 pb-12 lg:pt-24 lg:pb-16", className)}>
      <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-[60px]">
        {eyebrow && (
          <Reveal distance={30}>
            <p className="t-title text-[20px] leading-[24px] tracking-[-0.5px] text-orange uppercase">
              {eyebrow}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <h1 className="t-display mx-auto mt-4 max-w-[1100px] text-[36px] leading-[1.5] tracking-[-1.5px] text-brown sm:text-[52px] lg:text-[70px] lg:tracking-[-4px]">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        {body && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-[640px] font-body text-[18px] leading-[27px] text-rust">
              {body}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
