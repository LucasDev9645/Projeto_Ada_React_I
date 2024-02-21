import { useState } from "react";

import SearchBar from "../../components/SearchBar";
import NewPerson from "../../components/NewPerson";
import Card from "../../components/Card";

import { heroisList } from "../../util/herois";

import "./styles.css";

function Home() {
  const [herois, setHerois] = useState(heroisList);
  const [filteredHerois, setFilteredHerois] = useState(heroisList);

  const handleDeleteHeroi = (nome) => {
    const updatedHerois = herois.filter((heroi) => heroi.nome !== nome);
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
