import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./footer.css"

const Footer = () => {

  const horizontalLine = {
    width: "100%",
    height: "1px",
    borderBottom: "2px solid rgba(191, 188, 188, 0.64)",
    marginBottom: "40px",
  };

  return (
    <>
      <footer
        className="container-fluid"
      >
        <div style={horizontalLine}></div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="d-block">
              <h5>Phone</h5>
              <p>+91 9342970337</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 mt-4 mt-lg-0">
            <div className="d-flex flex-column align-items-left align-items-lg-center">
              <h5>Email</h5>
              <p>dharundayaal@gmail.com</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 mt-4 mt-lg-0">
            <div className="d-flex flex-column align-items-lg-end">
              <h5>Follow me</h5>
              <div className="d-flex gap-2 align-items-start me-5">
                <a
                  href="https://linkedin.com/in/DharunDayaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-5"
                  style={{ textDecoration: "none" }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/DharunDayaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fs-5"
                  style={{ textDecoration: "none" }}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mt-4 mt-lg-0">
            <div className="d-flex flex-column align-items-lg-end">
              <p>&copy; 2024 Dharun Dayaal<br /> All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
