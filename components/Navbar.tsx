"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

import { nav, site } from "@/lib/content/site";
import { spring } from "@/lib/motion";
import { PillButton } from "@/components/Buttons";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styling based on whether header is transparent over the hero
  const isTransparent = isHome && !scrolled;
  const isDarkScrolled = isHome && scrolled;

  return (
    <header
      className={clsx(
        "z-50 transition-all duration-300",
        isHome ? "fixed inset-x-0 top-0" : "relative",
      )}
    >
      <nav
        className={clsx(
          "transition-colors duration-300",
          isTransparent && "bg-transparent border-b border-white/15",
          isDarkScrolled && "bg-forest/90 backdrop-blur-md border-b border-white/10 shadow-lg",
          !isHome && "bg-cream border-b border-brown/10",
        )}
      >
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-[60px]">
          {/* Navigation Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "t-eyebrow transition-colors",
                    isHome
                      ? "text-cream/90 hover:text-white drop-shadow-xs"
                      : "text-rust hover:text-orange",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered Brand Logo */}
          <Link href="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Image
              src={isHome ? "/assets/img/komorebi-white.svg" : site.logo}
              alt={site.name}
              width={250}
              height={40}
              className={clsx(
                "h-9 w-auto transition-opacity duration-300",
                isHome && "drop-shadow-sm",
              )}
              priority
            />
          </Link>

          {/* Action CTA Button */}
          <div className="hidden lg:block">
            {isHome ? (
              <Link
                href={nav.cta.href}
                className={clsx(
                  "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5",
                  "t-title text-[18px] leading-[22px] tracking-[-0.5px] uppercase transition-all duration-300",
                  "border border-white/30 bg-white/20 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-brown shadow-sm",
                )}
              >
                {nav.cta.label}
              </Link>
            ) : (
              <PillButton href={nav.cta.href} label={nav.cta.label} />
            )}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className={clsx("lg:hidden transition-colors", isHome ? "text-white" : "text-brown")}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
              <path
                d={menuOpen ? "M6 6l14 14M20 6L6 20" : "M4 8h18M4 13h18M4 18h18"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? undefined : { height: 0, opacity: 0 }}
              transition={spring}
              className={clsx(
                "overflow-hidden lg:hidden",
                isHome
                  ? "bg-forest/95 backdrop-blur-xl border-b border-white/10"
                  : "bg-cream border-b border-brown/10",
              )}
            >
              <ul className="flex flex-col gap-4 px-6 pb-6 pt-2">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "t-eyebrow block py-2 transition-colors",
                        isHome
                          ? "text-cream hover:text-white"
                          : "text-rust hover:text-orange",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <PillButton
                    href={nav.cta.href}
                    label={nav.cta.label}
                    tone={isHome ? "sand" : "orange"}
                  />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
