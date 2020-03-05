import React from "react";
import Pikachu from "../../assets/images/pokemon.png";

const Landing = () => {
  return (
    <div>
      <h1>I am Pikachu</h1>
      <img src={Pikachu} style={{ width: "35%" }} alt="pikachu" />
    </div>
  );
};

export default Landing;
