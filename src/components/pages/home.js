import React, { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.from(".title-section", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.3,
      ease: "power1.out",
    });
    gsap.from(".home-image", {
      y: -80,
      rotate: 27,
      opacity: 0,
      duration: 1.4,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="home-page">
      <p className="home-title">
        <div className="title-section">
          My name is<br></br>
        </div>
        <div className="title-section">
          <span className="title-accent-1">Keegan Adams,</span>
        </div>
        <div className="title-section">
          and I am a <br></br>
        </div>
        <div className="title-section">
          <span className="title-accent-2">Full Stack </span>
        </div>
        <div className="title-section">developer.</div>
      </p>
      <div className="home-image">
        <img src="./images/portfolio.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
