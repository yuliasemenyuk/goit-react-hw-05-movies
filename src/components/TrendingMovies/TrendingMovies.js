import { getTrendingMovies } from "../../services/API";
import { useEffect, useState } from "react";

export default function TrendingMovies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {}, []);

  // getTrendingMovies().then((res) => {
  //     const Movies = res.data.hits.map(
  //       ({ id, title }) => {
  //         return { id, title };
  //       }
  //     )});
  // if (NewImages.length === 0) {
  //   setLoading(false);
  //   return toast.error("There is no picture with that name!");
  // }

  // setImages((prevImages) => [...prevImages, ...NewImages]);
  // setLoading(false);
  return <ul></ul>;
}
