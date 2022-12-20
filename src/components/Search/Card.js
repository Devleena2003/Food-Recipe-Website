import React from "react";

function Card({ recipe }) {
  return (
    <div
      className="recipe-card"
      onClick={() => window.open(recipe["recipe"]["url"])}
    >
      <img className="recipe-img" src={recipe["recipe"]["image"]} />
      <p className="recipe-des">{recipe["recipe"]["label"]}</p>
    </div>
  );
  // );
}

export default Card;
