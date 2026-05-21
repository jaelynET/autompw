import Image from "next/image";
import Link from "next/link";

async function CustomerOrders({ orders }) {
  const { name, image } = orders;
  return (
    <div className="ml-5 cursor-pointer bg-grey-300">
      <div className="flex gap-3">
        <div className="relative h-20 w-30">
          <Image src={image} alt="Order image" className="object-cover" fill />
        </div>
        <div>
          {/* <span className="text-xs uppercase">{status}</span> */}
          <p className="text-sm">{name}</p>
        </div>
      </div>
      {/* <Link href={`/write-a-review/${id}`} className="">
        <button className=" bg-button py-2 px-3 cursor-pointer">
          <p>Write a review</p>
        </button>
      </Link> */}
    </div>
  );
}
export default CustomerOrders;
