import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-fixed scroll-smooth"
      style={{ backgroundImage: "url('/img/BG001.png')" }}
    >
      <div>
        <Navbar />
        {/* <div>
          <ProgressBar />
        </div> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
