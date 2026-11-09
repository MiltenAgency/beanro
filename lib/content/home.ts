/** Home page copy and imagery for Komorebi Teahouse. */

export const hero = {
  lines: ["Mindful Moments", "Whisked To Life"],
  splash: { src: "/assets/img/matcha/matcha-splash.png", alt: "Vibrant ceremonial green matcha liquid splash" },
  cup: { src: "/assets/img/matcha/matcha-latte-glass.png", alt: "Chilled ceremonial matcha latte with bamboo straw" },
};

/**
 * The statement headline runs image chips inline with the words, so it is
 * stored as an ordered run of text and image tokens rather than a string.
 */
export const statement = {
  eyebrow: "the art of komorebi",
  run: [
    { type: "text" as const, value: "At Komorebi, we believe tea" },
    {
      type: "image" as const,
      src: "/assets/img/matcha/hero-iced-matcha.png",
      alt: "Chilled ceremonial matcha latte with bamboo straw",
      shape: "pill" as const,
    },
    { type: "text" as const, value: "is more than a drink — it’s a sacred ritual. Sourcing" },
    {
      type: "image" as const,
      src: "/assets/img/matcha/chawan-bowl.png",
      alt: "Freshly whisked ceremonial matcha bowl",
      shape: "round" as const,
    },
    { type: "text" as const, value: "first-harvest tencha from Uji to honoring every whisk" },
  ],
};

export const brewsSection = {
  lines: ["Explore Our", "Artisan Tea Offerings"],
  blurb: "Hand-whisked ceremonial matchas, cold-drip infusions, and slow-roasted hojicha.",
};

export const standard = {
  lines: ["A Sacred Standard For", "Ceremonial Matcha"],
  leftLabel: ["Shade-Grown", "First Harvest"],
  rightLabel: ["Stone-Ground", "Pure Umami"],
  video: "/assets/video/v4aErQGkJo2Q26RGPB8Mac4c.mp4",
  body: "At Komorebi, matcha is never hurried. Shade-grown under traditional straw reed canopies for twenty-one days in Uji, each tender leaf develops deep chlorophyll, soothing theanine, and profound umami before being slowly stone-ground into vibrant emerald silk.",
};

/** The dark matcha panel: stacked headline with a word that swaps, plus floating pills. */
export const stirBlock = {
  lineOne: "FIND STILLNESS IN YOUR",
  lineTwo: "DAILY RITUAL AND",
  /** These two alternate in place; the original renders them in different faces. */
  swap: [
    { text: "SLOW DOWN", font: "display" as const },
    { text: "WAKE UP", font: "alt" as const },
  ],
  lineThree: "WITH EVERY BOWL OF PURE,",
  lineFour: "CEREMONIAL MATCHA",
  body: "Crafted to awaken clarity, quiet the noise, and turn each daily pause into an intentional moment of serene beauty.",
  /** Percentages measured off the original's 1320×913 panel. */
  tags: [
    { label: "Daily Matcha Ritual", tone: "yellow" as const, rotate: -5, top: "5.8%", left: "46%" },
    { label: "Single-Estate Uji", tone: "forest" as const, rotate: -8, top: "45.6%", left: "10.7%" },
    { label: "Ceremonial Grade", tone: "orange" as const, rotate: 8, top: "44.5%", left: "76%" },
    { label: "Mindful Living", tone: "peach" as const, rotate: -6, top: "69%", left: "44.5%" },
  ],
};

export const features = [
  {
    number: "01",
    title: ["First-Harvest", "Uji Tencha"],
    body: "We source exclusively from heritage micro-estates across the mist-shrouded hills of Kyoto, selecting pristine spring tea buds.",
  },
  {
    number: "02",
    title: ["Takayama Bamboo", "Chasen Craft"],
    body: "Every ceremonial bowl is hand-whisked to order with 80-prong bamboo whisks, producing an airy, emerald micro-foam.",
  },
  {
    number: "03",
    title: ["Sanctuaries of", "Calm & Presence"],
    body: "Komorebi teahouses are tranquil architecture of cedar, washi paper, and tatami, inviting you to disconnect and savor peace.",
  },
];

export const aboutTeaser = {
  image: {
    src: "/assets/img/cd8a32f6a33d8d2c.webp",
    alt: "Minimalist Japanese tatami tea sanctuary interior",
  },
  lines: ["Crafted For Your", "Serene Tea", "Ritual with us"],
  body: "At Komorebi, every bowl is thoughtfully prepared to deliver more than refreshment. We harmonize century-old tea philosophy with contemporary comfort to create a grounded, contemplative experience.",
  cta: { label: "Learn more about our heritage", href: "/about" },
};
