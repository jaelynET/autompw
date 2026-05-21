import { getReviews } from "../_lib/data-service";
import ReviewCard from "./ReviewCard";

async function ProductReviews({ productId }) {
  const reviews = await getReviews(productId);

  // console.dir(reviews, { depth: "null" });

  return (
    <div>
      <h3 className="ml-3">Reviews</h3>
      <div>
        {reviews.map((allreviews) => (
          // <div key={allreviews.id}>
          //   <h3>MY REVIEW</h3>
          // </div>
          <div key={allreviews.id}>
            {allreviews.reviews.map((review) => (
              <div key={review.id} className="mt-2">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
