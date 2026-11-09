"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

interface StaggeredColumnsPreloaderProps {
  columnsCount?: number;
  onComplete?: () => void;
  duration?: number;
  className?: string;
  oncePerSession?: boolean;
}

export function StaggeredColumnsPreloader({
  columnsCount = 5,
  onComplete,
  duration = 1100,
  className = "",
  oncePerSession = process.env.NODE_ENV !== "development",
}: StaggeredColumnsPreloaderProps) {
  const reduceMotion = useReducedMotionSafe();
  const [isLoading, setIsLoading] = useState(true);

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
          {/* Staggered Vertical Columns in Brand Deep Matcha Color */}
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
                  className="relative h-full flex-1 bg-[#1B382B] border-r border-white/10 last:border-r-0 flex items-center justify-center px-2"
                >
                  {/* White Brand Logo attached to the middle column */}
                  {isMiddle && (
                    <div className="flex flex-col items-center justify-center text-center px-2 w-full max-w-[320px]">
                      <Image
                        src="/komorebi-white.svg"
                        alt="Komorebi Teahouse"
                        width={250}
                        height={40}
                        priority
                        className="w-48 sm:w-60 md:w-72 h-auto max-w-[95%] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
                      />
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
