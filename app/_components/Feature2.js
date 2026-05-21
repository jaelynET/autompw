import Link from "next/link";

function Feature2() {
  return (
    <section className="px-4 md:px-8">
      <div className="rounded-xl bg-[#72665a] py-8 md:py-12 text-center">
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
          Shop New Arrivals
        </h3>

        <Link
          href={"/collections/bathtubs/freestanding"}
          className="bg-white text-black px-6 py-3 rounded-md font-medium"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Feature2;
