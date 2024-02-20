import { useState } from "react";

import { Input, Select, TextArea } from "../../components/Input";

import addUserButton from "../../assets/Icons/add_user_button.png";
import addInput from "../../assets/Icons/add_input.svg";

import "./styles.css";

function NewPerson({ onAddPersonagem }) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [origem, setOrigem] = useState("");
  const [raca, setRaca] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleFile(e) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];
    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novoPersonagem = {
      id: Date.now(), // Pode usar uma lógica melhor para gerar IDs únicos
      avatarUrl,
      nome,
      altura,
      idade,
      origem,
      raca,
      tipo,
      descricao,
    };

    onAddPersonagem(novoPersonagem);
  }

  return (
    <div>
      {/* <h1 className="title">Novo Personagem</h1> */}
      <form className="form-style" onSubmit={handleSubmit}>
        <div>
          <label className="labelAvatar">
            <span>
              <img src={addInput} alt="" />
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />
            {avatarUrl && (
              <img
                className="preview"
                src={avatarUrl}
                alt="Foto do produto"
                width={250}
                height={250}
              />
            )}
          </label>
        </div>
        <div>
          <Input
            placeholder="Nome do Personagem"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <Input
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <Input
            placeholder="Origem"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
          <Input
            placeholder="Raça"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
          <Select
            placeholder="Selecione o Tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <TextArea
            placeholder="Descrição..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <button type="submit" className="button-style ">
            <img src={addUserButton} alt="" />
            Cadastrar Personagem
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPerson;
