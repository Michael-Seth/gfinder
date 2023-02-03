import React from "react";
import { Link } from "react-router-dom";
import svg from "../assets/cartoon-me.jpeg";

function Nav() {
  return (
    <div className="section-container pt-4">
      <Link to="/">
        <nav className="section-container pt-4 navbar">
          <img src={svg} alt="logo" />
          <h4>
            <span>G&nbsp;</span>Finder
          </h4>
        </nav>
      </Link>
    </div>
  );
}

export default Nav;
