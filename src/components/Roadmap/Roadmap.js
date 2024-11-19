import React from 'react';
import "./Roadmap.css";
import BorderPath from "../../assets/BorderPath/BorderPath.png";
import pepepissingnobackground from "../../assets/Roadmap/pepepissingnobackground.webp";
import pepemc from "../../assets/Roadmap/pepemc.webp";

const Roadmap = () => {
  return (
    <div className='container-fluid' id="roadmap">
        <div className="border-page">
            <img src={BorderPath}></img>
        </div>
        <div className='container'>
            <div className='img-bg order-0'><img className='photo-resire' src={pepepissingnobackground}></img></div>
            <div className='order-1'>
                <h2 className="text-title">roadmap</h2>
                <div className="phase-box">
                    <p>Phase 1: Meme</p>
                    <p>Phase 2: Vipe and HOLD</p>
                    <p>Phase 3: Meme Takeover</p>
                </div>
            </div>
            <div className='img-bg order-2'><img className='photo-resire' src={pepemc}></img></div>
        </div>
    </div>
  )
}

export default Roadmap