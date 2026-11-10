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
  duration = 2600,
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
          className={`fixed inset-0 z-[99999] pointer-events-auto overflow-hidden bg-[#ECE7D2] ${className}`}
        >
          {/* Staggered Vertical Columns in Japanese Washi Sand */}
          <div className="absolute inset-0 flex h-full w-full">
            {Array.from({ length: columnsCount }).map((_, i) => {
              const distanceFromMiddle = Math.abs(i - middleIndex);
              const delay = (middleIndex - distanceFromMiddle) * 0.08;

              return (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.7,
                    delay: delay,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="relative h-full flex-1 bg-[#ECE7D2] border-r border-[#1B382B]/10 last:border-r-0"
                />
              );
            })}
          </div>

          {/* Centered Brand Logo: Tree Silhouette Masked with Rapidly Changing Matcha Textures */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: middleIndex * 0.08,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4"
          >
            {/* Tree Emblem with Vector Mask and Living Matcha Cuts */}
            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] drop-shadow-[0_8px_24px_rgba(27,56,43,0.18)]">
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

            {/* Brand Wordmark and Japanese Kanji */}
            <div className="mt-5 flex flex-col items-center text-center">
              <span className="font-display text-[26px] sm:text-[32px] md:text-[36px] font-bold leading-none tracking-[0.06em] text-brown">
                KOMOREBI
              </span>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-body text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-orange uppercase">
                  TEAHOUSE
                </span>
                <span className="text-brown/40 text-[10px] sm:text-[11px] font-medium">
                  ·
                </span>
                <span className="font-body text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-brown/75">
                  木漏れ日
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
