import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".page-title", {
      opacity: 0,
      duration: 2,
    });
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
      y: 50,
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
          <h3 className="about-title-1">Some of my skills</h3>
          <ul className="skills-list">
            <li>React.JS</li>
            <li>React Hooks</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>JSON/JSX</li>
            <li>Bootstrap/Materialize</li>
            <li>Node.JS</li>
            <li>Express</li>
            <li>MongoDB/Mongoose</li>
            <li>PostgreSQL/PgAdmin</li>
            <li>MySQL/MySQL Workbench</li>
            <li>Git/Github</li>
            <li>JSON Web Tokens</li>
          </ul>
          <h3 className="about-title-1">What am I currently working on?</h3>
          <p>
            Right now I am building out a small real-time chat application using
            the MERN stack, practicing integrating SQL databases with frontend
            UI's, and as always, continuing to educate myself on modern
            technologies. Some of my goals for this year are to learn C#,
            next.js and improve upon my UI design skills so that I can really
            take my fullstack development to the next level.{" "}
            <Link to="/projects">See Projects</Link> or{" "}
            <Link to="/contact">Contact Me</Link>
          </p>
          <h3 className="about-title-1">A little about me..</h3>
          <p>
            I am 28 years old and currently residing in central Minnesota. Some
            of the things I like to do when im not coding is maybe work on some
            rennovations to my home, get in some exercise or spend time at my
            sisters farm. I am very comfortable working in a remote enviromnet
            if needed and I am also very used to collaborating with a team(s) of
            people on every project. I always get along with my peers and can
            typically be a great shoulder to lean on when someone needs some
            assistance. I pick up on new things rather quickly and I always look
            at criticism from others as an opportunity for growth.
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
        <img src="/images/postgres.png" alt="PostgreSQL" className="icon" />
        <img src="/images/Bootstrap.png" alt="Bootstrap" className="icon" />
        <img src="/images/Materialize.png" alt="Materialize" className="icon" />
        <img src="/images/gsap.png" alt="Greensock" className="icon" />
      </div>
    </div>
  );
};

export default Home;
