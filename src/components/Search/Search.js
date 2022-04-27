import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Search.module.css";
// import { searchMovie } from "../../services/API"

export default function Search({ onSubmit }) {
  const [serchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (serchQuery.trim() === "") {
      toast.error("Search field can`t be empty!");
      return;
    }

    onSubmit(serchQuery);
    setSearchQuery("");
    // console.log(searchMovie(serchQuery));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={serchQuery}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="type to search movies..."
        />
        <button type="submit" className={styles.search_btn}>
          Search
        </button>
      </form>
    </>
  );
}
