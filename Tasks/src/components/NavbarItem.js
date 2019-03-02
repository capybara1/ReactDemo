import React from "react"; // Required for JSX
import { Route, Link } from "react-router-dom";

const NavbarItem = ({ label, href, disabled, exact }) => {
  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  const escapedHref = href && href.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return (
    <Route
      path={escapedHref}
      exact={exact}
      children={({ location, match }) => (
        <li className="nav-item">
          <Link
            aria-current={(!disabled && !!match) || null}
            className={
              disabled
                ? "nav-link disabled"
                : match
                ? "nav-link active"
                : "nav-link"
            }
            to={href}
          >
            {label}
            {match && <span className="sr-only">(current)</span>}
          </Link>
        </li>
      )}
    />
  );
};

export default NavbarItem;
