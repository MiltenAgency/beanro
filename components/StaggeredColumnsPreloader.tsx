"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

interface StaggeredColumnsPreloaderProps {
  columnsCount?: number;
  onComplete?: () => void;
  duration?: number;
  className?: string;
  oncePerSession?: boolean;
}

const MATCHA_FRAMES = [
  "/assets/img/matcha/tree-frame-1.webp",
  "/assets/img/matcha/tree-frame-2.webp",
  "/assets/img/matcha/tree-frame-3.webp",
  "/assets/img/matcha/tree-frame-4.webp",
  "/assets/img/matcha/tree-frame-5.webp",
  "/assets/img/matcha/tree-frame-6.webp",
];

export function StaggeredColumnsPreloader({
  columnsCount = 5,
  onComplete,
  duration = 2200,
  className = "",
  oncePerSession = process.env.NODE_ENV !== "development",
}: StaggeredColumnsPreloaderProps) {
  const reduceMotion = useReducedMotionSafe();
  const [isLoading, setIsLoading] = useState(true);
  const [activeFrame, setActiveFrame] = useState(0);

  // Rapid stop-motion cutting rhythm (~220ms per frame, matching the reference video style)
  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % MATCHA_FRAMES.length);
    }, 220);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  useEffect(() => {
    const isBot =
      typeof navigator !== "undefined" &&
      /Lighthouse|Googlebot|PageSpeed|Chrome-Lighthouse/i.test(navigator.userAgent);

    const hasSeenIntro =
      typeof sessionStorage !== "undefined" &&
      Boolean(sessionStorage.getItem("komorebi_seen_intro"));

    const shouldSkip = reduceMotion || isBot || (oncePerSession && hasSeenIntro);

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, shouldSkip ? 0 : duration);

    if (!shouldSkip) {
      try {
        sessionStorage.setItem("komorebi_seen_intro", "1");
      } catch {
        // Ignore quota/private mode errors
      }
    }

    return () => clearTimeout(timer);
  }, [duration, onComplete, reduceMotion, oncePerSession]);

  if (reduceMotion) return null;

  const middleIndex = Math.floor(columnsCount / 2);

  return (
    <AnimatePresence>
      {isLoading && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[99999] pointer-events-auto overflow-hidden ${className}`}
        >
          {/* Staggered Vertical Columns in Brand Deep Forest Matcha (milten behavior) */}
          <div className="flex h-full w-full">
            {Array.from({ length: columnsCount }).map((_, i) => {
              const isMiddle = i === middleIndex;
              // Calculate delay so outer columns exit first, and the middle column exits LAST
              const distanceFromMiddle = Math.abs(i - middleIndex);
              const delay = (middleIndex - distanceFromMiddle) * 0.1;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.6,
                    delay: delay,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`relative h-full flex-1 bg-[#1B382B] border-r border-white/10 last:border-r-0 flex items-center justify-center px-2 ${
                    isMiddle ? "z-10 overflow-visible" : "z-0"
                  }`}
                >
                  {/* Brand Logo attached directly inside the middle column (milten behavior) */}
                  {isMiddle && (
                    <div className="flex flex-col items-center justify-center text-center select-none pointer-events-none w-[144px] sm:w-[176px] md:w-[208px] shrink-0">
                      {/* Tree Emblem with Vector Mask and Living Matcha Cuts (20% smaller) */}
                      <div className="relative w-[144px] h-[144px] sm:w-[176px] sm:h-[176px] md:w-[208px] md:h-[208px] drop-shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                        <svg
                          viewBox="0 0 380 380"
                          className="w-full h-full select-none"
                          aria-label="Komorebi Botanical Tree Emblem"
                          role="img"
                        >
                          <defs>
                            <mask
                              id="tree-matcha-mask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="380"
                              height="380"
                            >
                              <image
                                href="/assets/img/tree-mark-white.png"
                                x="0"
                                y="0"
                                width="380"
                                height="380"
                                preserveAspectRatio="xMidYMid meet"
                              />
                            </mask>
                          </defs>
                          {/* Subtle luminous white silhouette backlight for tree branches on dark background */}
                          <image
                            href="/assets/img/tree-mark-white.png"
                            x="0"
                            y="0"
                            width="380"
                            height="380"
                            preserveAspectRatio="xMidYMid meet"
                            opacity={0.18}
                          />
                          <g mask="url(#tree-matcha-mask)">
                            {MATCHA_FRAMES.map((src, index) => (
                              <image
                                key={src}
                                href={src}
                                x="0"
                                y="0"
                                width="380"
                                height="380"
                                preserveAspectRatio="xMidYMid slice"
                                opacity={index === activeFrame ? 1 : 0}
                              />
                            ))}
                          </g>
                        </svg>
                      </div>

                      {/* Brand Wordmark and Japanese Kanji (20% smaller) */}
                      <div className="mt-3 sm:mt-4 flex flex-col items-center text-center">
                        <span className="font-display text-[21px] sm:text-[26px] md:text-[29px] font-bold leading-none tracking-[0.06em] text-[#F5FBED] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                          KOMOREBI
                        </span>
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <span className="font-body text-[8px] sm:text-[9px] font-bold tracking-[0.24em] text-[#EEC585] uppercase">
                            TEAHOUSE
                          </span>
                          <span className="text-white/40 text-[8px] sm:text-[9px] font-medium">
                            ·
                          </span>
                          <span className="font-body text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] text-[#F5FBED]/85">
                            木漏れ日
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
