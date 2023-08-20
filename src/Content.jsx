import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Categories } from "./categories";
import { Alocasia } from "./Alocasia";

export function Content() {
  return (
    <div id="content" className="container">
      <Routes>
        <Route path="/alocasia" element={<Alocasia />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
