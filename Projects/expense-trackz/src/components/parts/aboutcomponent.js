import React from "react";

const AboutUs = () => {
    return (
          
        <div className="site-section bg-light" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">About Us</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="images/undraw_bookmarks_r6up.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-5 ml-auto pl-lg-5">
              <h2 className="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
              <p className="mb-4">This project is part of Sir Zia's fasttrack Bootcamp2020</p>
              <ul className="ul-check mb-5 list-unstyled success">
                <li>React Hooks </li>
                <li>Local storage API</li>
                <li>React Router</li>
              </ul>
              <p><a href="/expensetracker" className="btn btn-primary">Learn More</a></p>
            </div>
  
          
        </div>
      </div>
          </div>
    )
};

export default AboutUs;