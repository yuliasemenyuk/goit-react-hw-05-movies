import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AppBar from "./components/AppBar/AppBar";
import HomeView from "./views/Home/HomeView";
import MoviesView from "./views/Movies/MoviesView";
import NotFoundView from "./views/NotFound/NotFoundView";
import MovieInfoView from "./views/MovieInfo/MovieInfoView";
import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className={styles.App}>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route path="/movies/:movieId/*" element={<MovieInfoView />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
