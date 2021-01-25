import React from "react";
import Hero from "../components/Hero"

function Portfolio() {
  return (
    <div>
     <Hero>
        <h1>PORTFOLIO</h1>
        <p>
            I built these projects with a mixture of coffee, grit, Front-End Web Development, HTML 5, CSS 3, Bootstrap 4,
            Javascript ES6, DOM Manipulation, jQuery, Bash Command Line, Git, GitHub and Version Control, Backend Web
            Development, Node.js, NPM, Express.js, EJS, REST, APIs, Databases, SQL, MongoDB, Mongoose, Authentication,
            Firebase, React.js, React Hooks, Web Design, Deployment with GitHub Pages, Heroku and MongoDB Atlas,
            Python3, Extendscript.
          </p>
          <hr />
          <a class="btn btn-primary btn-lg contact-me" href="/about" rel="noreferrer" role="button">Contact Me</a>
      </Hero>
    </div>
  );
}

export default Portfolio;
