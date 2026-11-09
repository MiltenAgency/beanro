import type { Metadata } from "next";

import { menu, menuHero } from "@/lib/content/menu";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { DrinkCard } from "@/components/DrinkCard";
import { ClosingCta } from "@/components/ClosingCta";
import { Reveal } from "@/components/motions/Reveal";

export const metadata: Metadata = {
  title: "Offerings",
  description: "Ceremonial matchas, cold-drip infusions and roasted hojicha from Komorebi Teahouse.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow={menuHero.eyebrow} lines={menuHero.lines} />

      <div className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-20 px-6 lg:px-[60px]">
          {menu.map((category) => (
            <section key={category.id} className="rounded-[32px] bg-cream px-6 py-16 lg:px-[60px] lg:py-20">
              <SectionHeading lines={[category.heading]} blurb={category.blurb} />

              <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((drink, i) => (
                  <Reveal key={drink.name} as="li" delay={i * 0.06} distance={100}>
                    <DrinkCard drink={drink} />
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <ClosingCta />
    </>
  );
}
