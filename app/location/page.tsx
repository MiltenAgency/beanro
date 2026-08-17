import type { Metadata } from "next";
import Image from "next/image";

import { cafes, directionsLabel, hoursLabel, locationHero } from "@/lib/content/locations";
import { PageHero } from "@/components/PageHero";
import { PillButton } from "@/components/Buttons";
import { ClosingCta } from "@/components/ClosingCta";
import { Reveal } from "@/components/motions/Reveal";

export const metadata: Metadata = {
  title: "Location",
  description: "Visit Beanro in Los Angeles, New York and Santa Monica.",
};

function Stars() {
  return (
    <div className="flex gap-1.5" aria-label="Five out of five">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 14 14" aria-hidden className="text-orange">
          <path
            fill="currentColor"
            d="M7 0l1.9 4.3L13.6 5l-3.5 3.2.9 4.8L7 10.7 2.9 13l.9-4.8L.4 5l4.7-.7z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function LocationPage() {
  return (
    <>
      <PageHero eyebrow={locationHero.eyebrow} lines={locationHero.lines} />

      {/* Each café is a 1320×602 cream card: 570px image left, 500px column right. */}
      <div className="grid-lines bg-page pb-20 lg:pb-28">
        <ul className="mx-auto flex max-w-[1440px] flex-col gap-[60px] px-6 lg:px-[60px]">
          {cafes.map((cafe, i) => (
            <Reveal key={cafe.name} as="li" delay={i * 0.05} distance={100}>
              <div className="grid gap-8 rounded-[32px] bg-cream p-6 lg:grid-cols-[570px_1fr] lg:gap-[93px] lg:p-10">
                <div className="aspect-[570/522] overflow-hidden rounded-3xl">
                  <Image
                    src={cafe.image}
                    alt={cafe.alt}
                    width={1140}
                    height={1044}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col lg:max-w-[500px]">
                  <h2 className="t-title text-[36px] leading-[59px] text-brown uppercase lg:text-[44px]">
                    {cafe.name}
                  </h2>

                  <p className="mt-[17px] font-body text-[18px] leading-[27px] text-rust">
                    {cafe.blurb}
                  </p>

                  <p className="t-eyebrow mt-[40px] text-brown">{hoursLabel}</p>
                  <p className="mt-[9px] font-body text-[18px] leading-[27px] text-rust">
                    {cafe.hours.weekday}
                  </p>
                  <p className="font-body text-[18px] leading-[27px] text-rust">
                    {cafe.hours.weekend}
                  </p>

                  <div className="mt-[40px] flex items-center gap-6">
                    <p className="t-eyebrow text-brown">{cafe.reviews}</p>
                    <Stars />
                  </div>

                  <div className="mt-auto flex flex-col gap-6 pt-14 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-[200px] font-body text-[18px] leading-[27px] text-rust">
                      {cafe.address}
                    </p>
                    <PillButton
                      href={`https://maps.google.com/?q=${encodeURIComponent(cafe.address)}`}
                      label={directionsLabel}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <ClosingCta />
    </>
  );
}
