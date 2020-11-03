import React from "react";

const home = () => {
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
      <div className="skills-card">
        <img src="/images/HTML.png" alt="HTML" />
        <img src="/images/CSS.png" alt="CSS" />
        <img src="/images/JS.png" alt="JS" />
        <img src="/images/React.png" alt="React" />
        <img src="/images/Node.png" alt="Node.js" />
      </div>
    </div>
  );
};

export default home;
