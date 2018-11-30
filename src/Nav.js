import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

class Nav extends Component {
  render() {
    return (
      <nav role="navigation">
        <ul>
          <li>
            <NavLink to="/education" activeClassName="active">
              {this.props.location}
              <button>Education</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/evaluation" activeClassName="active">
              <button>Evaluation</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipment" activeClassName="active">
              <button>Equipment</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <button>About Us</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <button>Contact Us</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
