import "./styles.css";

import { useLocation, useParams } from "react-router-dom";

function PersonDetail({ props }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const nome = queryParams.get("nome");
  const altura = queryParams.get("altura");
  const idade = queryParams.get("idade");
  const origem = queryParams.get("origem");
  const raca = queryParams.get("raca");
  const tipo = queryParams.get("tipo");
  const descricao = queryParams.get("descricao");
  const urlImagem = queryParams.get("urlImagem");

  const { name } = useParams();

  const personagem = props.find((p) => p.nome === name);

  return (
    <div className="person-detail-container">
      <div>
        {nome && <h1 className="person-name">{nome || personagem.nome}</h1>}
        <img
          src={urlImagem || personagem?.urlImagem}
          alt="Huck"
          className="person-image"
        />
      </div>
      <div>
        <p className="person-description">
          {descricao || personagem?.descricao}
        </p>

        <ul className="person-details-list">
          <li className="person-detail">
            <strong className="detail-label">Altura: </strong>
            {altura || personagem?.altura}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Idade: </strong>
            {idade || personagem?.idade}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Origem: </strong>
            {origem || personagem?.origem}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Raça: </strong>
            {raca || personagem?.raca}
          </li>
          <li className="person-detail">
            <strong className="detail-label">Tipo: </strong>
            {tipo || personagem?.tipo}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonDetail;
