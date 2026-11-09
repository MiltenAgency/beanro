"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

import { nav, site } from "@/lib/content/site";
import { spring } from "@/lib/motion";
import { PillButton } from "@/components/Buttons";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <header className="relative z-50">
      <nav className="bg-cream border-b border-brown/10">
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-[60px]">
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
              width={220}
              height={36}
              className="h-9 w-auto"
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
                      className="t-eyebrow block py-2 text-rust transition-colors hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <PillButton href={nav.cta.href} label={nav.cta.label} />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
