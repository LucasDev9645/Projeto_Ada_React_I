import { Link } from "react-router-dom";

import logo from "../../assets/logo/logoHeroi.png";

import "./styles.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-title">
        <img
          src={logo}
          alt="Logo Marvel"
          title="Logo Marvel"
          aria-label="Logo Marvel"
        />
        <h1>
          <span>M</span>arvel
        </h1>
      </div>
      <nav role="navigation">
        <ul className="nav-list">
          <li>
            <Link to="/" aria-label="Ir para a página Início">
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/new-person"
              aria-label="Ir para a página Novo Personagem"
            >
              Novo Personagem
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
