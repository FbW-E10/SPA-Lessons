import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="container" id="navbarNavAltMarkup">
          <div className="d-flex ">
            <Link className="nav-link mx-4" to="/">
              Home
            </Link>
            <Link className="nav-link mx-4" to="/about">
              About
            </Link>
            <Link className="nav-link mx-4" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
