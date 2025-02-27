// import { useState } from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./css/App.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Imprint from "./components/pages/Imprint/Imprint";
import Privacy from "./components/pages/Privacy/Privacy";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
        {/* <Home />
        <About />
        <Contact />
        <Imprint /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
