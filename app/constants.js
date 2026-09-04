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
  title: "The MPW-01 Tactile Core",
  inStock: true,

  pricing: {
    price: 3495,
    compareAt: 14999,
  },

  gallery: [
    //RED IMAGES

    {
      id: "video-1",
      alt_text: "Kinetic Haptic Slider Loop",
      type: "video",
      image: "/loop2.mp4",
      // color: "black",
      color: "brushed steel",

      position: 1,
    },

    {
      id: "cal-img-2",
      alt_text: "Kinetic Haptic Slider Loop",
      type: "image",
      image: "/spade-blackground2.avif",
      // color: "black",
      color: "brushed steel",

      position: 2,
    },
    // {
    //   id: "cal-img-3",
    //   alt_text: "Magnetic Calendar",
    //   type: "image",
    //   image: "/magnetic-calendar-main.jpg",
    //   color: "black",
    //   position: 3,
    // },

    //  GRAY IMAGES
    // {
    //   id: "cal-img-1",
    //   type: "image",
    //   alt_text: "Magnetic Calendar",

    //   image: "/magnetic-calendar-white-main.jpg",

    //   color: "white",
    //   position: 1,
    // },
    // {
    //   id: "cal-img-2",
    //   type: "image",
    //   alt_text: "Magnetic Calendar",

    //   image: "/magnetic-calendar-white-lfs-2.jpg",

    //   color: "white",
    //   position: 2,
    // },
    // {
    //   id: "gray_pic2",
    //   image: "/gray-porsche-3.jpg",
    //   alt_text: "porsche",

    //   color: "gray",
    //   position: 2,
    // },
    // {
    //   id: "gray_pic2",
    //   image: "/magnetic-calendar-black-lfs-2",
    //   alt_text: "porsche",

    //   color: "gray",
    //   position: 2,
    // },

    // {
    //   id: 3,
    //   image: "/chevy-ba.jpg",
    //   alt_text:
    //     "Chrome Lens Headlight Set Compatible with 2003-2006 Chevy Silverado before and after comparison",
    //   position: 3,
    // },
    // {
    //   id: 4,
    //   image: "/chevy-beam.jpg",
    //   alt_text:
    //     "Chrome Lens Headlight Set Compatible with 03 04 05 06 Chevy Silverado powerful crisp night beam view at night",
    //   position: 4,
    // },

    // images
  ],

  // description:
  //   "Comfortably drive at night with complete peace of mind. You no longer have to worry about unseen hazards on dark backroads. These ultra-bright halogen headlights ensure a powerful, crisp beam pattern that illuminates everything on the road ahead of you.",
  seo: {
    meta_title: "The MPW-01 Tactile Core",
    meta_description: "The MPW-01 Tactile Core",
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
        "Looks unreal in person. It has a really nice heavy weight to it since it's solid metal. Everyone who walks into my office ends up messing with it.",
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
        "The magnets are super strong. The metal plates slide back and forth with a really loud, satisfying click. Definitely helps me focus while working.",
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
        "Got this for my brother's desk setup. The matte steel look looks amazing next to his keyboard. He's obsessed with it.",
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
        "Exceeded my expectations. Honestly keeps my hands busy so I stop picking up my phone and scrolling every 5 minutes while working.",
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
        "I love that it's completely mechanical. No charging, no cords, just pure magnets. Feels like it'll last forever.",
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
        "It can be a little loud if you snap it fast, but if you hold the edges tighter you can slide it completely silent. Perfect for boring zoom meetings.",
      image: "",
    },
  ],
};
