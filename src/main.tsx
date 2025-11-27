import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./tailwind.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  </BrowserRouter>
);
