import BathtubList from "@/app/_components/BathubList";

import FilterItems from "@/app/_components/FilterItems";
import { getB, getBathtubs, getProductType } from "@/app/_lib/data-service";
import { Suspense, use } from "react";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { PAGE_SIZE } from "@/app/constants";
import Filters from "@/app/_components/Fliters";
import { array } from "zod";
import { getCategoryConfig } from "@/app/filters/config/getcategory";
import { buildfilters } from "@/app/filters/config/buildfilters";
import { normalizeProductType } from "@/app/filters/config/normalizeType";
import ProductGridSkeleton from "@/app/_components/ProductGridSkeleton";
import Link from "next/link";


// import { getB } from "@/app/_lib/data-client";

export const metadata = {
  title: `Bath Tubs`,
};

export default async function Page({ searchParams, params }) {
  const { collection, categorySlug } = await params;

  const searchParams2 = await searchParams;

  const productType = normalizeProductType(collection);

  const filterType = getCategoryConfig(productType);

  const filters = buildfilters(searchParams2, productType, categorySlug);
  const activeSort = filters.sort ?? "best_sellers";

  const page = Number(searchParams2.page) || 1;

  // const { data: products, count } = await getB(
  //   productType,
  //   filters,
  //   page,
  //   PAGE_SIZE,
  // );

  // const totalPages = Math.ceil(count / PAGE_SIZE);
  // console.dir(products, { depth: null });

  // console.log(products);
  // console.dir(data, { depth: null });
  // const products = props.searchParams?.products ?? "";

  return (
    <>
      {/* <div className="mt-5 flex ml-5 ">
        <ChevronDoubleRightIcon className="h-5 w-4 text-gray-950" />
        <h1 className="">bathtubs</h1>
      </div> */}
      {/* <div className="flex justify-end mr-8  ">
        <select className=" bg-primary-50 rounded-sm hover:bg-primary-100 cursor-pointer transition-colors px-1 py-2">
          <option>Best sellers</option>
        </select>

      </div> */}
      <main className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 md:mt-10 mb-20">
        {/* =================================================================
          CATEGORY INTRO BLOCK (Provides visual space & critical context)
         ================================================================= */}
        <header className="mb-8 md:mb-12 border-b border-stone-200/60 pb-6 md:pb-8">
          {/* Dynamic Breadcrumbs for clear path navigation tracking */}
          <nav className="flex items-center gap-1.5 text-xs text-stone-400 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-stone-600 cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-stone-600 font-medium">Collections</span>
          </nav>

          {/* Main Title Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl capitalize">
            {categorySlug}
          </h1>

          {/* Short, elegant category description copy */}
          <p className="mt-2 text-sm text-stone-500 max-w-xl leading-relaxed">
            Discover our collection of luxury architectural fixtures, designed
            with clean contours and deep soaking wells to transform your bath
            suite into a spa sanctuary.
          </p>
        </header>

        <section aria-label="Product Showcase">
       
            <BathtubList
              productType={productType}
              filters={filters}
              slug={categorySlug}
              page={page}
            />

        </section>
      </main>
    </>
  );
}
