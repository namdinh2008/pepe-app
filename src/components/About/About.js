import React from "react";
import mmga1 from "../../assets/About/mmga1.webp";
import "./About.css";
import BorderPath from "../../assets/BorderPath/BorderPath.png"

const About = () => {
  return (
    <section className="background" id="about">
        <img className="full" src={BorderPath}></img>
      <div className="d-flex main">
        <div className="order-2 img-about">
          <img src={mmga1}></img>
        </div>
        <div className="order-1"> 
          <h1 className="header-text">about</h1>
          <p className="review">
            Pepe is tired of watching everyone play hot potato with the endless
            derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s
            have had their day. It’s time for the most recognizable meme in the
            world to take his reign as king of the internet.
          </p>
          <p className="review">
            Pepe is here to make memecoins great again. Launched stealth with no
            presale, zero taxes, LP burnt and contract renounced, $PEPE is a
            coin for the people, forever. Fueled by pure memetic power, let
            $PEPE show you the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
