/** Reservation page and its booking form. */

export const reservationHero = {
  eyebrow: "reservation",
  lines: ["Reserve Your", "Coffee Moment"],
};

export const bookingForm = {
  heading: "Book Your Table",
  submitLabel: "Book a table now",
  fields: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    /**
     * The export labels this control "Services *" but gives it the placeholder
     * "Select Location" and four dental-practice options left over from the
     * template it was branched from. Relabelled and repointed at the three
     * cafés — see PRODUCT.md → Deviations.
     */
    location: "Location *",
    locationPlaceholder: "Select Location",
    date: "Date",
    time: "Time",
    message: "Your Message",
  },
  locations: ["Beanro Melrose, LA", "Pasta Pronto, Ny", "Beanro Santa Monica"],
  successMessage: "Thanks — we’ll confirm your table by email shortly.",
};
