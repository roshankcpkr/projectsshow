import React from "react";
import "./popular.css";
import imgOne from "../../assets/img/popular1.jpg";
import imgTwo from "../../assets/img/popular2.jpg";
import imgThree from "../../assets/img/popular3.jpg";
import imgFour from "../../assets/img/popular4.jpg";
import imgFive from "../../assets/img/popular5.jpg";

const Popular = () => {
  return (
    <>
      <section className="popular section" id="popular">
        <div className="container">
          <span className="section__subtitle">Best choice</span>
          <h2 className="section__title">Popular residence</h2>

          <div className="popular__container">
            <div>
              <article className="popular__card">
                <img src={imgOne} alt="Popular houses" class="popular__img" />

                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>$</span>66,324
                  </h2>
                  <h3 className="popular__title">Garden City estate</h3>
                  <p className="popular__description">
                    The Garden city of Miaflores, Lima-Peru
                  </p>
                </div>
              </article>

              <article className="popular__card">
                <img src={imgTwo} alt="Popular houses" class="popular__img" />

                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>$</span>66,324
                  </h2>
                  <h3 className="popular__title">Garden City estate</h3>
                  <p className="popular__description">
                    The Garden city of Miaflores, Lima-Peru
                  </p>
                </div>
              </article>

              <article className="popular__card">
                <img src={imgThree} alt="Popular houses" class="popular__img" />

                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>$</span>66,324
                  </h2>
                  <h3 className="popular__title">Garden City estate</h3>
                  <p className="popular__description">
                    The Garden city of Miaflores, Lima-Peru
                  </p>
                </div>
              </article>

              <article className="popular__card">
                <img src={imgFour} alt="Popular houses" class="popular__img" />

                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>$</span>66,324
                  </h2>
                  <h3 className="popular__title">Garden City estate</h3>
                  <p className="popular__description">
                    The Garden city of Miaflores, Lima-Peru
                  </p>
                </div>
              </article>

              <article className="popular__card">
                <img src={imgFive} alt="Popular houses" class="popular__img" />

                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>$</span>66,324
                  </h2>
                  <h3 className="popular__title">Garden City estate</h3>
                  <p className="popular__description">
                    The Garden city of Miaflores, Lima-Peru
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
