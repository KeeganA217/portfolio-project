import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const logo = useRef(null);

  useEffect(() => {
    gsap.from(logo.current, {
      opacity: 0,
      duration: 1.8,
      x: -150,
      ease: "power2",
    });
    gsap.from(".change", {
      opacity: 0,
      duration: 1.5,
      y: -130,
      ease: "power2",
      stagger: 0.2,
    });
  }, []);

  return (
    <header className="header">
      <div className="logo" ref={logo}>
        <span className="initials">KA</span>
      </div>
      <ul>
        <li className="change">
          <NavLink
            to="/"
            exact
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
            View Projects
          </NavLink>
        </li>
        <li className="change">
          <NavLink
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
            About Me
          </NavLink>
        </li>
        <li className="change">
          <NavLink
            to="/contact"
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
            Get in Touch
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
