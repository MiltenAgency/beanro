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
      <div role="tablist" aria-label="Drink categories" className="flex flex-wrap gap-2">
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
                "rounded-full px-4 py-[10px] font-body text-[16px] leading-[27.2px] font-medium uppercase transition-colors",
                selected ? "bg-brown-soft text-peach" : "bg-sand text-brown-soft hover:bg-peach",
              )}
            >
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
