import { useState } from "react";
import { toast } from "react-toastify";

export default function MoviesView({ onSubmit }) {
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
        <button type="submit">Search</button>
      </form>
    </>
  );
}
