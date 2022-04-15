import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/API";

export default function ReviewsView() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then((res) => {
      setReviews(res.data.results);
    });
  }, []);

  // console.log(getMovieReviews(movieId));
  // console.log(reviews);

  return (
    <>
      {
        reviews && (
          <ul>
            {reviews.map((review) => {
              return (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <span>{review.created_at.slice(0, 10)}</span>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        )
        // <p>There are no reviews for this film</p>
      }
    </>
  );
}
