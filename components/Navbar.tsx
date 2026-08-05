"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

import { announcement, nav, site } from "@/lib/content/site";
import { spring } from "@/lib/motion";
import { PillButton } from "@/components/Buttons";

/** Static header — the original's nav scrolls away with the page. */
export function Navbar() {
  const [barOpen, setBarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <header className="relative z-50">
      <AnimatePresence initial={false}>
        {barOpen && (
          <motion.div
            key="announcement"
            initial={reduced ? false : { height: 0 }}
            animate={{ height: "auto" }}
            exit={reduced ? undefined : { height: 0 }}
            transition={spring}
            className="overflow-hidden bg-brown"
          >
            <div className="relative mx-auto flex max-w-[1440px] items-center justify-center px-12 py-2 lg:h-[47px] lg:py-0">
              <p className="flex flex-wrap items-center justify-center gap-x-2 text-center font-body text-[12px] leading-[18px] font-medium tracking-[0.01em] text-peach uppercase sm:text-[15px] lg:leading-normal">
                <Image src={site.bean} alt="" width={18} height={18} className="h-4 w-4 shrink-0" />
                <span>{announcement.text}</span>
                <Link href={announcement.linkHref} className="underline underline-offset-2">
                  {announcement.linkLabel}
                </Link>
              </p>
              <button
                type="button"
                onClick={() => setBarOpen(false)}
                aria-label="Dismiss announcement"
                className="absolute top-1/2 right-6 -translate-y-1/2 text-peach transition-opacity hover:opacity-70"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="bg-cream">
        <div className="mx-auto flex h-[96px] max-w-[1440px] items-center justify-between px-6 lg:px-[60px]">
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="t-eyebrow text-rust transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Image
              src={site.logo}
              alt={site.name}
              width={171}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:block">
            <PillButton href={nav.cta.href} label={nav.cta.label} />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="text-brown lg:hidden"
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

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? undefined : { height: 0, opacity: 0 }}
              transition={spring}
              className="overflow-hidden bg-cream lg:hidden"
            >
              <ul className={clsx("flex flex-col gap-4 px-6 pb-6")}>
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="t-eyebrow text-rust"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <PillButton href={nav.cta.href} label={nav.cta.label} className="w-full" />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
