import React from "react";

function Navbar() {
  return (
    <section id="home">
      <nav className="header">
        <h1 className="logo">
          <a className="link" href="/#home">
            Food Recipe
          </a>
        </h1>
        <ul className="main-nav">
          <li>
            <a className="link" href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="/#Explore">
              Explore
            </a>
          </li>
          <li>
            <a className="link" href="/#footer">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
