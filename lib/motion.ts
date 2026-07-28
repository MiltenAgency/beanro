import type { Transition } from "framer-motion";

/**
 * The signature spring. Read verbatim out of the export's
 * `<script type="framer/appear">` payload — every appear animation in the
 * original template uses these numbers.
 */
export const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 30,
  mass: 1,
};

/** Framer's appear animations start at 0.001, not 0 — it keeps text hinting stable. */
export const HIDDEN_OPACITY = 0.001;

export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Distances the original uses for its scroll-in offsets. */
export const OFFSET = {
  short: 50,
  medium: 60,
  tall: 100,
  side: 250,
} as const;
