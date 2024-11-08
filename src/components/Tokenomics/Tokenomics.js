import React from 'react';
import './Tokenomics.css';
import pepememe from "../../assets/Tokenomics/pepememe.webp";
import BorderPath from "../../assets/BorderPath/BorderPath.png"

const Tokenomics = () => {
  return (
    <div className="container-fluid" id="tokenomics">
      <div className="border-page">
        <img src={BorderPath}></img>
      </div>
    <div className="tokenomics-container">
      {/* Title */}
      <h2 className="tokenomics-title">tokenomics</h2>

      <div className="box-content">
        {/* Token Supply */}
      <div className='content-text'>
      <div className="token-supply">
        <p className="supply-amount">token supply:</p>
        <h3 className="supply-amount">420,690,000,000,000</h3>
      </div>
      {/* Details Box */}
      <div className="details-box">
        <p>No Taxes, No Bullshit. It’s that simple.</p>
        <p>LP tokens are burnt, and contract ownership is renounced.</p>
      </div>
      </div>
        <div className="chart-circle">
          {/* Pepe Image */}
          <img src={pepememe} alt="Pepe" className="pepe-image" />
          </div>
      </div>
    </div>
    </div>
  );
};

export default Tokenomics;
