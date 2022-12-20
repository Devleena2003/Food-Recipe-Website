import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Let's Start <span className="cook"> Cooking </span>
            <br />
            with Popular <span className="cook">Recipes</span>{" "}
          </h1>

          <Link to="/search">
            <button className="btn">Get Started </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
