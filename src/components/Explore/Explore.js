import React from "react";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <section id="Explore">
      <div className="container-header">
        <h1>Trending Recipes</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Recipe One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Recipe Two</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Recipe Three</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ex-btn">
        <Link to="/Search">
          {" "}
          <button className="btn">See More</button>
        </Link>
      </div>
    </section>
  );
}

export default Explore;
