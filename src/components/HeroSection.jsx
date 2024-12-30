import React from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import Profile from "../assets/dharun_photo.jpg";
import "./heroSection.css";

const HeroSection = () => {

  const navigate= useNavigate();

  const [typeEffect] = useTypewriter({
    words: ["Hello", "I'm Dharun Dayaal", "Frontend Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const skills = [
    { name: 'React', level: 90, color: 'bg-primary' },
    { name: 'JavaScript', level: 85, color: 'bg-warning' },
    { name: 'HTML/CSS', level: 95, color: 'bg-danger' },
    { name: 'Java', level: 60, color: 'bg-secondary' },
    { name: 'Node.js', level: 75, color: 'bg-dark' },
    { name: 'React Redux', level: 30, color: 'bg-success' }
  ];

  const handleResumeBtn = () => navigate("/resume");
  const handleProjectsBtn = () => navigate("/projects");
  const handleContactBtn = () => navigate("/contact");

  return (
    <>
      <div className="row m-0 align-items-center">
        <div
          className="col-12 p-0 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4"
          style={{ marginTop: "5%" }}
        >
          <img
            src={Profile}
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            style={{ width: "40%", height: "40%", objectFit: "cover" }}
          />
          <div className="text-center text-lg-start" style={{ width: "35%" }}>
            <h1 className="fw-bold" style={{ fontFamily: "sans-serif" }}>
              {typeEffect}<span>|</span>
            </h1>
            <p
              className="fs-3 fw-semibold"
              style={{ fontFamily: "sans-serif" }}
            >
              A Bit About Me
            </p>
            <p
              className="text-muted"
              style={{ fontFamily: "Poppins, sans-serif", width: "87%" }}
            >
              I'm a passionate frontend developer with a knack for creating
              user-friendly, responsive, and visually appealing web
              applications. I thrive on turning innovative designs into
              functional and efficient code, bringing ideas to life in the
              browser.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3">
              <button
                className="btn btn-warning"
                onClick={handleResumeBtn}
              >
                Resume
              </button>
              <button
                className="btn btn-danger"
                onClick={handleProjectsBtn}
              >
                Projects
              </button>
              <button
                className="btn btn-info text-white"
                onClick={handleContactBtn}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <section id="skills" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-left fw-bold mb-4">Professional Skills</h2>
          <div className="row">
            {skills.map(skill => (
              <div key={skill.name} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{skill.name}</h5>
                    <div className="progress mb-2">
                      <div 
                        className={`progress-bar ${skill.color} progress-bar-striped progress-bar-animated`}  
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }} 
                        aria-valuenow={skill.level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>{skill.level}% Proficiency</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
