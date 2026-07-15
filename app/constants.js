import { chevyHero } from "@/public/chevyhero.png";
import { chevyDetails } from "@/public/chevydetails.jpg";
import { chevyBA } from "@/public/chevy-ba.jpg";
import { chevyBeam } from "@/public/chevy-beam.jpg";

export const product = {
  slug: "2003-2006-chevy-silverado-headlights",

  title: "2003-2006 Chevy Silverado Headlights",
  inStock: true,

  pricing: {
    price: 12999,
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
    installationNote: "Fits Avalanche models without factory cladding only.",
  },
  sellingPoints: [
    "Direct OEM-style replacement",
    "Premium Chrome housing with clear lens",
    "DOT & SAE compliant",
    "Fast shipping from the USA",
  ],
  description:
    "Upgrade your 2003–2006 Chevy Silverado with chrome replacement headlights designed for OEM fitment and improved crystal-clear nighttime visibility.",
  seo: {
    meta_title:
      "2003-2006 Chevy Silverado Headlights | Driver & Passenger Side Replacement",
    meta_description:
      "Shop 2003-2006 Chevy Silverado replacement headlights. Quality driver and passenger side headlight assemblies with OEM-style fitment, fast shipping, and secure checkout.",
  },
};

export const reviews = [
  {
    id: 1,
    name: "Michael R.",
    rating: 5,
    title: "Perfect fit",
    description:
      "Installed these on my 2005 Silverado in under an hour. Fit perfectly and look much better than my old headlights.",
  },
  {
    id: 2,
    name: "James T.",
    rating: 5,
    title: "Great quality",
    description:
      "The chrome housing looks great and installation was straightforward. Highly recommend.",
  },
  {
    id: 3,
    name: "Chris D.",
    rating: 4,
    title: "Worth the price",
    description:
      "Good value for the money. Shipping was fast and the lights matched the factory mounting points.",
  },
];
