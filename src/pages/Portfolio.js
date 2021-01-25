import React from "react";
import Hero from "../components/Hero";
import Projects from './projects.json';
import FriendCard from "../components/PortfolioContainer";
import PourDecisions from "./assets/pour-decisions-phone.png";
import NYT from "./assets/nyt-archive.png";
import innerNet from "./assets/innerNet-logo-trans.png";
import EmployeeDataBase from "./assets/employee-database.png";
import PortfolioIMG from "./assets/portfolio.png";
import Weather from "./assets/weather-dashboard-detail-2.png"
import CardGroup from 'react-bootstrap/CardGroup';

function Portfolio() {
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
      <CardGroup>
      <FriendCard
        title={Projects[0].title}
        image={PourDecisions}
        subhead={Projects[0].subhead}
        description={Projects[0].description}
        github={Projects[0].github}
        webpage={Projects[0].webpage}
      />
      <FriendCard
        title={Projects[1].title}
        image={Weather}
        subhead={Projects[1].subhead}
        description={Projects[1].description}
        github={Projects[1].github}
        webpage={Projects[1].webpage}
      />
      <FriendCard
        title={Projects[2].title}
        image={NYT}
        subhead={Projects[2].subhead}
        description={Projects[2].description}
        github={Projects[2].github}
        webpage={Projects[2].webpage}
      />
      <FriendCard
        title={Projects[3].title}
        image={EmployeeDataBase}
        subhead={Projects[3].subhead}
        description={Projects[3].description}
        github={Projects[3].github}
        webpage={Projects[3].webpage}
      />
      <FriendCard
        title={Projects[4].title}
        image={innerNet}
        subhead={Projects[4].subhead}
        description={Projects[4].description}
        github={Projects[4].github}
        webpage={Projects[4].webpage}
      />
      <FriendCard
        title={Projects[5].title}
        image={PortfolioIMG}
        subhead={Projects[5].subhead}
        description={Projects[5].description}
        github={Projects[5].github}
        webpage={Projects[5].webpage}
      />
      </CardGroup>
    </div>
  );
}

export default Portfolio;
