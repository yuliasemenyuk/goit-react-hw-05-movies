import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchMovie } from "../../services/API";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styles from "./MoviesView.module.css";

export default function MoviesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const location = useLocation();
  // console.log(location);

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      return toast.error("Search field can't be empty!");
    }

    setSearchParams({ query: searchQuery });

    setSearchQuery("");
  };

  useEffect(() => {
    if (query) {
      searchMovie(query).then((data) => {
        const {
          data: { results },
        } = data;
        if (results.length === 0) {
          return toast.error(
            "Sorry, there are no movies. Try another request..."
          );
        }
        setMovies(results);
      });
    }
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          className={styles.search_input}
          onChange={handleChange}
          value={searchQuery}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="type to search movies..."
        />
        <button type="submit" className={styles.search_btn}>
          Search
        </button>
      </form>

      {movies && (
        <ul className={styles.movies_list}>
          {movies.map((movie) => {
            return (
              <li key={movie.id} className={styles.movie_item}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  className={styles.movie_item_link}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
