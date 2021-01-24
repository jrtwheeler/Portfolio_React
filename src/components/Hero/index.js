import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "../Container"
import "./style.css";

function Hero(props) {
  return (
    <Jumbotron fluid>
      <Container>
        {props.children}
      </Container>
    </Jumbotron>
  );
}

export default Hero;
