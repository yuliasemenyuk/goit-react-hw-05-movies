import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchMovie } from "../services/API";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function MoviesView() {
  const [serchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  // console.log(navigate);

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (serchQuery.trim() === "") {
      toast.error("Search field can`t be empty!");
      return;
    }

    searchMovie(serchQuery).then((res) => {
      setMovies(res.data.results);
    });

    navigate({ ...location, search: `query=${serchQuery}` });

    setSearchQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={serchQuery}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="type to search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {movies && (
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${location.pathname}/${movie.id}`}>
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
