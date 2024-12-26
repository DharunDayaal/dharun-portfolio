import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav navbar-expand-lg">
        <div className="container-fluid p-4">
          <div
            className="collapse navbar-collapse pe-5 ps-5 mt-2 mb-1"
            id="navbarSupportedContent"
          >
            <div className="navbar-brand">
              <Link
                to=""
                className="link-style d-flex justify-content-center gap-4"
              >
                <div className="brand-icon mt-1"></div>
                <span>Dharun Dayaal</span>
              </Link>
            </div>
            <div className="navbar-nav ms-auto d-flex justify-content-center gap-5">
              <div className="nav-item">
                <Link to="resume" className="link-style">
                  Resume
                </Link>
              </div>
              <div className="gap-line"></div>
              <div className="nav-item">
                <Link to="projects" className="link-style">
                  Projects
                </Link>
              </div>
              <div className="gap-line"></div>
              <div className="nav-item">
                <Link to="contact" className="link-style">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
