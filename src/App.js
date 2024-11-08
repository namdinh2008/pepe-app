import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Roadmap from "./components/Roadmap/Roadmap";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HomePage />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

