import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

function ProductSpecs({ product, selectedVariant }) {
  const {
    brand,
    manufacturer_part_number,
    installation_type,
    material,
    assembly_required,
    installation_required,
    upc,
  } = selectedVariant;
  return (
    <ul>
      <div className="flex gap-3">
        <span>Brand:</span>
        <li>{product.brand}</li>
      </div>
      <div className="flex gap-3">
        <span>Part Number:</span>
        <li>{manufacturer_part_number}</li>
      </div>
      <div className="flex gap-3">
        <span>Material:</span>
        <li>{product.material}</li>
      </div>
      <div className="flex gap-3">
        <span>Assembly Required:</span>
        <li>{`${product.assembly_required ? "Yes" : "No"}`}</li>
      </div>
      <div className="flex gap-3">
        <span>Installation Required:</span>
        <li>{`${product.installation_required ? "Yes" : "No"}`}</li>
      </div>
      <div className="flex gap-3">
        <span>Warranty:</span>
        <li>{`${product.warranty_length} Year Limited`}</li>
      </div>
      <div className="flex gap-3">
        <span>UPC:</span>
        <li>{upc}</li>
      </div>
    </ul>
  );
}

export default ProductSpecs;
