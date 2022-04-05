import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}
