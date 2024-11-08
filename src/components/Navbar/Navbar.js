import React, { useState } from "react";
import "./Navbar.css"; // Create a separate CSS file for styling
import { HashLink } from 'react-router-hash-link';
import PepeTitle from "../../assets/Navbar/PepeTitle.png"


const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
      <nav className="navbar">
      <div className="contai">
      <div>
        <img src={PepeTitle} alt="logo"></img>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><HashLink smooth to="#" className="home">home</HashLink></li>
        <li><HashLink smooth to="#about">about</HashLink></li>
        <li><HashLink smooth to="#howtobuy">how to buy</HashLink></li>
        <li><a href="https://bridge.pepe.vip/">bridge</a></li>
        <li><HashLink smooth to="#tokenomics">tokenomics</HashLink></li>
        <li><HashLink smooth to="#roadmap">roadmap</HashLink></li>
      </ul>
      <button className="buy-now">Buy Now</button>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          <div className="packet">
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
