import ReviewForm from "@/app/_components/ReviewForm";
import StarRatings from "@/app/_components/StarRatings";
import { getBathtub } from "@/app/_lib/data-service";
import Image from "next/image";
export default function Page() {
  return <div className="p-10">Coming soon</div>;
}
// async function Page({ params }) {
//   const { productId } = await params;
//   // console.log(productId);
//   const bathtub = await getBathtub(productId);
//   const { image, name } = bathtub;

//   return (
//     <div className="ml-10 pt-5">
//       <div>
//         <div className="relative h-45 w-45 ">
//           <Image
//             src={image}
//             alt="Product image"
//             className="object-cover"
//             fill
//           />
//         </div>
//         <p>{name}</p>
//       </div>
//       <StarRatings productId={productId} />
//     </div>
//   );
// }
// export default Page;
