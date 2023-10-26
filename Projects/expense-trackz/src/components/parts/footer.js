import React from "react"

const Footer = () => {
    return(
        <div className="footer py-5 text-center">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <p className="mb-0">
                <a href="https://github.com/SyedUmairAli2000" className="p-3"><span className="icon-github"></span></a>
                <a href="https://www.facebook.com/syedumairali2000/" className="p-3"><span className="icon-facebook"></span></a>
                
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;