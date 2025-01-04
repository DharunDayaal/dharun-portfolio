import React from "react";
import project01 from "../assets/project01.png";
import project02 from "../assets/project02.png"
import "./projectpage.css";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      name: "Interactive Cooking Guide App",
      description:
        "The Interactive Cooking Guide is an Android application that combines YOLOv8-based object detection and ChatGPT-powered conversational AI to transform cooking. Users capture ingredient images, which the TFLite-integrated model identifies, and the chatbot provides personalized recipe suggestions. Featuring a seamless interface, it simplifies ingredient recognition and recipe generation, making cooking more interactive, efficient, and accessible for all users.",
      image: project01,
      technologies: [
        "YOLOv8",
        "TensorFlow Lite",
        "ChatGPT API",
        "Android Studio",
        "Java",
        "Kotlin",
      ],
      githublink: "https://github.com/DharunDayaal/inteactive-cooking-guide",
    },
    {
      id: 2,
      name: "Calculator App",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com/DharunDayaal/CalculatorApp",
    },
    {
      id: 3,
      name: "Spotknack Rewards Platform",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com",
    },
    {
      id: 4,
      name: "Swiggy Landing Page",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com",
    },
    {
      id: 5,
      name: "To-do App",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com",
    },
    {
      id: 6,
      name: "Weather App",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com",
    },
    {
      id: 7,
      name: "Blog App",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com",
    },
    {
      id: 8,
      name: "StudioMPLS Clone Website",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://github.com",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-md-12 d-flex align-items-center ps-lg-5 mb-4"
            >
              {/* Text Section */}
              <div className="w-50 pe-3">
                <h2 className="fw-bold">{project.name}</h2>
                <p>{project.description}</p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge bg-secondary text-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="w-50">
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="img-fluid rounded"
                    style={{ width: "300px", height: "300px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
