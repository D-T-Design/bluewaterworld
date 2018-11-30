import React from "react";
import headerImg from "./images/header-01.png";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={headerImg}
          width="421"
          height="105"
          border="0"
          alt="BLUEWATERWORLD"
        />
      </Link>
      <div className="header-info">
        <h1>
          <em>David Boyle</em>
          <br />
          <small>Certified Pool Operator (CPO) Instructor</small>
        </h1>
        Call for more Information 702.561.6444
      </div>
    </header>
  );
};

export default Header;
