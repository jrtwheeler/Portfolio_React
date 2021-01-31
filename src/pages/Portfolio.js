import React, { Component } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Container from "../components/Container";
import API from "../utils/github.json";
class Portfolio extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.displayResume()
  }

  // displayResume = () => {
  //   API.getResume()
  //     .then((res) => this.setState({ results: res.data.projects }))
  //     .catch((err) => console.log(err));
  // };

  displayResume = () => {
    this.setState({ results: API.projects });
  };

  render() {
    console.log(this.state.results)
  return (
    <div>
     <Hero className="mb-0">
        <h1>PORTFOLIO</h1>
        <p>
            I built these projects with a mixture of coffee, grit, Front-End Web Development, HTML 5, CSS 3, Bootstrap 4,
            Javascript ES6, DOM Manipulation, jQuery, Bash Command Line, Git, GitHub and Version Control, Backend Web
            Development, Node.js, NPM, Express.js, EJS, REST, APIs, Databases, SQL, MongoDB, Mongoose, Authentication,
            Firebase, React.js, React Hooks, Web Design, Deployment with GitHub Pages, Heroku and MongoDB Atlas,
            Python3, Extendscript.
          </p>
          <hr />
          <a class="btn btn-primary btn-lg contact-me" href="/contact" rel="noreferrer" role="button">Contact Me</a>
      </Hero>
      <Container>
      <Card
      />
      </Container>
    </div>
  );
}
}

export default Portfolio;
