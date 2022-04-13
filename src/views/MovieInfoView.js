import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovieItem } from "../services/API";

export default function MovieInfoView() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoad(true);

    getMovieItem(movieId).then((data) => {
      const {
        data: {
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
    //   .catch((error) => {
    //     return toast.error("There is no movie on this page!");
    //   })
    //   .finally(() =>
    //     setTimeout(() => {
    //       setLoad(false);
    //     }, 1000)
    //   );
  }, [movieId]);

  console.log(movie);
  console.log(movieId);

  return (
    <>
      <h1>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h1>
      <img src={movie.poster_path} alt={movie.name}></img>
      <p>User score: {movie.vote_average}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>{movie.genresValues}</p>
      <h3>Additional information</h3>
      <Link to="/">Cast</Link>
      <Link to="">Reviews</Link>
    </>
  );
}
