import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-nav">
      <div>
        Copyright &copy; Bluewaterworld 2011 - {new Date().getFullYear()}
      </div>
      <div>
        <a
          href="https://www.venturawebdesign.com/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Las Vegas Web Design
        </a>{" "}
        by{" "}
        <a
          href="https://www.venturawebdesign.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          VenturaWebDesign.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
