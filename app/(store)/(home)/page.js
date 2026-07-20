import { product } from "@/app/constants";
import ProductBox from "@/app/_components/ProductBox";

export async function generateMetadata() {
  return {
    title: product.seo.meta_title,
    description: product.seo.meta_description,
  };
}

export default function Page() {
  return (
    <main className="flex-1 min-h-screen">
      <ProductBox />
    </main>
  );
}
