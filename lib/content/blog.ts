// Komorebi Teahouse Tea Journal & Chronicles.
// Essays on ceremonial matcha, traditional craftsmanship, terroir, and mindful living.

export interface PostSection {
  type: "section";
  heading: string;
  paragraphs: string[];
}

export interface PostImage {
  type: "image";
  src: string;
  alt: string;
}

export interface Post {
  slug: string;
  /** Title as it appears on the blog index card */
  title: string;
  category: string;
  date: string;
  cover: string;
  /** Shorter title used in the article hero */
  heroTitle: string;
  author: { name: string; role: string; avatar: string };
  body: (PostSection | PostImage)[];
}

export const posts: Post[] = [
  {
    slug: "the-philosophy-of-ichigo-ichie-in-the-tea-room",
    title: "The Philosophy of Ichigo Ichie: One Encounter, One Lifetime in the Tea Room",
    category: "Tea Philosophy",
    date: "Aug 12, 2026",
    cover: "/assets/img/06d17539dc1c65f2.webp",
    heroTitle: "The Philosophy of Ichigo Ichie",
    author: {
      name: "Kenji Takahashi",
      role: "Master Tea Sommelier",
      avatar: "/assets/img/9ddaeec0ad9e66cb.webp",
    },
    body: [
      {
        type: "section",
        heading: "The Sacred Fleeting Moment",
        paragraphs: [
          "In the 16th century, tea master Sen no Rikyu codified the four pillars of the Japanese tea ceremony: Wa (harmony), Kei (respect), Sei (purity), and Jaku (tranquility). Bound closely to these principles is the concept of Ichigo Ichie (一期一会) — literally translated as 'one time, one meeting'. It reminds both host and guest that even if the same people gather in the same room tomorrow, the exact light, breath, water temperature, and spirit of this moment will never happen again.",
          "At Komorebi Teahouse, every bowl of ceremonial matcha is prepared under the light of this philosophy. We do not churn out drinks; we create space for an intentional pause. When you receive a warm ceramic chawan bowl, you are invited to turn it twice, admire the glaze, and take in the fragrance of first-harvest Uji tencha with undivided presence.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/1ba60ceee53ae8c6.webp",
        alt: "Ceremonial chawan bowl held in hands during tea gathering",
      },
      {
        type: "section",
        heading: "Living with Unhurried Presence",
        paragraphs: [
          "Modern daily life often demands constant acceleration. The Japanese tea room was specifically engineered as an antidote — entering through a low doorway (nijiriguchi) forced warriors to remove their swords and humble themselves before the tea kettle. In our Kyoto, Venice, and SoHo sanctuaries, cedar walls and tatami floors serve that same essential purpose: a sanctuary where time softens and presence is restored.",
        ],
      },
    ],
  },
  {
    slug: "shade-grown-tencha-the-science-of-uji-umami",
    title: "Shade-Grown Tencha: Why 21 Days of Darkness Creates Uji's Legendary Umami",
    category: "Sourcing & Terroir",
    date: "Jul 28, 2026",
    cover: "/assets/img/46ee190aec30d5b7.webp",
    heroTitle: "Shade-Grown Tencha & Umami",
    author: {
      name: "Ren Tanaka",
      role: "Sourcing & Roasting Specialist",
      avatar: "/assets/img/f65ced77295deefd.webp",
    },
    body: [
      {
        type: "section",
        heading: "The Metamorphosis Under Straw Canopies",
        paragraphs: [
          "Ceremonial matcha is not merely ground green tea; it is produced exclusively from 'tencha', camellia sinensis leaves grown under rigorous shade for at least 21 days before harvest. In Uji, Kyoto — the birthplace of Japanese tea cultivation — farmers erect vast woven straw and reed canopies (honzu) over the tea bushes as the first tender spring buds emerge.",
          "By filtering out up to 98% of direct sunlight, photosynthesis is radically slowed. In response, the plant desperately surges chlorophyll production, turning the leaves into an electrifying neon emerald. Crucially, the amino acid L-theanine — which would normally convert into astringent catechins under sunlight — is preserved in dense concentrations, yielding the velvety, broth-like umami sweetness that defines authentic ceremonial matcha.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/47fa385ca0a2a82f.webp",
        alt: "Freshly harvested tencha leaves before stone grinding",
      },
      {
        type: "section",
        heading: "Granite Stone Mills and Micro-Grinding",
        paragraphs: [
          "Once harvested, tencha is quickly steamed to halt oxidation, dried without rolling to preserve leaf integrity, and de-stemmed. Finally, it meets slow-turning granite stone mills. A single granite mill rotates at only 60 revolutions per minute, producing a mere 30 to 40 grams of ceremonial matcha powder per hour. This glacial grinding speed prevents friction heat from scorching delicate aromatic oils.",
        ],
      },
    ],
  },
  {
    slug: "craft-of-takayama-bamboo-chasen-whisking",
    title: "The Craft of Takayama Bamboo: 500 Years of Chasen Carving",
    category: "Artisan Craft",
    date: "Jul 10, 2026",
    cover: "/assets/img/29d52e6300c332fe.webp",
    heroTitle: "The Takayama Bamboo Chasen",
    author: {
      name: "Aoi Moriyama",
      role: "Tea Ceremony Director",
      avatar: "/assets/img/5b90d319a04e5192.webp",
    },
    body: [
      {
        type: "section",
        heading: "The Secret Hamlet of Whisk Masters",
        paragraphs: [
          "In the quiet hamlet of Takayama in Nara prefecture, a lineage of craftspeople has hand-carved the bamboo tea whisk (chasen) for over five centuries. To this day, Takayama produces more than 90% of Japan's authentic bamboo whisks, crafted without machines from seasoned three-year-old local white or black bamboo.",
          "A single culm of bamboo is slit by hand into 80, 100, or 120 gossamer tines using a specialized razor-sharp knife. The carver then shaves the tip of every tine until it is thinner than a sheet of paper and curls gently inward. This microscopic feathering is what allows the chasen to aerate ceremonial matcha into micro-foam without damaging the chawan ceramic surface.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/cd8a32f6a33d8d2c.webp",
        alt: "Takayama bamboo chasen whisks drying on cedar racks",
      },
      {
        type: "section",
        heading: "Caring for Natural Bamboo",
        paragraphs: [
          "A handmade bamboo chasen is a living tool that breathes with moisture. Before whisking, we soak the tines in warm water to restore their natural elasticity. After each bowl, it is gently rinsed with water alone and rested on a ceramic chasen-naoshi holder to preserve its tulip flare. Treated with care, a single whisk yields hundreds of serene bowls.",
        ],
      },
    ],
  },
  {
    slug: "usucha-vs-koicha-demystifying-ceremonial-matcha",
    title: "Usucha vs. Koicha: Demystifying Thin and Thick Ceremonial Matcha",
    category: "Brewing Rituals",
    date: "Jun 24, 2026",
    cover: "/assets/img/1ba60ceee53ae8c6.webp",
    heroTitle: "Usucha vs. Koicha Explained",
    author: {
      name: "Kenji Takahashi",
      role: "Master Tea Sommelier",
      avatar: "/assets/img/9ddaeec0ad9e66cb.webp",
    },
    body: [
      {
        type: "section",
        heading: "Two Expressions of One Sacred Powder",
        paragraphs: [
          "Most Western tea drinkers are familiar with Usucha (薄茶, thin tea) — 2 grams of matcha sifted into 70ml of hot water and briskly whisked into a bright, frothy cloud. It is light, floral, refreshing, and served as the informal hospitality portion of a tea gathering.",
          "Koicha (濃茶, thick tea), however, is the apex of the Japanese tea ritual. Prepared with 4 grams of ultra-premium tencha and only 30ml of water, it is kneaded rather than whisked with slow, deliberate chasen movements. The result is not frothy, but an opaque, glossy green suspension with the viscosity of warm melted chocolate. Any bitterness in lower-grade tea would render koicha undrinkable; only pristine first-harvest leaves possess the sweetness required for this intense experience.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/0798aab18aa2680b.webp",
        alt: "Glossy jade Koicha ceremonial matcha in a handcrafted chawan",
      },
      {
        type: "section",
        heading: "How to Experience Koicha at Komorebi",
        paragraphs: [
          "At Komorebi Teahouse, our flagship 'Uji Horizon Koicha' uses our rarest single-lot tencha from 60-year-old tea bushes. We serve it alongside handmade wagashi sweets; taking a bite of sweet azuki bean paste before the sip coats the palate and unlocks complex waves of maritime mineral notes, rich nori sweetness, and gentle floral warmth.",
        ],
      },
    ],
  },
  {
    slug: "cold-dripping-gyokuro-the-eight-hour-extraction",
    title: "Cold-Dripping Gyokuro: The 8-Hour Extraction of Pure Vegetal Sweetness",
    category: "Cold Infusions",
    date: "Jun 08, 2026",
    cover: "/assets/img/1ddbac762ced5cc1.webp",
    heroTitle: "Cold-Dripping Slow Gyokuro",
    author: {
      name: "Ren Tanaka",
      role: "Sourcing & Roasting Specialist",
      avatar: "/assets/img/f65ced77295deefd.webp",
    },
    body: [
      {
        type: "section",
        heading: "Capturing the Soul of Shade-Grown Whole Leaf",
        paragraphs: [
          "While ceremonial matcha uses ground leaves, Gyokuro (玉露, 'Jeweled Dew') represents Japan’s most prized whole-leaf green tea. Also shaded for three weeks before picking, its needle-fine, deep forest green leaves are steeped with surgical precision.",
          "In our glass extraction towers, cold mountain spring water drips over dense beds of Gyokuro leaves at a rate of one drop every five seconds. Over eight hours, this unheated infusion selectively extracts sweet amino acids and aroma esters while leaving heavy tannins behind. The resulting elixir is served chilled in hand-blown crystal glasses, offering notes of melon, sweet dashi, and white lily.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/874452ce3874674b.webp",
        alt: "Slow cold drip glass tower extracting pale green Gyokuro tea",
      },
      {
        type: "section",
        heading: "A Pure Summer Elixir",
        paragraphs: [
          "For warm afternoons in Kyoto or Venice Beach, Gyokuro Dewdrop offers an astonishingly rich, cooling alternative to iced coffee. It hydrates deeply while sharpening mental focus through high natural L-theanine content.",
        ],
      },
    ],
  },
  {
    slug: "hojicha-charcoal-roasting-comfort-without-jitters",
    title: "Hojicha by Charcoal: How Roasted Green Tea Delivers Warmth Without Jitters",
    category: "Roasted Teas",
    date: "May 20, 2026",
    cover: "/assets/img/1e4ba3e2ccea4b73.webp",
    heroTitle: "The Warmth of Charcoal Hojicha",
    author: {
      name: "Ren Tanaka",
      role: "Sourcing & Roasting Specialist",
      avatar: "/assets/img/3183ba89fcf4fa15.webp",
    },
    body: [
      {
        type: "section",
        heading: "The Amber Alchemy of High-Heat Roasting",
        paragraphs: [
          "Green tea is famous for its vibrant grassy tones, but Hojicha (ほうじ茶) tells an entirely different story. Born in Kyoto in the 1920s, hojicha is crafted by roasting bancha or kukicha stems over high-heat binchotan charcoal in rotating porcelain drums.",
          "As temperatures exceed 200°C, green chlorophyll breaks down into rich caramel pyrazines. The leaves turn a warm reddish-amber, filling the teahouse with comforting aromas of toasted hazelnuts, roasted chestnuts, and subtle cocoa. Because intense heat naturally sublimates caffeine, hojicha contains a fraction of the caffeine found in coffee or matcha, making it the perfect evening comfort.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/43beea5ba621f279.webp",
        alt: "Toasted hojicha tea leaves roasting in ceramic vessel",
      },
      {
        type: "section",
        heading: "The Hojicha Cream Cloud",
        paragraphs: [
          "At Komorebi, we craft a concentrated double-reduction of charcoal-roasted hojicha, layering it beneath silky oat milk and a light sprinkle of Okinawa brown sugar. It delivers all the nostalgic comfort of a roasted latte with earthy Japanese depth.",
        ],
      },
    ],
  },
  {
    slug: "wabi-sabi-ceramics-the-soul-of-the-chawan-bowl",
    title: "Wabi-Sabi Ceramics: Celebrating the Imperfect Soul of the Chawan Bowl",
    category: "Artisan Vessels",
    date: "May 04, 2026",
    cover: "/assets/img/2bcb2d9009778245.webp",
    heroTitle: "The Soul of Chawan Bowls",
    author: {
      name: "Aoi Moriyama",
      role: "Tea Ceremony Director",
      avatar: "/assets/img/5b90d319a04e5192.webp",
    },
    body: [
      {
        type: "section",
        heading: "Beauty Found in Asymmetry and Texture",
        paragraphs: [
          "In the Japanese aesthetic tradition of wabi-sabi, perfection is considered cold and lifeless. True vitality lives in the natural variations of wood-fired clay, the crawl of a shino glaze, and the gentle asymmetry of a vessel shaped by human hands.",
          "Our chawan bowls are commissioned directly from independent ceramic studios in Shigaraki, Bizen, and Kyoto. Each bowl possesses its own 'front' (shomen) — typically marked by a dramatic glaze bloom or tactile stone inclusion. When you hold the bowl in both palms, its weight, heat transfer, and rim contour directly shape your relationship with the tea.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/de5f7357d8fa94d0.webp",
        alt: "Artisanal ceramic chawan bowl with wood ash glaze",
      },
      {
        type: "section",
        heading: "Vessels That Age with Tea",
        paragraphs: [
          "Over months of ceremonial preparation, natural tea tannins slowly seep into microscopic hairline cracks in the glaze (kannyu). Rather than diminishing the vessel, this gentle patina deepens its character, recording every tea gathering that has unfolded within its walls.",
        ],
      },
    ],
  },
  {
    slug: "water-temperature-and-foam-mastering-matcha-at-home",
    title: "Water, Temperature & Foam: The Science of Whisking Flawless Matcha at Home",
    category: "Guide & Masterclass",
    date: "Apr 18, 2026",
    cover: "/assets/img/cd8a32f6a33d8d2c.webp",
    heroTitle: "Whisking Flawless Matcha at Home",
    author: {
      name: "Kenji Takahashi",
      role: "Master Tea Sommelier",
      avatar: "/assets/img/9ddaeec0ad9e66cb.webp",
    },
    body: [
      {
        type: "section",
        heading: "The Three Sacred Variables",
        paragraphs: [
          "Whisking ceremonial matcha at home requires neither years of monastery training nor complex apparatus, but it does demand respect for three physical variables: particle separation, water temperature, and wrist kinematics.",
          "First, matcha powder is electrostatic and prone to clumping; always sift 2 grams through a fine mesh strainer into a warmed, dry bowl. Second, boiling water scalds the delicate theanine and turns the tea unpalatably bitter. Use soft spring water heated strictly between 70°C and 78°C (158°F–172°F).",
        ],
      },
      {
        type: "image",
        src: "/assets/img/546acdf3090be173.webp",
        alt: "Fine emerald matcha powder sifted into ceramic bowl",
      },
      {
        type: "section",
        heading: "The W-Pattern Whisk Motion",
        paragraphs: [
          "Pour 60 to 70ml of heated water over the sifted tencha. Hold your chasen firmly with thumb and two fingers, keeping the elbow loose and moving purely from the wrist. Do not stir in circles; whisk vigorously in a rapid 'W' or 'M' pattern, keeping the tines suspended just above the bowl bottom to incorporate air.",
          "Within twenty seconds, a fine emerald crema will form. Slowly finish by drawing a gentle circle through the surface to pop any stray large bubbles, leaving a velvet blanket of micro-foam.",
        ],
      },
    ],
  },
  {
    slug: "from-kyoto-to-venice-modernizing-traditional-tea",
    title: "From Kyoto to Venice: Modernizing the Traditional Japanese Tea Sanctuary",
    category: "Sanctuaries",
    date: "Apr 02, 2026",
    cover: "/assets/img/48c55e9e5faf1a80.webp",
    heroTitle: "Modernizing the Japanese Tea Room",
    author: {
      name: "Kenji Takahashi",
      role: "Master Tea Sommelier",
      avatar: "/assets/img/9ddaeec0ad9e66cb.webp",
    },
    body: [
      {
        type: "section",
        heading: "Rooted in Tradition, Designed for the Present",
        paragraphs: [
          "When designing our teahouse sanctuaries in Kyoto, Los Angeles, and New York, our mission was never to recreate a dusty museum replica of an ancient tea hut. Rather, we sought to distill the essential timeless principles of Japanese spatial design into luminous contemporary spaces.",
          "Natural light filters softly through washi paper screens, mimicking the dappled sunlight (komorebi) filtering through forest canopies. Natural hinoki cypress counter bars, smooth river stones, and acoustic quiet allow guests to step off bustling urban streets and instantly exhale.",
        ],
      },
      {
        type: "image",
        src: "/assets/img/a1c675185419d75e.webp",
        alt: "Sunlit Japanese tea pavilion with bamboo details and tatami seating",
      },
      {
        type: "section",
        heading: "An Open Invitation to Calm",
        paragraphs: [
          "Whether you are stopping by our Venice Pavilion for a quick iced matcha latte or reserving a tatami ceremony flight in our SoHo cellar, Komorebi is your community sanctuary for presence, health, and quiet joy.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const adjacentPosts = (slug: string) => {
  const i = posts.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? posts[i - 1] : posts[posts.length - 1],
    next: i < posts.length - 1 ? posts[i + 1] : posts[0],
  };
};
