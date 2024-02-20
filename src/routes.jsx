import { Routes, Route } from "react-router-dom";

import { heroisList } from "./util/herois";

import Home from "./pages/Home";
import NewPerson from "./pages/NewPerson";
import PersonDetail from "./pages/PersonDetail";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-person" element={<NewPerson />} />
      <Route path="/person/:id" element={<PersonDetail props={heroisList} />} />
    </Routes>
  );
}

export default Rotas;
