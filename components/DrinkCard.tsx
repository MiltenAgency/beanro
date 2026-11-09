import Image from "next/image";

import type { Drink } from "@/lib/content/menu";
import { buyLabel } from "@/lib/content/menu";
import { ArrowLink } from "@/components/Buttons";

/** Star glyph used for the rating chip, matching the original's solid mark. */
function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="text-orange">
      <path
        fill="currentColor"
        d="M7 0l1.9 4.3L13.6 5l-3.5 3.2.9 4.8L7 10.7 2.9 13l.9-4.8L.4 5l4.7-.7z"
      />
    </svg>
  );
}

export function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <article className="flex h-full flex-col rounded-[24px] bg-sand p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-end gap-1.5">
        <span className="t-title text-[20px] leading-[24px] tracking-[-0.5px] text-brown">
          {drink.rating}
        </span>
        <Star />
      </div>

      {/* 352px tall in the original, which is what makes the card 539 overall. */}
      <div className="relative my-4 h-[300px] w-full lg:h-[352px]">
        <Image
          src={drink.image}
          alt={drink.alt}
          fill
          sizes="(min-width: 1024px) 336px, 60vw"
          className="object-contain hue-rotate-[95deg] saturate-110 transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h4 className="t-title text-center text-[32px] leading-[35.2px] text-brown uppercase">
        {drink.name}
      </h4>

      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="t-title text-[20px] leading-[24px] tracking-[-0.5px] text-brown">
          {drink.price}
        </span>
        <ArrowLink href="/reservation" label={buyLabel} />
      </div>
    </article>
  );
}
