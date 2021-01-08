import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const skills = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(skills.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    });
    gsap.from(".icon", {
      scrollTrigger: {
        trigger: "icon",
        toggleActions: "restart",
      },
      y: 80,
      opacity: 0,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
      stagger: {
        amount: 0.2,
        from: "center",
      },
    });
    gsap.from(".about-card", {
      y: 80,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="about-me-page">
      <div className="page-title">
        <h1>What Would You Like To Know?</h1>
      </div>
      <div className="about-card-main">
        <div className="about-card">
          <h3 className="about-title-1">A little about me..</h3>
          <p>
            I am 27 years old and currently residing in central Minnesota. Some
            of the things I like to do when im not coding is maybe work on some
            rennovations to my home, get in some exercise or spend time at my
            sisters farm. Most would describe me as laid back but I like to
            think of myself as the hardest worker in the room. I always get
            along with my peers and
          </p>
          <h3 className="about-title-1">Some of my skills</h3>
          <p>
            I am 27 years old and currently residing in central Minnesota. Some
            of the things I like to do when im not coding is maybe work on some
            rennovations to my home, get in some exercise or spend time at my
            sisters farm.
          </p>
          <h3 className="about-title-1">What am I currently working on?</h3>
          <p>
            Rigth now I am building out a small eCommerce site using the MERN
            stack, practicing integrating SQL databases with frontend UI's, and
            as always, continuing to educate myself on modern technologies. Some
            of my goals for this year are to learn python and next.js and
            improve UI design to really take my fullstack development to the
            next level.
          </p>
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
        <img src="/images/Materialize.png" alt="Materialize" className="icon" />
        <img src="/images/gsap.png" alt="Greensock" className="icon" />
        <img src="/images/postgres.png" alt="PostgreSQL" className="icon" />
      </div>
    </div>
  );
};

export default Home;
