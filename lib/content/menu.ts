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
        image: "/assets/img/d31aea03e99b4b9e.webp",
        alt: "Uji Horizon Koicha thick ceremonial matcha",
      },
      {
        name: "Gion Cloud Usucha",
        price: "$7.50",
        rating: "4.8",
        image: "/assets/img/b52150a42fdbb62e.webp",
        alt: "Gion Cloud Usucha whipped ceremonial matcha",
      },
      {
        name: "Yuzu Mist Matcha",
        price: "$7.00",
        rating: "4.8",
        image: "/assets/img/6e3c8cc52b13727c.webp",
        alt: "Yuzu Mist sparkling chilled matcha",
      },
      {
        name: "Oat Silk Ceremonial Latte",
        price: "$7.25",
        rating: "4.9",
        image: "/assets/img/5f37ec87bdd1cb94.webp",
        alt: "Oat Silk ceremonial matcha latte",
      },
      {
        name: "Kinako Matcha Float",
        price: "$8.00",
        rating: "4.8",
        image: "/assets/img/96a8c432b8ce064f.webp",
        alt: "Kinako Matcha float with toasted soybean cream",
      },
      {
        name: "Kyoto Morning Usucha",
        price: "$7.50",
        rating: "4.7",
        image: "/assets/img/de5f7357d8fa94d0.webp",
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
        image: "/assets/img/47412815fd6fc5a5.webp",
        alt: "Gyokuro Dewdrop eight-hour cold-dripped tea",
      },
      {
        name: "Sencha Emerald Drip",
        price: "$6.50",
        rating: "4.7",
        image: "/assets/img/874452ce3874674b.webp",
        alt: "Sencha Emerald Drip chilled green tea",
      },
      {
        name: "Genmaicha Glacier",
        price: "$6.25",
        rating: "4.8",
        image: "/assets/img/ad6da8c18ec38ee1.webp",
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
        image: "/assets/img/43beea5ba621f279.webp",
        alt: "Toasted Hojicha Cream Cloud with sea-salt foam",
      },
      {
        name: "Kurogoma Sesame Roast",
        price: "$7.50",
        rating: "4.8",
        image: "/assets/img/f0ecda29fa1a0a2e.webp",
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
