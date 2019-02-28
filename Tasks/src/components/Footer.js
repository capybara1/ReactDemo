import React from "react"; // Required for JSX

const Footer = ({ company }) => (
  <footer className="container">
    <p>
      &copy; {company} {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
