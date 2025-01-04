import React from 'react'
import "./contactPage.css"

const Contactpage = () => {
  return (
    <>
      <div className="container-fluid contact-div">
        <div className="d-flex flex-lg-column flex-column justify-content-center align-items-lg-start align-items-start gap-4">
          <div className="d-flex flex-lg-column flex-column justify-content-center gap-1 contact-style">
            <h2>Contact</h2>
            <p>Looking forward to hearing from you</p>
          </div>
          <div className="d-flex flex-lg-column flex-column justify-content-center gap-2 contact-style">
            <h5>Phone</h5>
            <p>+91 9342970337</p>
          </div>
          <div className="d-flex flex-lg-column flex-column justify-content-center gap-2 contact-style">
            <h5>Email</h5>
            <p>dharundayaal@gmail.com</p>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Contactpage