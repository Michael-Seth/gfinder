import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 section-container flex justify-center h-12">
      <h3>
        By{" "}
        <Link
          className="p-1 bg-black text-white"
          to="https://twitter.com/michaelosas78"
          target="_blank"
          rel="noopener noreferrer"
        >
          @michaelosas78
        </Link>{" "}
      </h3>
    </footer>
  );
}

export default Footer;
