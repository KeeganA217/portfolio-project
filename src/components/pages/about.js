import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  const skills = useRef(null);

  useEffect(() => {
    gsap.from(skills.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    });
    gsap.from(".icon", {
      y: 80,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      stagger: {
        amount: 0.2,
        from: "center",
      },
    });
  }, []);

  return (
    <div className="about-me-page">
      <h1 className="page-title">Get To Know Me</h1>
      <div className="home-card">
        <div className="photo-card">
          <img src="/images/photo 1.jpg" alt="image not found..." />
        </div>
        <div className="about-card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          delectus quaerat commodi obcaecati cumque animi reprehenderit aliquam
          nisi rem, eligendi deleniti eos! Pariatur, quam obcaecati? Hic ad
          tempora consectetur, accusamus culpa facere sunt, atque fugit rerum
          modi ipsa earum. Rem!
        </div>
      </div>
      <div className="skills-card" ref={skills}>
        <img src="/images/HTML.png" alt="HTML" className="icon" />
        <img src="/images/CSS.png" alt="CSS" className="icon" />
        <img src="/images/JS.png" alt="JS" className="icon" />
        <img src="/images/React.png" alt="React" className="icon" />
        <img src="/images/Node.png" alt="Node.js" className="icon" />
        <img src="/images/Mongo.png" alt="MongoDB" className="icon" />
        <img src="/images/Bootstrap.png" alt="Bootstrap" className="icon" />
      </div>
    </div>
  );
};

export default Home;
