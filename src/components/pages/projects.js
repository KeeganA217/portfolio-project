import React, { useEffect } from "react";
import { gsap } from "gsap";

const Projects = () => {
  useEffect(() => {
    gsap.from(".project", {
      opacity: 0,
      duration: 1.5,
      y: 150,
      ease: "power1",
      stagger: {
        amount: 2,
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
      <div className="project">
        <div className="project-left">
          <h2>TeamSolve</h2>
        </div>
        <div className="project-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum
            aperiam! Ullam quae adipisci atque tempora quibusdam soluta
            architecto distinctio a fugiat reiciendis non, placeat, possimus
            perferendis commodi natus deleniti dignissimos odio, minus
            voluptatibus veritatis consectetur fugit aspernatur enim? Quaerat,
            suscipit? Fuga commodi repellat molestiae eveniet numquam illo quas.
            Eligendi.
          </p>
          <a
            href="https://github.com/KeeganA217/update-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            View Source Code
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
      </div>
      <div className="project">
        <div className="project-left">
          <h2>The Recipe Rolodex</h2>
        </div>
        <div className="project-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum
            aperiam! Ullam quae adipisci atque tempora quibusdam soluta
            architecto distinctio a fugiat reiciendis non, placeat, possimus
            perferendis commodi natus deleniti dignissimos odio, minus
            voluptatibus veritatis consectetur fugit aspernatur enim? Quaerat,
            suscipit? Fuga commodi repellat molestiae eveniet numquam illo quas.
            Eligendi.
          </p>
          <a
            href="https://github.com/KeeganA217/recipe-rolodex"
            target="_blank"
            rel="noopener noreferrer"
            className="click"
          >
            View Source Code
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
      </div>
      <div className="project">
        <div className="project-left">
          <h2>Project 3</h2>
        </div>
        <div className="project-right">
          <p>
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
            View Source Code
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
      </div>
      <div className="project">
        <div className="project-left">
          <h2>Project 4</h2>
        </div>
        <div className="project-right">
          <p>
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
            View Source Code
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
      </div>
    </div>
  );
};

export default Projects;
