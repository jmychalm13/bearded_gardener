import "./App.css";
import { Content } from "./Content";
import { Header } from "./Header";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
