import React from "react";
import "./HowToBuy.css";
import CreateWallet from "../../assets/HowToBuy/CreateWallet.webp";
import Eth from "../../assets/HowToBuy/Eth.webp";
import GoToUniSwarp from "../../assets/HowToBuy/GoToUniSwarp.webp";
import Switch from "../../assets/HowToBuy/Switch.webp";
import BorderPath from "../../assets/BorderPath/BorderPath.png";
import PePeImg from "../../assets/HowToBuy/PePeImg.webp";

const HowToBuy = () => {
  return (
    <div className="box" id="howtobuy">
      <div className="border-page">
        <img src={BorderPath}></img>
      </div>
      <div className="pack">
        <h1>how to buy</h1>

        <div className="step-card">
          <div className="icon-wrapper">
            <img src={CreateWallet} alt="Wallet Icon"></img>
          </div>
          <div className="content">
            <h2>create a wallet</h2>
            <p>
              Download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="icon-wrapper">
            <img src={Eth} alt="ETH Icon"></img>
          </div>
          <div className="content">
            <h2>get some eth</h2>
            <p>
              Have ETH in your wallet to switch to $PEPE. If you don’t have any
              ETH, you can buy directly on Metamask, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="icon-wrapper">
            <img src={GoToUniSwarp} alt="Uniswap Icon"></img>
          </div>
          <div className="content">
            <h2>go to uniswap</h2>
            <p>
              Connect to Uniswap. Go to app.uniswap.org in google chrome or on
              the browser inside your Metamask app. Connect your wallet. Paste
              the $PEPE token address into Uniswap, select Pepe, and confirm.
              When Metamask prompts you for a wallet signature, sign.
            </p>
          </div>
        </div>

        <div className="step-card special-edit">
          <div className="icon-wrapper">
            <img src={Switch} alt="Switch Icon"></img>
          </div>
          <div className="content">
            <h2>Switch ETH for $PEPE</h2>
            <p>
              switch ETH for $PEPE. We have ZERO taxes so you don’t need to
              worry about buying with a specific slippage, although you may need
              to use slippage during times of market volatility.
            </p>
          </div>
        </div>
      </div>
      <div className="extras">
        <div className="extras-item">
        <div className="iframe-wrapper">
          <iframe
            title="Embedded Website"
            src="https://www-pepe-vip.filesusr.com/html/1f3f2b_d97dc6210ef477f566aeee9b168830b1.html"
          ></iframe>
        </div>
        <div className="image-wrapper">
          <img src={PePeImg} alt="Pepe" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;