import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "10da0ab85bfd05885200cf46ca6575c7";

export async function getTrendingMovies() {
  return await axios.get(
    `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=1`
  );
}

export async function getMovieItem(movieId) {
  return await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}

export async function getMovieReviews(movieId) {
  return await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}

export async function getMovieCast(movieId) {
  return await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

// serchMovie

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

// // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
