import Image from "next/image";

function Feature1({ comfortTubs }) {
  const { image } = comfortTubs;
  return (
    <div className="font-bold">
      <p className="ml-3 md:ml-5 md:text-lg">Design for comfort</p>
      <div className="grid grid-cols-2 ml-2 md:ml-5 md:justify-items-center">
        {comfortTubs.map((tub) => (
          <div className="relative w-35 h-35 mb-3 md:w-50 md:h-64" key={tub.id}>
            <Image src={tub.image} alt="tub" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature1;
