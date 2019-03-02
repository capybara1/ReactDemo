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
      {children.some(i => !i.props.align || i.props.align === "left") ? (
        <ul className="navbar-nav">
          {children.filter(i => !i.props.align || i.props.align === "left")}
        </ul>
      ) : null}
      {children.some(i => i.props.align === "right") ? (
        <ul className="navbar-nav ml-md-auto">
          {children.filter(i => i.props.align === "right")}
        </ul>
      ) : null}
    </div>
  </nav>
);

export default Navbar;
