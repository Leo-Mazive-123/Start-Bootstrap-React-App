import React from "react";

import Cake from "./PortfolioImages/Cake";
import Circus from "./PortfolioImages/Circus";
import Safe from "./PortfolioImages/Safe";
import Cabin from "./PortfolioImages/Cabin";
import Game from "./PortfolioImages/Game";
import Submarine from "./PortfolioImages/Submarine";

const Portfolio = () => {
  return (
    <div className="second">
      <h2 className="second-text">PORTFOLIO</h2>
      <img
        className="image2"
        src="images/blue-star.png"
        style={{ width: "200px" }}
        alt="Blue Star"
      />
      <div className="images-collection1">
        <Cake />
        <Circus />
        <Safe />
      </div>
      <div className="images-collection11">
        <Cabin />
        <Game />
        <Submarine />
      </div>
    </div>
  );
};

export default Portfolio;

