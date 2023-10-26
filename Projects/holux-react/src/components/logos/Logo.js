import React from "react";
import "./logo.css";
import logoOne from "../../assets/img/logo1.png";
import logoTwo from "../../assets/img/logo2.png";
import logoThree from "../../assets/img/logo3.png";
import logoFour from "../../assets/img/logo4.png";

const Logo = () => {
  return (
    <>
      <section className="logos section">
        <div className="logos__container container grid">
          <div className="logos__img">
            <img src={logoOne} alt="company logo" />
          </div>
          <div className="logos__img">
            <img src={logoTwo} alt="company logo" />
          </div>
          <div className="logos__img">
            <img src={logoThree} alt="company logo" />
          </div>
          <div className="logos__img">
            <img src={logoFour} alt="company logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Logo;
