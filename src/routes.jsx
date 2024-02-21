import { Routes, Route } from "react-router-dom";

import { heroisList } from "./util/herois";

import Home from "./pages/Home";
import PersonDetail from "./pages/PersonDetail";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/person/:name"
        element={<PersonDetail props={heroisList} />}
      />
    </Routes>
  );
}

export default Rotas;
