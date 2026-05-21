import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const getBathtubs = async function (from, to) {
  const { data, count, error } = await supabase
    .from("products")
    .select("id,name,regularPrice,discount,lengths,image,priceId", {
      count: "exact",
    })
    .order("id")
    .range(from, to);

  if (error) {
    console.error(error);
    throw new Error("Bathtubs could not be loaded");
  }

  return { data, count };
};
