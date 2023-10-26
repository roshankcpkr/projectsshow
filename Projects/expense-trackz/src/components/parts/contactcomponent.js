import React from "react";

const ContactUs = () => {
    return(
        <div className="site-section bg-image2 overlay" id="contact-section" style={{backgroundImage:"url('images/hero_1.jpg')"}}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3 text-white">Contact Us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">

            

            <form action="#" className="p-5 bg-white">
              
              <h2 className="h4 text-black mb-5">Contact Form</h2> 

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control rounded-0" />
                </div>
                <div className="col-md-6">
                  <label className="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="email">Email</label> 
                  <input type="email" id="email" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-0" placeholder="Leave your message here..."></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary mr-2 mb-2" />
                </div>
              </div>

  
            </form>
          </div>
        
        </div>
        </div>
        
      </div>
    );
};

export default ContactUs;