import { StarIcon } from "@heroicons/react/24/solid";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

function Stars({ averageRating }) {
  // console.log(averageRating);
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        // const isFilled = value <= averageRating;

        // const Star = isFilled <= averageRating ? StarSolid : StarIconO;

        // They should only be filled by the # of averageRating

        if (averageRating >= value) {
          return <StarIcon key={i} className="h-3 w-3 text-yellow-500" />;
        }

        if (averageRating >= value - 0.5) {
          return (
            <FaRegStarHalfStroke key={i} className="h-3 w-3 text-yellow-500" />
          );
        }

        return <StarOutline key={i} className="h-3 w-3 text-gray-300" />;

        //   return (
        //     <Star
        //       key={i}
        //       className={`h-3 w-3 ${
        //         isFilled ? "text-yellow-500" : "text-gray-300"
        //       } `}
        //     />
        //   );
      })}
    </div>
  );
}

export default Stars;
