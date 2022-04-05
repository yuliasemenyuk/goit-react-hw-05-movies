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
  console.log(movies);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to="/">{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
