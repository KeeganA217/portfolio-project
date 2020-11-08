import React from "react";

const projects = () => {
  return (
    <div className="projects-page">
      <h1 className="page-title projects-title">Sample Projects</h1>
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
          >
            View Source Code
          </a>
          <a
            href="https://keegana217.github.io/recipe-rolodex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-left">
          <h4>Project 2</h4>
        </div>
        <div className="project-right"></div>
      </div>
      <div className="project">
        <div className="project-left">
          <h4>Project 3</h4>
        </div>
        <div className="project-right"></div>
      </div>
      <div className="project">
        <div className="project-left">
          <h4>Project 4</h4>
        </div>
        <div className="project-right"></div>
      </div>
    </div>
  );
};

export default projects;
