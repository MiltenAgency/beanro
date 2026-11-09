/** Site-wide chrome: announcement bar, nav, ticker, footer, closing CTA. */

export const site = {
  name: "Komorebi",
  title: "Komorebi Teahouse — Artisan Japanese Tea & Ceremonial Matcha",
  description:
    "An artisan Japanese tea lounge and ceremonial matcha sanctuary showcasing first-harvest Uji tencha, traditional bamboo chasen whisking, and tranquil tatami tea pavilions.",
  logo: "/assets/img/komorebi-logo.svg",
  bean: "/assets/img/tea-leaf.svg",
};

export const announcement = {
  text: "First-harvest spring Uji tencha has arrived at all tea sanctuaries —",
  linkLabel: "Explore The Tea Menu",
  linkHref: "/menu",
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Tea Journal", href: "/blog" },
    { label: "Menu", href: "/menu" },
  ],
  cta: { label: "Reserve Table", href: "/reservation" },
};

export const ticker = {
  words: [
    "Ceremonial Matcha",
    "Hand-Whisked Daily",
    "First-Harvest Uji",
    "Slow-Drip Gyokuro",
    "Tranquil Stillness",
  ],
};

export const closingCta = {
  lines: ["Find Stillness In", "Every Whisked Bowl"],
  body: "Every day deserves a quiet pause — an invitation to slow down, breathe, and experience ceremonial Japanese tea prepared with profound mindfulness.",
  cta: { label: "Reserve A Tatami Table", href: "/reservation" },
  leftImage: {
    src: "/assets/img/matcha/hero-iced-matcha.jpg",
    alt: "Chilled iced ceremonial matcha latte with organic cream",
  },
  rightImage: {
    src: "/assets/img/matcha/koicha-bowl.jpg",
    alt: "Handcrafted ceremonial matcha chawan bowl",
  },
};

/** Oversized wordmark that closes the page. */
export const footerMark = "/assets/img/komorebi-footer-mark.svg";

export const footer = {
  tagline: "Honoring the tranquil ritual of Japanese tea in every bowl",
  logoAlt: "Komorebi Teahouse",
  columns: {
    pages: [
      { label: "About", href: "/about" },
      { label: "Tea Journal", href: "/blog" },
      { label: "Menu", href: "/menu" },
      { label: "Sanctuaries", href: "/location" },
      { label: "Reservation", href: "/reservation" },
      { label: "404", href: "/404" },
    ],
    contact: {
      heading: "Sanctuary Inquiries",
      email: "sanctuary@komorebitea.com",
      phone: "+1 (310) 844-9271",
      placeName: "Komorebi Kyoto Sanctuary",
      address: ["82 Yasaka-dori, Higashiyama-ku", "Kyoto 605-0862", "Japan"],
    },
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Substack", href: "https://substack.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
  },
  copyright: "© 2026 Komorebi Teahouse. All rights reserved.",
  privacy: { label: "Privacy Policy", href: "/legal-page/privacy-policy" },
  backToTop: "Return to Top",
};
