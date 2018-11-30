import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import heroImg from "../images/main-image.jpg";
import poolLadder from "../images/pool-ladder.jpg";
import waterDrop from "../images/water-drop.jpg";
import poolDrain from "../images/pool-drain.jpg";

const Hero = props => {
  return (
    <section className="hero">
      <figure className="hero-image">
        <img src={heroImg} width="770" height="257" alt="Main Img" />
      </figure>
      <div className="categories">
        <Link to="/evaluation">
          <img
            src={poolLadder}
            width="255"
            height="141"
            border="0"
            alt="Evaluation"
          />
          <span>Evaluation</span>
        </Link>
        <Link to="/education">
          <img
            src={waterDrop}
            width="254"
            height="141"
            border="0"
            alt="Education"
          />
          <span>Education</span>
        </Link>
        <Link to="/equipment">
          <img
            src={poolDrain}
            width="255"
            height="141"
            border="0"
            alt="Equipment"
          />
          <span>Equipment</span>
        </Link>
      </div>

      <div className="learn-more">
        <h1>
          Las Vegas CPO Certification - National Swimming Pool Foundation
          Certified Pool Operator
        </h1>
      </div>
    </section>
  );
};

export default Hero;
