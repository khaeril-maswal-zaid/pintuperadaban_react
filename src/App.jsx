import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import Page404 from "../src/Pages/Page404";
import Home from "../src/Pages/Home";
import SinglePage from "./Pages/SinglePage";

function App() {
  useEffect(() => {
    // Memuat jQuery
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    // Memuat Bootstrap
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js";
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    // Memuat Owl Carousel
    const owlCarouselScript = document.createElement("script");
    owlCarouselScript.src = "assets/lib/owlcarousel/owl.carousel.min.js";
    owlCarouselScript.async = true;
    document.body.appendChild(owlCarouselScript);

    // Memuat Template JavaScript
    const mainScript = document.createElement("script");
    mainScript.src = "assets/js/main.js";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      // Bersihkan script ketika komponen di-unmount
      document.body.removeChild(jqueryScript);
      document.body.removeChild(bootstrapScript);
      document.body.removeChild(owlCarouselScript);
      document.body.removeChild(mainScript);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
