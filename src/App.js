import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Evaluation from "./pages/Evaluation";
import Education from "./pages/Education";
import Equipment from "./pages/Equipment";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Vegas from "./pages/Vegas";
import "./App.css";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper">
            <Header />
            <Nav location={this.props.location}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/evaluation" component={Evaluation} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/equipment" component={Equipment} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/lasvegas" component={Vegas} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
