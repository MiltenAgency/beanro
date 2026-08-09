"use client";

import { useState } from "react";

import { bookingForm } from "@/lib/content/reservation";
import { Reveal } from "@/components/motions/Reveal";

/** 46px tall, white, 8px radius — the control style used across the original form. */
const control =
  "mt-[10px] block h-[46px] w-full rounded-lg border-0 bg-white px-4 font-body text-[16px] text-brown outline-none ring-1 ring-transparent transition-shadow placeholder:text-rust/50 focus:ring-orange";

const label = "block font-body text-[16px] leading-[24px] font-bold text-rust uppercase";

/**
 * Booking form, 820px wide on the original with a full-width name row, paired
 * email/phone and date/time rows, and a full-width submit. It posts nowhere in
 * the original either, so this confirms inline rather than inventing a backend.
 */
export function BookingForm() {
  const [sent, setSent] = useState(false);
  const { fields, locations } = bookingForm;

  return (
    <Reveal distance={100}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mx-auto w-full max-w-[820px]"
      >
        <h2 className="t-display text-[28px] leading-[1.5] tracking-[-1px] text-brown sm:text-[36px] lg:text-[40px] lg:leading-[59px]">
          {bookingForm.heading}
        </h2>

        <div className="mt-[33px] flex flex-col gap-[35px]">
          <div>
            <label className={label} htmlFor="name">
              {fields.name}
            </label>
            <input id="name" name="name" required className={control} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="email">
                {fields.email}
              </label>
              <input id="email" name="email" type="email" required className={control} />
            </div>
            <div>
              <label className={label} htmlFor="phone">
                {fields.phone}
              </label>
              <input id="phone" name="phone" type="tel" className={control} />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="location">
              {fields.location}
            </label>
            <select id="location" name="location" required defaultValue="" className={control}>
              <option value="" disabled>
                {fields.locationPlaceholder}
              </option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="date">
                {fields.date}
              </label>
              <input id="date" name="date" type="date" className={control} />
            </div>
            <div>
              <label className={label} htmlFor="time">
                {fields.time}
              </label>
              <input id="time" name="time" type="time" className={control} />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="message">
              {fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              className={`${control} h-[160px] resize-none py-4`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="t-title mt-8 h-[60px] w-full rounded-full bg-orange text-[20px] leading-[24px] tracking-[-0.5px] text-brown uppercase transition-colors hover:bg-brown hover:text-cream"
        >
          {bookingForm.submitLabel}
        </button>

        {sent && (
          <p role="status" className="mt-6 font-body text-[16px] leading-[27px] text-rust">
            {bookingForm.successMessage}
          </p>
        )}
      </form>
    </Reveal>
  );
}
