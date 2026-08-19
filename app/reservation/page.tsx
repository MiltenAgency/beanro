import type { Metadata } from "next";

import { reservationHero } from "@/lib/content/reservation";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Reservation",
  description: "Reserve a table at Beanro.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHero eyebrow={reservationHero.eyebrow} lines={reservationHero.lines} />

      <section className="grid-lines bg-page pb-20 lg:pt-24 lg:pb-[280px]">
        <div className="mx-auto max-w-[940px] px-6">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
