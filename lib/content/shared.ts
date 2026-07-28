/** Blocks the original repeats across several pages: testimonials and the FAQ. */

export const testimonialsSection = {
  lines: ["Loved By Every", "Coffee Moment"],
  blurb: "Real experiences from people who made Beanro part of their daily ritual.",
  items: [
    {
      quote:
        "“Beanro completely changed how I see cold coffee. The texture, the creaminess, the balance — everything feels intentional. It’s not just a drink, it’s an experience I look forward to every day.”",
      author: "— A Regular Customer",
    },
    {
      quote:
        "“I never knew cold coffee could be this delightful. The unique blend of flavors and the perfect chill make it a refreshing choice, and it has quickly become my go-to beverage for every occasion.”",
      author: "— A Loyal Patron",
    },
    {
      quote:
        "“Every sip of Beanro's cold coffee is like a little joyful celebration. The rich aroma and smooth velvety finish elevate my mornings, and I can't imagine starting my day without it anymore — absolutely refreshing.”",
      author: "— A Satisfied User",
    },
  ],
  prevIcon: "/assets/img/de9d52a631a7d47c.svg",
  nextIcon: "/assets/img/0db50e6c503dba05.svg",
};

/**
 * The export ships an answer for the first question only — the remaining four
 * accordion panels are empty in the original (clicking them changes nothing).
 * Answers 2–5 are written here in the template's voice so the component works.
 * See PRODUCT.md → Deviations.
 */
export const faqSection = {
  lines: ["Frequently", "Asked Questions"],
  blurb: "Real experiences from people who made Beanro part of their daily ritual.",
  items: [
    {
      question: "What makes Beanro coffee different?",
      answer:
        "At Beanro, we focus on quality in every step — from sourcing premium beans to crafting each drink with precision.",
      verbatim: true,
    },
    {
      question: "Do you offer takeaway and delivery?",
      answer:
        "Yes. Every drink on the menu is made for takeaway, and delivery runs from all three cafés during opening hours.",
      verbatim: false,
    },
    {
      question: "Are your ingredients ethically sourced?",
      answer:
        "We buy from farms we know by name, pay above market rate, and keep the sourcing route visible on every bag we roast.",
      verbatim: false,
    },
    {
      question: "Do you have non-coffee options?",
      answer:
        "Plenty — matcha, chocolate, seasonal teas and cold-pressed juices, all built with the same care as the coffee.",
      verbatim: false,
    },
    {
      question: "Is Beanro a good place to work or relax?",
      answer:
        "Both. Power at most tables, unhurried service, and a quiet room at the back when you need to concentrate.",
      verbatim: false,
    },
  ],
};
