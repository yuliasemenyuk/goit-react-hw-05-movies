import { getTrendingMovies } from "../../services/API";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./TrendingMovies.module.css";

export default function TrendingMovies() {
  // const {url} = useRouteMatch();
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
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
