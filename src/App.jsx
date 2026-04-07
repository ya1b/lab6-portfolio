import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.body.className = dark ? "bg-dark text-white" : "";
  }, [dark]);

  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-3">
        <button className="btn btn-secondary mb-3" onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;