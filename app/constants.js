import { chevyHero } from "@/public/chevyhero.png";
import { chevyDetails } from "@/public/chevydetails.jpg";
import { chevyBA } from "@/public/chevy-ba.jpg";
import { chevyBeam } from "@/public/chevy-beam.jpg";

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
  title: "Chrome Lens Headlight Set Compatible with 2003-2006 Chevy Silverado",
  inStock: true,

  pricing: {
    price: 14999,
    compareAt: 24999,
  },

  gallery: [
    {
      id: 1,
      image: "/chevyhero.png",
      alt_text: "2003-2006 Chevy Silverado headlights front view",
      position: 1,
    },
    {
      id: 2,
      image: "/chevydetails.jpg",
      alt_text: "2003-2006 Chevy Silverado headlights side angle",
      position: 2,
    },
    {
      id: 3,
      image: "/chevy-ba.jpg",
      alt_text:
        "2003-2006 Chevy Silverado 1500 headlights before and after lights view",
      position: 3,
    },
    {
      id: 4,
      image: "/chevy-beam.jpg",
      alt_text: "03 04 05 06 Chevy Silverado headlights beam view at night",
      position: 4,
    },

    // images
  ],

  specifications: {
    "Housing Color": "Chrome",
    "Lens Color": "Clear",
    "Lighting Tech": "Halogen",
    "Bulbs Included": "No",
    "Beam Type": "Reflector",
    Placement: "Front Left & Right",
    Material: "ABS Plastic / Polycarbonate Lens",
    mpn: "AMPW-3656",
    "Bulb Type": "9005 High / 9006 Low Beam",
    "Fitment Type": "Direct Replacement",
  },

  fitment: {
    years: [2003, 2004, 2005, 2006],
    vehicles: [
      "Chevrolet Silverado 1500",
      "Chevrolet Silverado 2500",
      "Chevrolet Avalanche (without factory cladding)",
    ],
    installationNote: [
      "💡 Use your trucks factory bulbs - 100% plug and play setup (Bulbs not included)",
      "⚠️ Fits Avalanche models without factory body cladding only.",
    ],
  },
  sellingPoints: [
    "Crystal Clear Vision",
    "Premium Chrome housing with clear lens",
    "DOT & SAE compliant",
    "Fast shipping from the USA",
  ],
  description:
    "Comfortably drive at night with complete peace of mind. You no longer have to worry about unseen hazards on dark backroads. These ultra-bright halogen headlights ensure a powerful, crisp beam pattern that illuminates everything on the road ahead of you.",
  seo: {
    meta_title:
      "Chrome Lens Headlight Set Compatible with 2003-2006 Chevy Silverado",
    meta_description:
      "Upgrade your truck with high-quality replacement headlight assemblies compatible with 2003-2006 Chevy Silverado. Direct aftermarket fitment, fast shipping, and secure checkout.",
  },
};
