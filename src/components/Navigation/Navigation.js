import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? styles.active_nav_link : styles.nav_link
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) =>
        isActive ? styles.active_nav_link : styles.nav_link
      }
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
