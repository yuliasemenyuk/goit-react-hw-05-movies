import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/API";
import styles from "./ReviewsView.module.css";

export default function ReviewsView() {
  const [reviews, setReviews] = useState([]);
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
      {reviews.length === 0 ? (
        <p>There are no reviews for this film</p>
      ) : (
        <ul className={styles.review_list}>
          {reviews.map((review) => {
            return (
              <li key={review.id} className={styles.review_item}>
                <h3>{review.author}</h3>
                <span>{review.created_at.slice(0, 10)}</span>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
