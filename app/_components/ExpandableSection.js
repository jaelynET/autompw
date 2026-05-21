import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" py-2">
      <div className="flex gap-3 items-center">
        <h2 className="font-bold">{title}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronUpIcon className="h-3 w-3 cursor-pointer" />
          ) : (
            <ChevronDownIcon className="h-3 w-3 cursor-pointer" />
          )}
        </button>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default ExpandableSection;
