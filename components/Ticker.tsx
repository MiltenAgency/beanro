"use client";

import { useReducedMotion } from "framer-motion";
import { ticker } from "@/lib/content/site";

/** The eight-point burst the original uses as the separator between words. */
function Burst() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden className="shrink-0">
      <path
        fill="currentColor"
        d="M14 0l2.4 6.2L22 3l-2.3 5.7L26 6.6l-4.6 4.3 6.6.5-6.2 2.6 6.2 2.6-6.6.5 4.6 4.3-6.3-2.1L22 25l-5.6-3.2L14 28l-2.4-6.2L6 25l2.3-5.7L2 21.4l4.6-4.3-6.6-.5L6.2 14 0 11.4l6.6-.5L2 6.6l6.3 2.1L6 3l5.6 3.2z"
      />
    </svg>
  );
}

export function Ticker() {
  const reduced = useReducedMotion();
  // Two identical runs sit side by side; translating the pair by -50% loops seamlessly.
  const run = [...ticker.words, ...ticker.words];

  return (
    <div className="overflow-hidden bg-orange py-10">
      <div
        className="flex w-max items-center gap-10"
        style={
          reduced
            ? undefined
            : { animation: "beanro-ticker 26s linear infinite" }
        }
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10" aria-hidden={copy === 1}>
            {run.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-10 text-cream">
                <span className="t-display text-[48px] leading-[72px] tracking-[-2px] whitespace-nowrap">
                  {word}
                </span>
                <span className="text-brown">
                  <Burst />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
