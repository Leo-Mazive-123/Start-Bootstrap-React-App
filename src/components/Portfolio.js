// src/components/Portfolio.js
import React from "react";

const Portfolio = () => {
  return (
    <div className="second">
      <h2 className="second-text">PORTFOLIO</h2>
      <img className="image2" src="images/blue-star.png" style={{ width: "200px" }} alt="Blue Star" />
      <div className="images-collection1">
        <img className="my-images" src="images/cake.png" style={{ width: "22%", borderRadius: "12px" }} alt="Cake" />
        <img className="my-images" src="images/circus.png" style={{ width: "22%", borderRadius: "12px" }} alt="Circus" />
        <img className="my-images" src="images/safe.png" style={{ width: "22%", borderRadius: "12px" }} alt="Safe" />
      </div>
      <div className="images-collection11">
        <img className="my-images" src="images/cabin.png" style={{ width: "22%", borderRadius: "12px" }} alt="Cabin" />
        <img className="my-images" src="images/game.png" style={{ width: "22%", borderRadius: "12px" }} alt="Game" />
        <img className="my-images" src="images/submarine.png" style={{ width: "22%", borderRadius: "12px" }} alt="Submarine" />
      </div>
    </div>
  );
};

export default Portfolio;
