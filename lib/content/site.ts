/** Site-wide chrome: announcement bar, nav, ticker, footer, closing CTA. */

export const site = {
  name: "Beanro",
  title: "Beanro — Coffee Shop Template",
  description:
    "Beanro is a modern coffee shop Framer template crafted for cafés, roasteries, and specialty coffee brands. Showcase your menu, locations, blog, and reservations with a clean design, smooth experience, and fully responsive layout.",
  logo: "/assets/img/8c1303806b4712d5.svg",
  bean: "/assets/img/d42ca86d7a9257da.webp",
};

export const announcement = {
  text: "Experience the perfect balance of flavor, warmth, and comfort in every sip —",
  linkLabel: "Explore Our Menu",
  linkHref: "/menu",
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Menu", href: "/menu" },
  ],
  cta: { label: "Order Now", href: "/reservation" },
};

export const ticker = {
  words: ["Brew Bold", "Chill Smooth", "Crafted Cold", "Sip Slow"],
};

export const closingCta = {
  lines: ["Make Your Coffee", "Moment special"],
  body: "Every day deserves a better cup of coffee — one that feels refreshing, indulgent, and made with intention.",
  cta: { label: "Order Now", href: "/reservation" },
  leftImage: {
    src: "/assets/img/888c98470444b130.webp",
    alt: "Iced caramel coffee with cream",
  },
  rightImage: {
    src: "/assets/img/2bca6252debadb19.webp",
    alt: "Frappe topped with whipped cream",
  },
};

/** Oversized wordmark that closes the page. */
export const footerMark = "/assets/img/55bf36b11c0a85a5.webp";

export const footer = {
  tagline: "Make every coffee moment feel intentional",
  logoAlt: "Beanro CAFF",
  columns: {
    pages: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Menu", href: "/menu" },
      { label: "Location", href: "/location" },
      { label: "Reservation", href: "/reservation" },
      { label: "404", href: "/404" },
    ],
    contact: {
      heading: "Contact",
      email: "hello@beanro.com",
      phone: "+880 1234 567 890",
      placeName: "Beanro Coffee",
      address: ["1258 Melrose Ave Los", "Angeles, CA 90046", "United States"],
    },
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
  },
  copyright: "© 2026 Beanro. All rights reserved.",
  privacy: { label: "Privacy Policy", href: "/legal-page/privacy-policy" },
  backToTop: "Back to top",
};
