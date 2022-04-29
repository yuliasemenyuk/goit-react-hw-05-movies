import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/API";
import styles from "./CastView.module.css";

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
        <ul className={styles.cast_list}>
          {cast.map((character) => {
            return (
              <li key={character.id} className={styles.cast_item}>
                {character.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${character.profile_path}`}
                    alt={character.name}
                    className={styles.cast_image}
                  />
                ) : (
                  <img
                    src="https://sd.keepcalms.com/i/sorry-no-picture-available-2.png"
                    alt={character.name}
                    width="92px"
                    height="138px"
                  />
                )}
                <p className={styles.cast_character}>{character.character}</p>
                <p className={styles.cast_actor}>{character.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
