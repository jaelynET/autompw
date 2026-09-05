export const PAGE_SIZE = 12;
export const PAGE_WINDOW = 5;

export const ADDED_DISCOUNT = 30;

export const SORT_OPTIONS = [
  { label: "Best Sellers", value: "best_sellers", default: true },
  { label: "Price: Lowest to Highest", value: "price_asc" },
  { label: "Price: Highest to Lowest", value: "price_desc" },
  { label: "Newest", value: "newest" },
  { label: "Highest Rated", value: "rating" },
];

export const product = {
  title: "Magnetic Perpetual Calendar",
  inStock: true,

  pricing: {
    price: 3995,
    compareAt: 14999,
  },

  gallery: [
    // BLACK VARIANT IMAGES
    {
      id: "cal-img-3",
      alt_text: "Magnetic Calendar Carbon Black Edition",
      type: "image",
      image: "/magnetic-calendar-main.jpg",

      color: "black",
      position: 3,
    },
    {
      id: "cal-img-2",
      alt_text: "Magnetic Calendar Minimalist Office Desk Layout",
      type: "image",
      image: "/magnetic-calendar-black-lfs-2.jpg",

      color: "black",
      position: 2,
    },
    {
      id: "cal-img-1",
      alt_text: "Magnetic Calendar Minimalist Office Desk Layout",
      type: "image",
      image: "/magnetic-calendar-main-lfs-1.jpg",

      color: "black",
      position: 1,
    },

    // WHITE VARIANT IMAGES
    {
      id: "cal-img-1",
      alt_text: "Magnetic Calendar Pure White Edition Still Frame",
      type: "image",
      image: "/magnetic-calendar-white-main.jpg",
      color: "white",
      position: 1,
    },
    {
      id: "cal-img-4",
      alt_text: "Magnetic Calendar Flat Lay Geometric Studio View",
      type: "image",
      image: "/magnetic-calendar-white-lfs-2.jpg",
      color: "white",
      position: 2,
    },
  ],
  seo: {
    meta_title: "Magnetic Perpetual Calendar",
    meta_description: "Magnetic Perpetual Calendar",
  },

  reviews: [
    {
      id: 1,
      name: "David K.",
      rating: 5,
      date: "2 days ago",
      verified: true,
      avatar: "DK",
      title: "Insane desk piece",
      comment:
        "Looks unreal in person. Everyone who walks into my office stops to look at it.",
      image: "/review-desk-1.jpg",
    },
    {
      id: 2,
      name: "Marcus G.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      avatar: "MG",
      title: "Solid quality",
      comment:
        "The rare-earth magnets feel premium. The spheres click satisfyingly into place for the days and months.",
      image: "",
    },
    {
      id: 3,
      name: "Alex P.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      avatar: "AP",
      title: "Best gift I've bought all year",
      comment:
        "Bought this for my brother's office setup. The minimal matte black structure looks incredible against wood grain. Worth every penny.",
      image: "/review-desk-2.jpg",
    },
    {
      id: 4,
      name: "Chris T.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      avatar: "CT",
      title: "Super cool gadget",
      comment:
        "Exceeded my expectations. It looks incredibly sleek and functions beautifully.",
      image: "",
    },
    {
      id: 5,
      name: "Sven R.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      avatar: "SR",
      title: "Brilliant engineering",
      comment:
        "I love that it works purely on mechanical magnetism. No charging, no cords, and zero battery waste.",
      image: "",
    },
    {
      id: 6,
      name: "Kevin M.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      avatar: "KM",
      title: "Sleek and tactile",
      comment:
        "It has become part of my daily routine to move the dates forward. Perfect touch for my clean setup.",
      image: "",
    },
  ],
};
