import { useState } from "react";

import "./styles.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    onSearch("");
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit} onReset={handleReset}>
      <button type="submit">🔎︎</button>
      <input
        type="text"
        placeholder="Nome do Personagem"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="reset">🗙</button>
    </form>
  );
}

export default SearchBar;
