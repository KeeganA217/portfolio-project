import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <span className="initials">KA</span>
      </div>
      <ul>
        <li>
          <Link to="/">View Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Get in Touch</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;