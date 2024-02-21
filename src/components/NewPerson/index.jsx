import { useState } from "react";

import { Input, Select, TextArea } from "../Input";

import addUserButton from "../../assets/Icons/add_user_button.png";
import addInput from "../../assets/Icons/add_input.svg";

import "./styles.css";

// eslint-disable-next-line react/prop-types
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
    let urlImagem = "/src/assets/img-heroi/" + imageAvatar.name;

    const novoPersonagem = {
      nome,
      altura,
      idade,
      origem,
      raca,
      tipo,
      descricao,
      urlImagem,
    };
    onAddPersonagem(novoPersonagem);

    setNome("");
    setDescricao("");
    setOrigem("");
    setTipo("");
    setAltura("");
    setAvatarUrl("");
    setIdade("");
    setRaca("");
  }
  return (
    <div>
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
            required
          />
          <Input
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
          <Input
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
          <Input
            placeholder="Origem"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            required
          />
          <Input
            placeholder="Raça"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
            required
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
            required
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
