import { getTrendingMovies } from "../../services/API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TrendingMovies.module.css";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  // console.log(movies);

  return (
    <ul className={styles.trending_movies_list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={styles.trending_movie_item}>
            <Link
              to={`movies/${movie.id}`}
              className={styles.trending_movie_item_link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
