/** Drink catalogue. Names, prices, ratings and imagery verbatim from the export. */

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
    id: "signature-brews",
    label: "Signature Brews",
    heading: "Signature Brews",
    blurb: "A selection of favorites crafted to delight every coffee lover.",
    items: [
      {
        name: "Frosted Velvet",
        price: "$7.50",
        rating: "4.8",
        image: "/assets/img/d31aea03e99b4b9e.webp",
        alt: "Frosted Velvet",
      },
      {
        name: "Iced Caramel Drift",
        price: "$6.75",
        rating: "4.8",
        image: "/assets/img/b52150a42fdbb62e.webp",
        alt: "Iced Caramel Drift",
      },
      {
        name: "Vanilla Ice Latte",
        price: "$5.50",
        rating: "4.6",
        image: "/assets/img/6e3c8cc52b13727c.webp",
        alt: "Vanilla Ice Latte",
      },
      {
        name: "Cocoa Ice Latte",
        price: "$6.00",
        rating: "4.9",
        image: "/assets/img/5f37ec87bdd1cb94.webp",
        alt: "Cocoa Ice Latte",
      },
      {
        name: "Cold Brew Cloud",
        price: "$7.00",
        rating: "4.8",
        image: "/assets/img/96a8c432b8ce064f.webp",
        alt: "Cold Brew Cloud",
      },
      {
        name: "Iced Hazelnut",
        price: "$7.25",
        rating: "4.8",
        image: "/assets/img/de5f7357d8fa94d0.webp",
        alt: "Iced Hazelnut latte",
      },
    ],
  },
  {
    id: "cold-brew",
    label: "Cold Brew",
    heading: "Cold Brews",
    blurb: "Discover our most popular and beloved coffee creations.",
    items: [
      {
        name: "Iced Ember Latte",
        price: "$6.50",
        rating: "4.7",
        image: "/assets/img/47412815fd6fc5a5.webp",
        alt: "Iced Ember Latte",
      },
      {
        name: "Polar Espresso",
        price: "$7.50",
        rating: "4.8",
        image: "/assets/img/874452ce3874674b.webp",
        alt: "Polar Espresso",
      },
      {
        name: "Arctic White Coffee",
        price: "$6.75",
        rating: "4.8",
        image: "/assets/img/ad6da8c18ec38ee1.webp",
        alt: "Arctic White Coffee",
      },
    ],
  },
  {
    id: "frappuccino",
    label: "Frappuccino",
    heading: "Frappuccinos",
    blurb: "Indulge in our curated selection of delightful, blended beverages.",
    items: [
      {
        name: "Frosted Coffee",
        price: "$7.50",
        rating: "4.6",
        image: "/assets/img/43beea5ba621f279.webp",
        alt: "Frosted Coffee",
      },
      {
        name: "Frozen Black Tie",
        price: "$6.25",
        rating: "4.5",
        image: "/assets/img/f0ecda29fa1a0a2e.webp",
        alt: "Frozen Black Tie",
      },
    ],
  },
];

export const menuHero = {
  eyebrow: "Menu",
  lines: ["Explore The Taste", "Of Beanro"],
};

export const buyLabel = "Get This Brew";
