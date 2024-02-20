import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Rotas from "./routes";

import "./styles/globalStyles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Rotas />
      </main>
    </BrowserRouter>
  );
}

export default App;
