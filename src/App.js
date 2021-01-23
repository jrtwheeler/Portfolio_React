import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/SignUp";
import Portfolio from "./pages/LogIn";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faNewspaper)

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
