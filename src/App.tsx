import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

type Page = "home" | "about" | "contact";

const App: React.FC = () => {
  const [currentPage, setPage] = useState<Page>("home");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header com controle de página */}
      <Header currentPage={currentPage} setPage={setPage} />

      {/* Conteúdo principal */}
      <main className="flex-grow">
        {currentPage === "home" && <Home setPage={setPage} />}
        {currentPage === "about" && <About />}
        {currentPage === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
