import clsx from "clsx";
import { Reveal } from "@/components/motions/Reveal";

interface SectionHeadingProps {
  lines: string[];
  blurb?: string;
  /** Headline left, supporting copy right — the template's usual pairing. */
  split?: boolean;
  tone?: "brown" | "cream";
  className?: string;
}

export function SectionHeading({
  lines,
  blurb,
  split = true,
  tone = "brown",
  className,
}: SectionHeadingProps) {
  const color = tone === "brown" ? "text-brown" : "text-cream";

  return (
    <div
      className={clsx(
        "flex flex-col gap-6",
        split && blurb && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <Reveal>
        <h2
          className={clsx(
            "t-display text-[32px] leading-[1.5] tracking-[-1px] sm:text-[40px] lg:text-[48px] lg:tracking-[-2px]",
            color,
          )}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </Reveal>

      {blurb && (
        <Reveal delay={0.08}>
          <p className="max-w-[420px] font-body text-[16px] leading-[27.2px] font-medium text-rust uppercase">
            {blurb}
          </p>
        </Reveal>
      )}
    </div>
  );
}
