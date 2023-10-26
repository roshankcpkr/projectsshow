import React from "react";

const Header = () =>{
    return(
        <header className="site-navbar py-1 js-sticky-header site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-6 col-md-3 col-xl-4  d-block">
              <h1 className="mb-0 site-logo"><a href="/" className="text-black h2 mb-0">ExpenseTrackz<span className="text-primary">.</span> </a></h1>
            </div>
  
            <div className="col-12 col-md-9 col-xl-8 main-menu">
              <nav className="site-navigation position-relative text-right" role="navigation">
  
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                  <li><a href="/" className="nav-link">Home</a></li>
                  <li><a href="/expensetracker" className="nav-link">Expense Tracker</a></li>
                  <li><a href="/about" className="nav-link">About</a></li>
                  <li><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>
  
  
            <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0" ><a href="/" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>
  
          </div>
        </div>
        
      </header>
    )
}

export default Header;