import { getCategories } from "../_lib/data-service";

async function MenuItems() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      <p>category</p>
    </div>
  );
}

export default MenuItems;
