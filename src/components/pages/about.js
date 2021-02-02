import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            I am 28 years old and currently residing in central Minnesota. Some
            of the things I like to do when im not coding is maybe work on some
            rennovations to my home, get in some exercise or spend time at my
            sisters farm. Most would describe me as a pretty laid individual
            back but I like to think of myself as the hardest worker in the
            room. I always get along with my peers and can typically be a great
            shoulder to lean on when someone needs some assistance. I pick up on
            new things incredibly quick
          </p>
          <h3 className="about-title-1">Some of my skills</h3>
          <p>
            Currently I write my backend projects with Node.JS using various
            dependincies such as Express and JSON Web Tokens. I mostly integrate
            databases using MongoDB but I have also been experimeneting with
            PostgreSQL. As for the frontend, I do pretty much all of my projects
            in React.js with Javascript being my main language. I am familiar
            with React Hooks, several types of CSS frameworks as well as GSAP
            animations. A few other tools I use reguarly would inclu=de Postman,
            MongoDb Compass, PG Admin and also a fee hosting sites like Heroku
            and Netlify.
          </p>
          <h3 className="about-title-1">What am I currently working on?</h3>
          <p>
            Rigth now I am building out a small real-time chat application using
            the MERN stack, practicing integrating SQL databases with frontend
            UI's, and as always, continuing to educate myself on modern
            technologies. Some of my goals for this year are to learn python,
            next.js and improve upon my UI design skills so that I can really
            take my fullstack development to the next level.
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
