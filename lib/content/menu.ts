/** Drink catalogue for Komorebi Teahouse. Authentic ceremonial matchas, cold-drip teas, and roasted hojicha. */

export interface Drink {
  name: string;
  price: string;
  rating: string;
  image: string;
  alt: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  heading: string;
  blurb: string;
  items: Drink[];
}

export const menu: MenuCategory[] = [
  {
    id: "ceremonial-matcha",
    label: "Ceremonial Matcha",
    heading: "Single-Estate Ceremonial Matcha",
    blurb: "Hand-whisked first-harvest tencha from the misted hills of Uji, Kyoto.",
    items: [
      {
        name: "Uji Horizon Koicha",
        price: "$8.50",
        rating: "4.9",
        image: "/assets/img/matcha/chawan-bowl.png",
        alt: "Uji Horizon Koicha thick ceremonial matcha",
      },
      {
        name: "Gion Cloud Usucha",
        price: "$7.50",
        rating: "4.8",
        image: "/assets/img/matcha/dripping-chasen.png",
        alt: "Gion Cloud Usucha whipped ceremonial matcha",
      },
      {
        name: "Yuzu Mist Matcha",
        price: "$7.00",
        rating: "4.8",
        image: "/assets/img/matcha/iced-matcha-cup-left.png",
        alt: "Yuzu Mist sparkling chilled matcha",
      },
      {
        name: "Oat Silk Ceremonial Latte",
        price: "$7.25",
        rating: "4.9",
        image: "/assets/img/matcha/matcha-latte-glass.png",
        alt: "Oat Silk ceremonial matcha latte",
      },
      {
        name: "Kinako Matcha Float",
        price: "$8.00",
        rating: "4.8",
        image: "/assets/img/matcha/iced-matcha-cup-right.png",
        alt: "Kinako Matcha float with toasted soybean cream",
      },
      {
        name: "Kyoto Morning Usucha",
        price: "$7.50",
        rating: "4.7",
        image: "/assets/img/matcha/hero-iced-matcha.jpg",
        alt: "Kyoto Morning traditional usucha bowl",
      },
    ],
  },
  {
    id: "cold-drip",
    label: "Cold-Drip Teas",
    heading: "Cold-Drip & Rare Infusions",
    blurb: "Eight-hour slow glass tower extractions capturing pristine, unheated aromatics.",
    items: [
      {
        name: "Gyokuro Dewdrop",
        price: "$9.00",
        rating: "5.0",
        image: "/assets/img/matcha/chawan-bowl.png",
        alt: "Gyokuro Dewdrop eight-hour cold-dripped tea",
      },
      {
        name: "Sencha Emerald Drip",
        price: "$6.50",
        rating: "4.7",
        image: "/assets/img/matcha/iced-matcha-cup-left.png",
        alt: "Sencha Emerald Drip chilled green tea",
      },
      {
        name: "Genmaicha Glacier",
        price: "$6.25",
        rating: "4.8",
        image: "/assets/img/matcha/matcha-latte-glass.png",
        alt: "Genmaicha Glacier roasted brown rice green tea",
      },
    ],
  },
  {
    id: "roasted-hojicha",
    label: "Roasted Hojicha",
    heading: "Roasted Hojicha & Herbal Tonics",
    blurb: "Charcoal-roasted bancha leaves providing warm, smoky amber depth with naturally low caffeine.",
    items: [
      {
        name: "Toasted Hojicha Cream Cloud",
        price: "$7.25",
        rating: "4.9",
        image: "/assets/img/matcha/dripping-chasen.png",
        alt: "Toasted Hojicha Cream Cloud with sea-salt foam",
      },
      {
        name: "Kurogoma Sesame Roast",
        price: "$7.50",
        rating: "4.8",
        image: "/assets/img/matcha/hero-iced-matcha.jpg",
        alt: "Kurogoma Sesame Roast hojicha latte",
      },
    ],
  },
];

export const menuHero = {
  eyebrow: "Our Offerings",
  lines: ["Explore The Taste", "Of Komorebi"],
};

export const buyLabel = "Order This Bowl";
