/** Home page copy and imagery, mined verbatim from the export. */

export const hero = {
  lines: ["freshly Brewed", "Moments Start Here"],
  splash: { src: "/assets/img/546acdf3090be173.webp", alt: "Dynamic brown liquid splash" },
  cup: { src: "/assets/img/95bd23851b4c364f.webp", alt: "Iced latte with bamboo straw" },
};

/**
 * The statement headline runs image chips inline with the words, so it is
 * stored as an ordered run of text and image tokens rather than a string.
 */
export const statement = {
  eyebrow: "about beanro",
  run: [
    { type: "text" as const, value: "At Beanro, we believe coffee" },
    {
      type: "image" as const,
      src: "/assets/img/95bd23851b4c364f.webp",
      alt: "Iced latte with bamboo straw",
      shape: "pill" as const,
    },
    { type: "text" as const, value: "is more than a drink — it’s an experience. sourcing" },
    {
      type: "image" as const,
      src: "/assets/img/0798aab18aa2680b.webp",
      alt: "Single roasted coffee bean",
      shape: "round" as const,
    },
    { type: "text" as const, value: "premium beans to perfecting each brew" },
  ],
};

export const brewsSection = {
  lines: ["Explore Our", "Signature Brews"],
  blurb: "A selection of favorites crafted to delight every coffee lover.",
};

export const standard = {
  lines: ["A New Standard For", "premium Coffee"],
  leftLabel: ["Smooth", "cold brew"],
  rightLabel: ["Balanced", "sweetness"],
  video: "/assets/video/v4aErQGkJo2Q26RGPB8Mac4c.mp4",
  body: "At Beanro, cold coffee is more than just iced espresso — it’s a carefully layered experience. From slow-brewed coffee bases to rich cream finishes, every element is designed to create balance, depth, and smoothness in every cup.",
};

/** The brown panel: stacked headline with a word that swaps, plus floating pills. */
export const stirBlock = {
  lineOne: "STIR UP YOUR DAILY",
  lineTwo: "ROUTINE AND",
  /** These two alternate in place; the original renders them in different faces. */
  swap: [
    { text: "CHILL UP", font: "display" as const },
    { text: "LIGHT UP", font: "alt" as const },
  ],
  lineThree: "WITH EVERY SIP OF RICH,",
  lineFour: "CREAMY COFFEE",
  body: "Designed to refresh your mood, elevate your taste, and turn every coffee break into something worth remembering.",
  /** Percentages measured off the original's 1320×913 panel. */
  tags: [
    { label: "Bold Flavor", tone: "yellow" as const, rotate: -5, top: "5.8%", left: "46%" },
    { label: "Premium Beans", tone: "forest" as const, rotate: -8, top: "45.6%", left: "10.7%" },
    { label: "Creamy Texture", tone: "orange" as const, rotate: 8, top: "44.5%", left: "76%" },
    { label: "Freshly Roasted", tone: "peach" as const, rotate: -6, top: "69%", left: "44.5%" },
  ],
};

export const features = [
  {
    number: "01",
    title: ["Quality Without", "Compromise"],
    body: "We carefully select our beans and refine every step of the process to ensure each cup delivers.",
  },
  {
    number: "02",
    title: ["Craft In", "Every Detail"],
    body: "From slow brewing to creamy finishes, we focus on precision and care to create coffee that feels rich.",
  },
  {
    number: "03",
    title: ["All the Moments", "That Matter"],
    body: "Beanro is more than coffee — it’s about creating space to pause, connect, and enjoy moments in your day.",
  },
];

export const aboutTeaser = {
  image: {
    src: "/assets/img/cd8a32f6a33d8d2c.webp",
    alt: "Modern industrial cafe interior design",
  },
  lines: ["Crafted For Your", "Perfect Coffee", "Moment with us"],
  body: "At Beanro, every cup is thoughtfully crafted to deliver more than just coffee. We combine slow-brewed richness with velvety cream to create a balanced, refreshing experience.",
  cta: { label: "Learn more about us", href: "/about" },
};
