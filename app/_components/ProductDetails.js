"use client";

import { useState } from "react";
import ProductHeroMedia from "./ProductHeroMedia";
import ProductOptionsSection from "./ProductOptionsSection";
import ProductionCap from "./ProductionCap";
import FrontTextEngraving from "./FrontTextEngraving";
import CheckoutBtn from "./CheckoutBtn";
import FeatureBox from "./FeatureBox";
import FAQList from "./FAQList";
import Reviews from "./Reviews";

export default function ProductDetails({ product }) {
  // Client state to hold the uploaded file path or base64 preview
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [engravingText, setEngravingText] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    // Create an instant client-side local blob URL for previewing
    const previewUrl = URL.createObjectURL(file);
    setUploadedImage(previewUrl);

    setIsUploading(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-4 md:mt-12 select-none font-sans antialiased text-stone-950 bg-white">
      {/* Two-Column Grid Setup: Images on Left, Checkout Action Funnel on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side: Dynamic visual preview frame */}
        <div className="w-full block md:sticky md:top-8 z-0">
          <ProductHeroMedia uploadedImage={uploadedImage} />
        </div>

        {/* Right Side: Product Details & Customization Stack */}
        <div className="w-full">
          <h1 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl lg:text-4xl leading-tight">
            AutoMPW Custom Pet Keepsake Necklace
          </h1>

          {/* Social Proof Aggregate row */}
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex gap-0.5 text-amber-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            {/* Optimized to text-stone-600 for sharp skimming contrast */}
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-600 pt-0.5">
              (4.9 / 142 Reviews)
            </span>
          </div>

          <div className="mt-4 w-full bg-white font-sans">
            {/* 1. Unified Metal Color & Pricing Selectors */}
            <ProductOptionsSection />

            {/* 2. Embedded Dynamic Urgent Capacity Row */}
            <ProductionCap />

            {/* 🌟 CUSTOMIZED TRAP: The File Upload & Text Box Stack */}
            <div className="mt-6 border-t border-stone-100 pt-5 space-y-5">
              <div>
                {/* Optimized text-stone-400 to text-stone-600 for high-level contrast accessibility */}
                <label
                  htmlFor="pet-photo-upload"
                  className="text-[10px] font-bold uppercase tracking-widest text-stone-600 font-mono block mb-2.5"
                >
                  1. Upload Your Pet&apos;s Best Photo
                </label>

                <div className="relative border-2 border-dashed border-stone-200 hover:border-stone-400 rounded-xl p-6 text-center transition bg-stone-50/50 cursor-pointer">
                  <input
                    id="pet-photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-stone-900">
                      {uploadedImage
                        ? "✓ Photo Attached Successfully"
                        : "📷 Tap to pick from Camera Roll"}
                    </p>
                  </div>
                </div>
                {/* 🎯 THE ACCESSIBLE FIX: Handles separate photos or group photos elegantly */}
                <p className="text-[10px] text-stone-600 leading-normal mt-2 font-sans font-medium pl-1">
                  <strong className="text-stone-950 font-bold">
                    Ordering multiple pendants?
                  </strong>{" "}
                  Feel free to upload a group photo, or simply upload your first
                  pet here. You can text or email our studio additional separate
                  photos right after checkout!
                </p>
              </div>

              {/* Integrated Name Input Field Component */}
              <FrontTextEngraving
                onTextChange={(text) => setEngravingText(text)}
              />
            </div>

            {/* 3. Main CTA Purchase Execution Switch */}
            <div className="mt-6">
              <CheckoutBtn
                product={product}
                uploadedImage={uploadedImage}
                engravingText={engravingText}
                disabled={!uploadedImage || isUploading}
              />
            </div>

            {/* 4. Highly Scannable Bullet Benefits */}
            <div className="mt-8 border-t border-stone-100 pt-6 space-y-3.5">
              <div className="flex items-center gap-3 text-xs tracking-wide text-stone-600">
                <span className="h-1.5 w-1.5 bg-stone-950 rounded-full block flex-shrink-0" />
                <span className="font-bold text-stone-950">
                  Free Worldwide Tracked Shipping
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs tracking-wide text-stone-600">
                <span className="h-1.5 w-1.5 bg-stone-400 rounded-full block flex-shrink-0" />
                <span className="font-medium">
                  Individually Hand-Engraved to Order
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs tracking-wide text-stone-600">
                <span className="h-1.5 w-1.5 bg-stone-400 rounded-full block flex-shrink-0" />
                <span className="font-medium">
                  30-Day Risk-Free Keepsake Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Information Components Section */}
      <div className="w-full mt-12 md:mt-24 space-y-16">
        <FeatureBox />
        <FAQList />
        <Reviews />
      </div>
    </div>
  );
}
