import React from "react";
import "./App.css";

// Routing
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
