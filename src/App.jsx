import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ResumePage from "./pages/ResumePage"
import ProjectPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const App = () => {
//   const [typedText, setTypedText] = useState('');
//   const fullText = "Professional Software Developer | Full Stack Engineer";

//   useEffect(() => {
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setTypedText(fullText.slice(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, []);

  // const skills = [
  //   { name: 'React', level: 90, color: 'bg-primary' },
  //   { name: 'JavaScript', level: 85, color: 'bg-warning' },
  //   { name: 'HTML/CSS', level: 95, color: 'bg-danger' },
  //   { name: 'Java', level: 80, color: 'bg-secondary' },
  //   { name: 'Unity', level: 75, color: 'bg-dark' },
  //   { name: 'C', level: 70, color: 'bg-success' }
  // ];

//   const projects = [
//     {
//       title: 'Enterprise E-Commerce Platform',
//       description: 'Scalable full-stack e-commerce solution with microservices architecture',
//       technologies: ['React', 'Node.js', 'Docker', 'Kubernetes']
//     },
//     {
//       title: 'Advanced Game Development',
//       description: 'Multiplayer game with real-time networking and complex game mechanics',
//       technologies: ['Unity', 'C#', 'Networking', 'Cloud Integration']
//     },
//     {
//       title: 'AI-Powered Dashboard',
//       description: 'Intelligent analytics platform with predictive modeling',
//       technologies: ['React', 'Machine Learning', 'Python', 'Data Visualization']
//     }
//   ];

//   return (
//     <div className="bg-light">
//       {/* Navigation */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container">
//           <a className="navbar-brand fw-bold" href="#">John Doe</a>
//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             data-bs-toggle="collapse" 
//             data-bs-target="#navbarNav" 
//             aria-controls="navbarNav" 
//             aria-expanded="false" 
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#skills">Skills</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#projects">Projects</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="container text-center py-5"
//       >
//         <div className="row align-items-center">
//           <div className="col-md-4">
//             <img 
//               src="https://via.placeholder.com/400" 
//               alt="Professional Headshot" 
//               className="rounded-circle img-fluid shadow"
//             />
//           </div>
//           <div className="col-md-8">
//             <h1 className="display-4 fw-bold">John Doe</h1>
//             <h3 className="text-muted">{typedText}<span className="opacity-50">|</span></h3>
//             <p className="lead">
//               Innovative software developer with expertise in full-stack development, 
//               game design, and cutting-edge web technologies.
//             </p>
//             <div>
//               <a href="#" className="btn btn-primary me-2">Download CV</a>
//               <a href="#contact" className="btn btn-outline-secondary">Contact Me</a>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Skills Section */}
      // <section id="skills" className="py-5 bg-white">
      //   <div className="container">
      //     <h2 className="text-center fw-bold mb-4">Professional Skills</h2>
      //     <div className="row">
      //       {skills.map(skill => (
      //         <div key={skill.name} className="col-md-4 mb-4">
      //           <div className="card shadow-sm">
      //             <div className="card-body">
      //               <h5 className="card-title fw-bold">{skill.name}</h5>
      //               <div className="progress mb-2">
      //                 <div 
      //                   className={`progress-bar ${skill.color}`} 
      //                   role="progressbar" 
      //                   style={{ width: `${skill.level}%` }} 
      //                   aria-valuenow={skill.level} 
      //                   aria-valuemin="0" 
      //                   aria-valuemax="100"
      //                 ></div>
      //               </div>
      //               <p>{skill.level}% Proficiency</p>
      //             </div>

      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-5">
//         <div className="container">
//           <h2 className="text-center fw-bold mb-4">Notable Projects</h2>
//           <div className="row">
//             {projects.map(project => (
//               <div key={project.title} className="col-md-4 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body">
//                     <h5 className="card-title fw-bold">{project.title}</h5>
//                     <p className="card-text">{project.description}</p>
//                     <div className="d-flex flex-wrap gap-1 mb-3">
//                       {project.technologies.map(tech => (
//                         <span 
//                           key={tech} 
//                           className="badge bg-primary text-light"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <a href="#" className="btn btn-primary">View Project</a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-5 bg-light">
//         <div className="container">
//           <h2 className="text-center fw-bold mb-4">Contact Me</h2>
//           <form className="mx-auto" style={{ maxWidth: '500px' }}>
//             <div className="mb-3">
//               <input 
//                 type="text" 
//                 className="form-control" 
//                 placeholder="Your Name" 
//               />
//             </div>
//             <div className="mb-3">
//               <input 
//                 type="email" 
//                 className="form-control" 
//                 placeholder="Your Email" 
//               />
//             </div>
//             <div className="mb-3">
//               <textarea 
//                 className="form-control" 
//                 rows="4" 
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-primary">Send Message</button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
      // <footer className="bg-dark text-light py-3">
      //   <div className="container text-center">
      //     <p className="mb-1">&copy; 2024 John Doe. All Rights Reserved.</p>
      //     <div className="d-flex justify-content-center gap-3">
      //       <a href="#" className="text-light">LinkedIn</a>
      //       <a href="#" className="text-light">GitHub</a>
      //       <a href="#" className="text-light">Email</a>
      //     </div>
      //   </div>
      // </footer>
//     </div>
//   );
// };

// export default App;


