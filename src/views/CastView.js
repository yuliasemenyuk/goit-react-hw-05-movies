import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../services/API";

export default function CastView() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then((res) => {
      setCast(res.data.cast);
    });
  }, []);

  // console.log(getMovieCast(movieId));
  // console.log(cast);

  return (
    <>
      {cast && (
        <ul>
          {cast.map((character) => {
            return (
              <li key={character.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w92${character.profile_path}`}
                  alt={character.name}
                />
                <p>{character.character}</p>
                <p>{character.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
