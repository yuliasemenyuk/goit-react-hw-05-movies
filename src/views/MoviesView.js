import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchMovie } from "../services/API";
import { Link } from "react-router-dom";

export default function MoviesView() {
  const [serchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(null);

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
    setSearchQuery("");
    console.log(searchMovie(serchQuery));
  };

  // const gettingMoviesList = () => {
  //   useEffect(() => {

  //   },[movies])
  // }

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
          {" "}
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
