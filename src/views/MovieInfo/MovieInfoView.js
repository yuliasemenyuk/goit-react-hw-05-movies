import { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  useParams,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import { getMovieItem } from "../../services/API";
import CastView from "../Cast/CastView";
import ReviewsView from "../Reviews/ReviewsView";
import styles from "./MovieInfoView.module.css";

export default function MovieInfoView() {
  const { movieId } = useParams();

  const location = useLocation();
  const grandPath = useRef(location);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieItem(movieId).then((data) => {
      const {
        data: {
          id,
          poster_path,
          release_date,
          title,
          name,
          overview,
          vote_average,
          genres,
        },
      } = data;

      setMovie({
        id,
        poster_path,
        release_date,
        title,
        name,
        overview,
        vote_average,
        genresValues:
          genres.length === 0
            ? "There are no genres"
            : genres.map(({ name }) => [name]).join(", "),
      });
    });
    localStorage.setItem("movie", JSON.stringify(movie));
  }, [movieId]);
  // conle.log(movie);
  // console.log(movieId);

  return (
    <>
      <Link
        to={grandPath.current?.state?.from ?? `/`}
        state={{ from: grandPath.current }}
      >
        {" "}
        &#8592; Go back
      </Link>

      {movie && (
        <>
          <h1>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h1>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            ></img>
          ) : (
            <img
              src="https://sd.keepcalms.com/i/sorry-no-picture-available-2.png"
              alt={movie.title}
              width="300px"
              height="450px"
            />
          )}
          <p>User score: {movie.vote_average}</p>
          <h2 className={styles.base_info_title}>Overview</h2>
          <p>{movie.overview}</p>
          <h2 className={styles.base_info_title}>Genres</h2>
          <p>{movie.genresValues}</p>
          <h3 className={styles.details_title}>Additional information</h3>
          <NavLink
            to={`/movies/${movieId}/cast`}
            state={{ from: grandPath.current }}
            className={styles.deteils_links}
          >
            Cast
          </NavLink>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: grandPath.current }}
            className={styles.deteils_links}
          >
            Reviews
          </NavLink>
        </>
      )}
      <Routes>
        <Route path="cast" element={<CastView />} />
        <Route path="reviews" element={<ReviewsView />} />
      </Routes>
    </>
  );
}
