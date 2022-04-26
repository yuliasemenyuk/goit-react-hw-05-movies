import { getTrendingMovies } from "../../services/API";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./TrendingMovies.module.css";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movies);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={styles.movie_item}>
            <Link to={`movies/${movie.id}`} className={styles.movie_item_link}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
