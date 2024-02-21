import "./styles.css";

import { useParams } from "react-router-dom";

function PersonDetail({ props }) {
  const { name } = useParams();
  const personagem = props.find((p) => p.nome === name);
  return (
    <div className="person-detail-container">
      <div>
        <h1 className="person-name">{personagem.nome}</h1>
        <img src={personagem.urlImagem} alt="Huck" className="person-image" />
      </div>
      <div>
        <p className="person-description">{personagem.descricao}</p>

        <ul className="person-details-list">
          <li className="person-detail">
            <strong className="detail-label">Altura: </strong>
            {personagem.altura}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Idade: </strong>
            {personagem.idade}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Origem: </strong>
            {personagem.origem}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Raça: </strong>
            {personagem.raca}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Tipo: </strong>
            {personagem.tipo}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonDetail;
