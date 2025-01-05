import React from "react";
import project01 from "../assets/project01.png";
import project02 from "../assets/project02.png";
import project03 from "../assets/project03.jpg";
import project04 from "../assets/project04.png";
import project05 from "../assets/project05.png";
import project06 from "../assets/project06.png";
import project07 from "../assets/project07.png";
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
        "This project replicates the Apple Calculator app using Android Studio. It utilizes ConstraintLayout for a responsive design and implements built-in functions to handle calculations, demonstrating proficiency in Android development and functional UI design.",
      image: project03,
      technologies: ["Android Studio", "Constraint Layout"],
      githublink: "https://github.com/DharunDayaal/CalculatorApp",
    },
    {
      id: 3,
      name: "Spotknack Rewards Platform",
      description:
        "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result.",
      image: project02,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS"],
      githublink: "https://platform.spotknack.com",
    },
    {
      id: 4,
      name: "Swiggy Landing Page",
      description:
        "This project replicates Swiggy's landing page using React.js and Bootstrap. It features a responsive design, dynamic food category carousel, and restaurant grid layout, showcasing skills in component-based development and modern UI design techniques.",
      image: project04,
      technologies: ["React", "Bootstrap", "JSON", "HTML", "CSS"],
      githublink: "https://github.com/DharunDayaal/swiggy-react",
    },
    {
      id: 5,
      name: "To-do App",
      description:
        "This project is a To-Do app built with React, React Modals, and Bootstrap. It allows users to add tasks, mark them as complete or incomplete, and edit or modify tasks, ensuring an interactive and user-friendly experience.",
      image: project05,
      technologies: ["React", "Bootstrap", "Modals", "HTML", "CSS"],
      githublink: "https://github.com/DharunDayaal/todo-app",
    },
    {
      id: 6,
      name: "Weather App",
      description:
        "This project is a Weather App built using React and Axios. It integrates a Weather API to fetch real-time weather data for any location. The app displays temperature, weather conditions, and more in a user-friendly interface, demonstrating skills in API integration, React development, and creating dynamic, responsive applications.",
      image: project06,
      technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS", "Weather API"],
      githublink: "https://github.com/DharunDayaal/weather-app",
    },
    // {
    //   id: 7,
    //   name: "Blog App",
    //   description:
    //     "The Rewards Platform is a real-time project from Spotknack, where the mentees can submit their task, blogs, tutorials, linkedin posts and projects which will be evaluated by their mentors and the platform will allocate the coins based on the evaluation result",
    //   image: project02,
    //   technologies: ["React", "Bootstrap", "Axios", "HTML", "CSS", "Firebase Authentication", "Realtime Firebase"],
    //   githublink: "https://github.com",
    // },
    {
      id: 8,
      name: "StudioMPLS Clone Website",
      description:
        "The StudioMPLS Clone Website is a responsive web design built using HTML, CSS, JavaScript, and Bootstrap. It mimics the features of the StudioMPLS website, showcasing modern design elements, a user-friendly interface, and mobile-friendly layout.",
      image: project07,
      technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
      githublink: "https://github.com/DharunDayaal/studiompls-clone-website",
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
