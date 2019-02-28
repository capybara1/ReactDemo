import React from "react"; // Required for JSX

const Navbar = ({ label, href, children }) => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href={href}>
      {label}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div id="navbar" className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">{children}</ul>
    </div>
  </nav>
);

export default Navbar;
