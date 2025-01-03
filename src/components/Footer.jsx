import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className="container-fluid" style={{padding:"0 60px", margin: "50px 0 20px 0"}}>
            <div></div>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="d-block">
                        <h5>Phone</h5>
                        <p>+91 9342970337</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                    <div className="d-flex flex-column align-items-left align-items-lg-center">
                        <h5>Email</h5>
                        <p>dharundayaal@gmail.com</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                    <div className="d-flex flex-column align-items-lg-end">
                        <h5>Follow me</h5>
                        <div className="d-flex gap-2 align-items-start me-5">
                            <a 
                                href="https://linkedin.com/in/DharunDayaal" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-dark fs-5"
                                style={{ textDecoration: 'none' }}
                            >
                                <FaLinkedin />
                            </a>
                            <a 
                                href="https://github.com/DharunDayaal"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-dark fs-5"
                                style={{ textDecoration: 'none' }}
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer