import Swiper from "swiper";
import { showSimilarProducts } from "../_lib/data-service";
import ProductCard from "./ProductCard";
import SimilarProductCard from "./SimilarProductCard";

async function SimilarProducts({ slug }) {
  const relatedTubs = await showSimilarProducts(slug);
  const { retrieveStyle, similarProducts: similarStyles } = relatedTubs;
  const style = retrieveStyle[0];

  // console.dir(relatedTubs, { depth: null });

  return (
    <>
      {/* --- UNIFIED RECOMMENDATIONS GRID WRAPPER --- */}
      <div className="w-full border-t border-stone-200/60 mt-12 pt-8 px-4 sm:px-6 md:px-8">
        {/* --- SECTION TITLE (Clean layout padding handles alignment now) --- */}
        <h3 className="text-lg font-bold tracking-tight text-stone-900 sm:text-xl md:text-2xl mb-4 sm:mb-6">
          Similar <span className="capitalize">{style}</span> Tubs
        </h3>

        <SimilarProductCard similarProducts={similarStyles} slug={slug} />
      </div>
    </>
  );
}

export default SimilarProducts;
