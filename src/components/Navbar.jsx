import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container py-2">
          <Link className="navbar-brand" to="">
            <div className="d-flex align-items-center gap-3">
              <div className="brand-icon"></div>{" "}
              <div className="fw-bolder">Dharun Dayaal</div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4 justify-content-center">
              {/* <li className="nav-item">
                <Link className="nav-link link-style" to="/resume">
                  Resume
                </Link>
              </li> */}
              <div className="gap-line"></div>
              <li className="nav-item">
                <Link className="nav-link link-style" to="/projects">
                  Projects
                </Link>
              </li>
              <div className="gap-line"></div>
              <li className="nav-item">
                <Link className="nav-link link-style" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
