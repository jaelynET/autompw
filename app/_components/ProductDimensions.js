import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ProductDimensions({ product, selectedVariant }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    overall_length,
    overall_width,
    overall_height,
    soaking_depth,
    water_capacity,
    weight,
    drain_location,
  } = selectedVariant;
  return (
    <ul>
      <div className="flex gap-3">
        <span>Overall Length:</span>
        <li>{overall_length} in</li>
      </div>
      <div className="flex gap-3">
        <span>Overall Width:</span>
        <li>{overall_width} in</li>
      </div>
      <div className="flex gap-3">
        <span>Overall Height:</span>
        <li>{overall_height} in</li>
      </div>
      <div className="flex gap-3">
        <span>Soaking Depth:</span>
        <li>{soaking_depth} in</li>
      </div>
      <div className="flex gap-3">
        <span>Water Capacity:</span>
        <li>{water_capacity} lbs</li>
      </div>
      <div className="flex gap-3">
        <span>Weight:</span>
        <li>{weight} lbs</li>
      </div>
      {/* <div className="flex gap-3">
        <span>Drain Location:</span>
        <li>{product.drain_location}</li>
      </div> */}
    </ul>
  );
}

export default ProductDimensions;
