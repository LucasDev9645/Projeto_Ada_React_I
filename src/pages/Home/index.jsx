import { useState } from "react";
import Card from "../../components/Card";

import SearchBar from "../../components/SearchBar";
import { heroisList } from "../../util/herois";

import "./styles.css";
import NewPerson from "../NewPerson";

function Home() {
  const [herois, setHerois] = useState(heroisList);
  const [filteredHerois, setFilteredHerois] = useState(heroisList);

  const handleDeleteHeroi = (id) => {
    const updatedHerois = herois.filter((heroi) => heroi.id !== id);
    setHerois(updatedHerois);
    setFilteredHerois(updatedHerois);
  };

  const handleSearch = (term) => {
    const filtered = herois.filter((heroi) =>
      heroi.nome.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredHerois(filtered);
  };

  const handleAddPersonagem = (novoPersonagem) => {
    setHerois([...herois, novoPersonagem]);
    setFilteredHerois([...herois, novoPersonagem]);
  };

  return (
    <div>
      <NewPerson onAddPersonagem={handleAddPersonagem} />
      <SearchBar onSearch={handleSearch} />
      <div className="home-container">
        {filteredHerois &&
          filteredHerois.map((heroi) => (
            <Card key={heroi.nome} props={heroi} onDelete={handleDeleteHeroi} />
          ))}
      </div>
    </div>
  );
}

export default Home;
