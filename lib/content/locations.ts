/** Location page: three cafés, each with hours, review count and address. */

export const locationHero = {
  eyebrow: "Our Locations",
  lines: ["Visit Our Cafes"],
};

export interface Cafe {
  name: string;
  blurb: string;
  hours: { weekday: string; weekend: string };
  reviews: string;
  address: string;
  image: string;
  alt: string;
}

export const cafes: Cafe[] = [
  {
    name: "Beanro Melrose, LA",
    blurb:
      "Located in the heart of Melrose, this space blends modern design with a relaxed atmosphere.",
    hours: { weekday: "Mon – Fri: 7:00 AM – 9:00 PM", weekend: "Sat – Sun: 8:00 AM – 10:00 PM" },
    reviews: "500+ Reviews",
    address: "258 Melrose Ave Los Angeles, CA 90046",
    image: "/assets/img/48c55e9e5faf1a80.webp",
    alt: "Bright minimalist coffee shop interior",
  },
  {
    name: "Pasta Pronto, Ny",
    blurb:
      "A cozy Italian bistro serving fresh pasta made daily, perfect for a quick lunch or a romantic dinner.",
    hours: { weekday: "Mon – Fri: 11:00 AM – 10:00 PM", weekend: "Sat – Sun: 10:00 AM – 11:00 PM" },
    reviews: "450+ Reviews",
    address: "245 West 49th St New York, NY 10019",
    image: "/assets/img/a1c675185419d75e.webp",
    alt: "Modern industrial cafe seating area",
  },
  {
    name: "Beanro Santa Monica",
    blurb:
      "A charming café with a Parisian vibe, known for its artisanal pastries and expertly brewed coffee.",
    hours: { weekday: "Mon – Fri: 8:00 AM – 8:00 PM", weekend: "Sat – Sun: 9:00 AM – 9:00 PM" },
    reviews: "300+ Reviews",
    address: "301 Ocean Ave Santa Monica, CA 90401",
    image: "/assets/img/c8a69232db0d9146.webp",
    alt: "Warm cozy cafe with plants",
  },
];

export const hoursLabel = "Hours:";
export const directionsLabel = "Get direction";
