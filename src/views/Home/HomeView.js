import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import styles from "./HomeView.module.css";

export default function HomeView() {
  return (
    <>
      <h1 className={styles.home_title}>Trending today</h1>
      <TrendingMovies />
    </>
  );
}
