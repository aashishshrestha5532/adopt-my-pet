import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Categories from "./pages/Categories";

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
  );
}

export default App;
