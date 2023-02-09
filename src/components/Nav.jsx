import React from "react";
import { Link } from "react-router-dom";
import svg from "../assets/image.me.jpg";
//import logo from "../assets/GFinder.png";
import logo from "../assets/GFinder.svg";

function Nav() {
  return (
    <div
      className="section-contain pt-4"
      style={{
        boxShadow: "0px 2px 4px rgba(0,0,0,0.13)",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">
        <nav className="section-container pt-4 navbar">
          <img src={svg} alt="logo" />
          <div className="main-logo">
            <img src={logo} alt="logo" />
          </div>
        </nav>
      </Link>
    </div>
  );
}

export default Nav;
