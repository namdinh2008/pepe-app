import React from "react";
import BorderPath from "../../assets/BorderPath/BorderPath.png";
import twtttt from "../../assets/Footer/twtttt.webp";
import PepeTitle from "../../assets/Navbar/PepeTitle.png";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="container-footer">
      <div className="border-page vw-100">
        <img src={BorderPath}></img>
      </div>
      <div className="wrap-footer">
      <div className="flex img-footer">
        <div>
          <img className="resire-1" src={twtttt}></img>
        </div>
        <div>
          <img className="resire-2" src={PepeTitle}></img>
        </div>
      </div>
      <div className="text-1f">
        <p className="css-text">
          $pepe coin has no association with Matt Furie or his creation Pepe the
          Frog. This token is simply paying homage to a meme we all love and
          recognize.
        </p>
      </div>
      <div className="text-2f">
        <p className="css-text">
          $PEPE is a meme coin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the coin is
          completely useless and for entertainment purposes only.
        </p>
      </div>
      </div>
      <div className="copyright">
        <p className="text-copy">© 2024 by Pepe. All rights reserved!</p>
      </div>
    </div>
  );
};

export default Footer;
