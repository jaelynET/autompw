"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

function HandleCategoryClick({ categories, closeMenu }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  function handleMenu(slug) {
    startTransition(() => {
      router.push(`/collections/${slug}`);
      closeMenu((show) => !show);
    });
  }

  const bathtubsSubCategories = categories.filter(
    (c) => c.product_type === "bathtub",
  );

  const faucetSubCategories = categories.filter(
    (c) => c.product_type === "faucet",
  );

  const bathtubsMenuItems = [
    ...bathtubsSubCategories.map((c) => ({
      id: c.id,
      name: c.name,
      slug: `bathtubs/${c.slug}`,
    })),
    {
      id: "bathtubs-all",
      name: "Shop All",
      slug: "bathtubs",
      isVirtual: true,
    },
  ];

  const faucetsMenuItems = [
    ...faucetSubCategories.map((c) => ({
      id: c.id,
      name: c.name,
      slug: `faucets/${c.slug}`,
    })),
    {
      id: "faucetss-all",
      name: "Shop All",
      slug: "faucets",
      isVirtual: true,
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <h3 className="uppercase font-medium track-wide text-lg mb-1">
          Bathtubs
        </h3>
        {bathtubsMenuItems.map((category) => (
          <ul className="pl-9 mb-2" key={category.id}>
            <li>
              <button onClick={() => handleMenu(category.slug)}>
                <p
                  className={`text-sm cursor-pointer ${
                    category.isVirtual ? "font-medium" : ""
                  }`}
                >
                  {category.name}
                </p>
              </button>
            </li>
          </ul>
        ))}
      </div>
      {/* <div>
        <h3 className="uppercase font-medium track-wide text-lg mb-1">
          Faucets
        </h3>
        {faucetsMenuItems.map((category) => (
          <ul className="pl-9 mb-2" key={category.id}>
            <li>
              <button onClick={() => handleMenu(category.slug)}>
                <p
                  className={`text-sm ${
                    category.isVirtual ? "font-medium" : ""
                  }`}
                >
                  {category.name}
                </p>
              </button>
            </li>
          </ul>
        ))}
      </div> */}
    </div>
  );
}

export default HandleCategoryClick;
