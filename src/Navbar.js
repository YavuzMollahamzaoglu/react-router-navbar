import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <li className="active">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
