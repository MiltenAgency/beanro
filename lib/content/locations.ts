/** Location page: three tea sanctuaries, each with hours, review count and address. */

export const locationHero = {
  eyebrow: "Our Sanctuaries",
  lines: ["Visit Our Teahouses"],
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
    name: "Kyoto Sanctuary (Higashiyama)",
    blurb:
      "Nestled beside traditional cedar machiya townhouses, our flagship sanctuary features a moss garden courtyard and quiet tatami alcoves.",
    hours: { weekday: "Mon – Fri: 9:00 AM – 6:00 PM", weekend: "Sat – Sun: 8:30 AM – 7:00 PM" },
    reviews: "850+ Reviews",
    address: "82 Yasaka-dori, Higashiyama-ku, Kyoto 605-0862",
    image: "/assets/img/48c55e9e5faf1a80.webp",
    alt: "Tranquil Kyoto tea house with tatami seating and garden view",
  },
  {
    name: "Venice Pavilion (Los Angeles)",
    blurb:
      "An airy coastal pavilion blending sunlit white oak, tatami bench seating, and Japanese bamboo chasen bars.",
    hours: { weekday: "Mon – Fri: 7:30 AM – 7:00 PM", weekend: "Sat – Sun: 8:00 AM – 8:00 PM" },
    reviews: "620+ Reviews",
    address: "1314 Abbot Kinney Blvd, Venice, CA 90291",
    image: "/assets/img/a1c675185419d75e.webp",
    alt: "Modern minimalist tea pavilion with bamboo fixtures",
  },
  {
    name: "SoHo Tea Cellar (New York)",
    blurb:
      "A subterranean tea lounge beneath historic cast-iron architecture, offering focused tea flights and private ceremony seatings.",
    hours: { weekday: "Mon – Fri: 8:00 AM – 8:00 PM", weekend: "Sat – Sun: 9:00 AM – 9:00 PM" },
    reviews: "490+ Reviews",
    address: "462 Broome St, New York, NY 10013",
    image: "/assets/img/c8a69232db0d9146.webp",
    alt: "Warm intimate tea cellar with stone and cedar wood",
  },
];

export const hoursLabel = "Hours:";
export const directionsLabel = "Get Directions";

