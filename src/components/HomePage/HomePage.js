// HomePage.js
import React from "react";
import "./HomePage.css"; // Custom CSS for styling
import { FaGem, FaWallet } from "react-icons/fa";
import TitleHome from "../../assets/HomePage/TitleHome.webp";
import TwitterIcon from "../../assets/HomePage/TwitterIcon.webp";
import TelgrrgrgrgrIcon from "../../assets/HomePage/TelgrrgrgrgrIcon.webp";
import DextoolsIcon from "../../assets/HomePage/DextoolsIcon.webp";
import EtherscanIcon from "../../assets/HomePage/EtherscanIcon.webp";
import CmcIcon from "../../assets/HomePage/CmcIcon.webp";
import UniswapIcon from "../../assets/HomePage/UniswapIcon.webp";
import BinanceIcon from "../../assets/HomePage/icon-platform/BinanceIcon.webp";
import BybitIcon from "../../assets/HomePage/icon-platform/BybitIcon.webp";
import CbWalletIcon from "../../assets/HomePage/icon-platform/CbWalletIcon.webp";
import CryptoIcon from "../../assets/HomePage/icon-platform/CryptoIcon.png";
import GeminiIcon from "../../assets/HomePage/icon-platform/GeminiIcon.webp";
import HtxIcon from "../../assets/HomePage/icon-platform/HtxIcon.webp";
import KucoinIcon from "../../assets/HomePage/icon-platform/KucoinIcon.webp";
import OkxIcon from "../../assets/HomePage/icon-platform/OkxIcon.webp";
import UniswapsIcon from "../../assets/HomePage/icon-platform/UniswapsIcon.webp";

const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <div className="bg"></div>
      <div className="carton">
        <div className="flex car gap-2">
          <div className="ton">
            <h1 className="title">
              $pepe
            </h1>
            <p className="description">
              The most memeable memecoin in existence. The dogs have had their
              day, it's time for Pepe to take reign.
            </p>
            <div className="flex connect-icon">
              <div>
                <a href="#">
                  <img src={TwitterIcon}></img>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={TelgrrgrgrgrIcon}></img>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={DextoolsIcon}></img>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={EtherscanIcon}></img>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={CmcIcon}></img>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={UniswapIcon}></img>
                </a>
              </div>
            </div>
          </div>
          <div className="image-home">
            <img className="title-image" src={TitleHome}></img>
          </div>
        </div>

        <div className="platforms">
          <button className="platform-btn"><div className="name-class">gemini</div><div><img className="icon-plf" src={GeminiIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">binance</div><div><img className="icon-plf" src={BinanceIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">crypto.com</div><div><img className="icon-plf" src={CryptoIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">htx</div><div><img className="icon-plf" src={HtxIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">bybit</div><div><img className="icon-plf" src={BybitIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">okx</div><div><img className="icon-plf" src={OkxIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">cb wallet</div><div><img className="icon-plf" src={CbWalletIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">kucoin</div><div><img className="icon-plf" src={KucoinIcon}></img></div></button>
          <button className="platform-btn"><div className="name-class">uniswap</div><div><img className="icon-plf" src={UniswapsIcon}></img></div></button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
