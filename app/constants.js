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
  title: "The Porsche 918 Levitation Display",
  inStock: true,

  pricing: {
    price: 12999,
    compareAt: 14999,
  },

  gallery: [
    //RED IMAGES

    {
      id: "vid_red",
      type: "video",
      alt_text: "porsche",
      image: "/porsche-loop-video.mp4",
      color: "red",
      position: 1,
    },

    //  GRAY IMAGES
    {
      id: "gray_pic1",
      image: "/gray-porsche-2.jpg",
      alt_text: "porsche",

      color: "gray",
      position: 1,
    },
    // {
    //   id: "gray_pic2",
    //   image: "/gray-porsche-3.jpg",
    //   alt_text: "porsche",

    //   color: "gray",
    //   position: 2,
    // },
    {
      id: "gray_pic2",
      image: "/gray-porsche-lfs.jpg",
      alt_text: "porsche",

      color: "gray",
      position: 2,
    },

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
    meta_title: "The Porsche 918 Levitation Display",
    meta_description: "The Porsche 918 Levitation Display",
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
        "Took about 30 seconds to find the sweet spot to float. Super smooth rotation.",
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
        "Bought this for my brother's garage setup. The glowing LEDs under the Porsche chassis look incredible at night. Worth every penny.",
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
      comment: "Works just like the video. Very happy.",
      image: "",
    },
    {
      id: 5,
      name: "Sven R.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      avatar: "SR",
      title: "Failsafe works!",
      comment:
        "Accidentally kicked the cord and unplugged the base. The car just safely snapped to the bottom instead of crashing down. Great engineering.",
      image: "",
    },
    {
      id: 6,
      name: "Kevin M.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      avatar: "KM",
      title: "Silent and sleek",
      comment: "Zero noise when it spins. Perfect for my gaming desk setup.",
      image: "",
    },
  ],
};
