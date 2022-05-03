import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "./components/AppBar/AppBar";
import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

const HomeView = lazy(() => import("./views/Home/HomeView"));
const MoviesView = lazy(() => import("./views/Movies/MoviesView"));
const MovieInfoView = lazy(() => import("./views/MovieInfo/MovieInfoView"));

export default function App() {
  return (
    <div className={styles.App}>
      <AppBar />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/movies/:movieId/*" element={<MovieInfoView />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
