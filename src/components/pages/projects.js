import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".page-title", {
      opacity: 0,
      duration: 2,
    });
    gsap.from(".project-a", {
      opacity: 0,
      duration: 1.5,
      y: 150,
      ease: "power1",
    });
    gsap.from(".project-b", {
      opacity: 0,
      duration: 1.5,
      y: 150,
      ease: "power1",
      scrollTrigger: {
        trigger: ".project-b",
        start: "top 90%",
      },
    });
    gsap.from(".project-c", {
      opacity: 0,
      duration: 1.5,
      y: 150,
      ease: "power1",
      scrollTrigger: {
        trigger: ".project-c",
        start: "top 90%",
      },
    });
    gsap.from(".project-d", {
      opacity: 0,
      duration: 1.5,
      y: 150,
      ease: "power1",
      scrollTrigger: {
        trigger: ".project-d",
        start: "top 90%",
      },
    });
    gsap.from(".click", {
      opacity: 0,
      x: 100,
      stagger: 0.3,
      delay: 0.3,
      duration: 1.2,
    });
  }, []);

  return (
    <div className="projects-page">
      <div className="page-title">
        <h1>Just A Few Samples..</h1>
      </div>
      <section className="project project-a">
        <div className="project-left">
          <img
            src="/images/TeamSolve.png"
            alt="TeamSolve"
            className="project-image"
          />
        </div>
        <div className="project-right">
          <p>
            <h4>
              <strong>TeamSolve</strong>
            </h4>
            This is a fullstack application that I have hosted with heroku. The
            backend is constructed with node.js and utilizes various
            dependencies such as express. It comes complete with user
            authentication and authorization using JSON web tokens and uses
            mongoose to connect to the database created in MongoDB. All state is
            namahged with the Context API and functional components were used in
            order to implement react hooks throughout. The frontend was all
            written in React.js and combined with Materialize CSS.
          </p>
          <a
            href="https://github.com/KeeganA217/update-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            Source Code/README
          </a>
          <a
            href="https://tranquil-escarpment-62264.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            View Live Project
          </a>
        </div>
      </section>
      <section className="project project-b">
        <div className="project-left">
          <img
            src="/images/recipe-rolodex.png"
            alt="The Recipe Rolodex"
            className="project-image"
          />
        </div>
        <div className="project-right">
          <p>
            <h4>
              <strong>The Recipe Rolodex</strong>
            </h4>
            This project is an example of a frontend application written in
            React.js, using Axios to make http requests to connect to the Edamam
            food database API. Upon searching for a recipe or ingredient, the
            API returns the top ten results. Using Materialize CSS, the
            information is then neatly displayed inside of the UI for the user
            to interact with. State is also managed with the Context API and
            this app utilizes react hooks throughout.
          </p>
          <a
            href="https://github.com/KeeganA217/recipe-rolodex"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            Source Code/README
          </a>
          <a
            href="https://keegana217.github.io/recipe-rolodex/"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            View Live Project
          </a>
        </div>
      </section>
      <section className="project project-c">
        <div className="project-left">
          <h2>Project 3</h2>
        </div>
        <div className="project-right">
          <p>
            <h4>
              <strong>Project 3</strong>
            </h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum
            aperiam! Ullam quae adipisci atque tempora quibusdam soluta
            architecto distinctio a fugiat reiciendis non, placeat, possimus
            perferendis commodi natus deleniti dignissimos odio, minus
            voluptatibus veritatis consectetur fugit aspernatur enim? Quaerat,
            suscipit? Fuga commodi repellat molestiae eveniet numquam illo quas.
            Eligendi.
          </p>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            Source Code/README
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            View Live Project
          </a>
        </div>
      </section>
      <section className="project project-d">
        <div className="project-left">
          <h2>Project 4</h2>
        </div>
        <div className="project-right">
          <p>
            <h4>
              <strong>Project 4</strong>
            </h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum
            aperiam! Ullam quae adipisci atque tempora quibusdam soluta
            architecto distinctio a fugiat reiciendis non, placeat, possimus
            perferendis commodi natus deleniti dignissimos odio, minus
            voluptatibus veritatis consectetur fugit aspernatur enim? Quaerat,
            suscipit? Fuga commodi repellat molestiae eveniet numquam illo quas.
            Eligendi.
          </p>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            Source Code/README
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            View Live Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
