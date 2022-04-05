import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <AppBar />

      {/* <Route path="/" exact>
        <HomeView />
      </Route>

      <Route path="/movies">
        <MoviesView />
      </Route> */}

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
      </Routes>
    </div>
  );
}

// <Routes>
// <Route path="/" element={<Layout />}>
//   <Route path="invoices" element={<Invoices />} />
//   <Route path="dashboard" element={<Dashboard />} />
// </Route>
// </Routes>
