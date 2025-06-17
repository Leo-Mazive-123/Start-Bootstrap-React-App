// src/App.js
import React from "react";
import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;


