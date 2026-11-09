"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

import { menu } from "@/lib/content/menu";
import { spring } from "@/lib/motion";
import { DrinkCard } from "@/components/DrinkCard";

/** Home page's filtered drink grid: pill tabs over a swapping card grid. */
export function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  const reduced = useReducedMotion();
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <div>
      <div role="tablist" aria-label="Drink categories" className="flex flex-wrap gap-3">
        {menu.map((c) => {
          const selected = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c.id)}
              className={clsx(
                "relative flex items-center gap-2.5 rounded-full px-5 py-2.5 font-body text-[15px] font-semibold uppercase tracking-wider transition-all duration-200",
                selected
                  ? "bg-brown text-cream shadow-md ring-2 ring-orange/60"
                  : "border border-brown/15 bg-sand text-brown hover:border-orange/40 hover:bg-cream",
              )}
            >
              {selected && (
                <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
              )}
              {c.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -12 }}
          transition={spring}
          role="tabpanel"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {category.items.map((drink) => (
            <DrinkCard key={drink.name} drink={drink} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
