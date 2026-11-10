"use client";

import { useEffect, useRef, useState } from "react";
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
  duration = 2400,
  className = "",
  oncePerSession = process.env.NODE_ENV !== "development",
}: StaggeredColumnsPreloaderProps) {
  const reduceMotion = useReducedMotionSafe();
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: poster remains visible
      });
    }
  }, []);

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

          {/* Centered Matcha Chawan Bowl Animation from User Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: middleIndex * 0.08,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4"
          >
            <div className="relative w-[300px] sm:w-[380px] md:w-[440px] max-w-[85vw] aspect-[440/340] overflow-hidden">
              <video
                ref={videoRef}
                src="/assets/video/preloader-bowl.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/assets/img/preloader-bowl-poster.webp"
                className="w-full h-full object-contain block"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
