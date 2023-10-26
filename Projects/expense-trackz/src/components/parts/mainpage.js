import React from "react"

const Mainpage = () => {
    return(
       <>
        <div className="site-blocks-cover" style={{overflow:'hidden'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
  
            <div className="col-md-12" style={{position:'relative'}} data-aos="fade-up" data-aos-delay="200">
              
              <img src="images/undraw_investing_7u74.svg" alt="" className="img-fluid img-absolute" />
  
              <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-6 mr-auto">
                  <h1>Daily Budget Calculator</h1>
                  <p className="mb-5">Take a look at how easily you can manage all of your expenses easily with our free to use budget calculator app.</p>
                  <div>
                    <a href="/expensetracker" className="btn btn-primary mr-2 mb-2">Get Started</a>
                  </div>
                </div>
                
                
              </div>
  
            </div>
          </div>
        </div>
      </div>  


<div className="site-section" id="features-section">

<div className="container">
  <div className="row mb-5 justify-content-center text-center"  data-aos="fade-up">
    <div className="col-7 text-center  mb-5">
      <h2 className="section-title">Technologies Used</h2>
      <p className="lead">Have a look at the tech we used to create this awesome app for you.</p>
    </div>
  </div>
  <div className="row align-items-stretch">
    <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
      
      <div className="unit-4 d-block">
        <div className="unit-4-icon mb-3">
          <span className="icon-wrap"><span className="text-primary icon-autorenew"></span></span>
        </div>
        <div>
          <h3>React router</h3>
          <p>We have implemented react router so that you can easily navigate between pages while using our app.</p>
         
        </div>
      </div>

    </div>
    <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">

      <div className="unit-4 d-block">
        <div className="unit-4-icon mb-3">
          <span className="icon-wrap"><span className="text-primary icon-store_mall_directory"></span></span>
        </div>
        <div>
          <h3>LocalStorage API</h3>
          <p>We use the LocalStorage API to save your data, your data stays only in your browser window.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up"  data-aos-delay="200">
      <div className="unit-4 d-block">
        <div className="unit-4-icon mb-3">
          <span class="icon-wrap"><span className="text-primary icon-shopping_basket"></span></span>
        </div>
        <div>
          <h3>React Hooks</h3>
          <p>We use react hooks to manage states in this app, no redux involved.</p>
        </div>
      </div>
    </div>

    </div>
    
  </div>
</div>

<div className="feature-big">
      <div className="container">
        <div className="row mb-5 site-section">
          <div className="col-lg-7" data-aos="fade-right">
            <img src="images/undraw_gift_card_6ekc.svg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-5 pl-lg-5 ml-auto mt-md-5">
            <h2 className="text-black">Check it out yourself</h2>
            <p className="mb-4">try out our expense tracker yourself and easily manage all of your expenses.</p>
            
            <div className="btn btn-default mr-2 mb-2" data-aos="fade-left">
              <div className="d-flex mb-2">
                <div className="mr-4">
                    <h1><a href="/expensetracker">Learn more.</a></h1>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
</>
    );
}

export default Mainpage;
