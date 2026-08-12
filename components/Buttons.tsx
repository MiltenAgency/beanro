"use client";

import Link from "next/link";
import clsx from "clsx";

interface PillButtonProps {
  href: string;
  label: string;
  tone?: "orange" | "brown" | "sand";
  className?: string;
}

/**
 * The template's primary button: an orange pill with a thin brown bar parked at
 * the bottom that grows to fill the button on hover, flipping the label to cream.
 */
export function PillButton({ href, label, tone = "orange", className }: PillButtonProps) {
  const base = {
    orange: "bg-orange text-brown",
    brown: "bg-brown-soft text-cream",
    sand: "bg-sand text-brown",
  }[tone];

  const fill = tone === "orange" ? "bg-brown" : "bg-orange";

  return (
    <Link
      href={href}
      className={clsx(
        "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-[18px]",
        "t-title text-[20px] leading-[24px] tracking-[-0.5px] uppercase transition-colors duration-300",
        base,
        tone === "orange" && "hover:text-cream",
        className,
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "absolute inset-x-0 bottom-0 -z-10 h-0 rounded-full transition-[height] duration-300 ease-out",
          "group-hover:h-full",
          fill,
        )}
      />
      {label}
    </Link>
  );
}

/** Inline text link with a trailing arrow, used on menu cards. */
export function ArrowLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group/arrow t-title inline-flex items-center gap-2 text-[20px] leading-[24px] tracking-[-0.5px] text-orange uppercase",
        className,
      )}
    >
      {label}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        className="transition-transform duration-300 group-hover/arrow:translate-x-1"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
