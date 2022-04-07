import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;
