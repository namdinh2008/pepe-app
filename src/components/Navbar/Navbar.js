import React, { useState } from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import PepeTitle from "../../assets/Navbar/PepeTitle.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsMobile(!isMobile); // Toggle mobile menu visibility
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobile(false);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="contai">
        <div className="img-header">
          <img src={PepeTitle} alt="logo" />
        </div>
        <ul
          className={isMobile ? "nav-links-mobile show" : "nav-links"}
          onClick={handleLinkClick} // Close the menu when a link is clicked
        >
          <li>
            <HashLink smooth to="#" className="home" onClick={handleLinkClick}>
              home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about" onClick={handleLinkClick}>
              about
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#howtobuy" onClick={handleLinkClick}>
              how to buy
            </HashLink>
          </li>
          <li>
            <a href="https://bridge.pepe.vip/" onClick={handleLinkClick}>
              bridge
            </a>
          </li>
          <li>
            <HashLink smooth to="#tokenomics" onClick={handleLinkClick}>
              tokenomics
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#roadmap" onClick={handleLinkClick}>
              roadmap
            </HashLink>
          </li>
        </ul>
        <button className="buy-now">buy now</button>

        <button className="mobile-menu-icon" onClick={handleClick}>
          <div className={`wap ${isOpen ? "change" : ""}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
