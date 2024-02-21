import "./styles.css";

import Button from "../Button";
import strengthIcon from "../../assets/Icons/strength_button.png";
import trashIcon from "../../assets/Icons/trash_button.png";
import { Link } from "react-router-dom";

function Card({ props, onDelete }) {
  function handleDeleteClick() {
    onDelete(props.nome);
  }

  return (
    <article className="card-container" role="group">
      <img
        src={props.urlImagem}
        alt="Homem Aranha"
        className="card-image"
        role="img"
      />
      <div className="card-content">
        <h2 className="card-title">{props.nome}</h2>
        <p className="card-description">{props.descricao}</p>
      </div>

      <Button>
        <Link to={`/person/${props.nome}`}>
          <img src={strengthIcon} alt="Icone de detalhes personagem" />
          Ver Detalhes
        </Link>
      </Button>

      <Button onClick={handleDeleteClick}>
        <img src={trashIcon} alt="icone de lixeira" />
        Remover
      </Button>
    </article>
  );
}

export default Card;
