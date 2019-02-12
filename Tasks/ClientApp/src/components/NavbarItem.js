import React from "react"; // Required for JSX

const NavbarItem = ({label, href, active, disabled}) =>
    <li className={active ? "nav-item active" : "nav-item"}>
        <a
            className={disabled ? "nav-link disabled" : "nav-link"}
            href={href}>{label}{active && <span className="sr-only">(current)</span>}</a>
    </li>;

export default NavbarItem;