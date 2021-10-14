import React, { Fragment } from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <Fragment>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">About Us</h6>
              <h2 className="title">About Us</h2>
            </div>
          </div>
          <div className="content-area">
            <div className="row">
              <div className="col-md-12 col-lg-6" style={{ margin: "auto 0" }}>
                <ul className="app-features">
                  <li className="about-text dark-bg-text-color">
                    <p className=" white textjust">
                    DEFItt is a modern finance solution that harnesses the power of blockchain technology to provide more rewarding investment yields with minimal risks. Through blockchain's immutable and distributed properties, investors can access a wide array of digital platforms and services that accept DEFItt.
                    </p>{" "}
                    <p className=" white textjust">
                    To ensure security, speed, and reliability of transactions, DEFItt uses the Binance Smart Chain as a BEP-20 standard token. DEFItt is also tied to Financial Tech Token (FTT), which is a stablecoin pegged 1:1 to the US dollar to eliminate asset volatility.
                    </p>{" "}
                    
                    <div className="about-btn">
                      <a
                        className="btn btn-lg btn-gradient-purple btn-glow animated"
                        data-animation="fadeInUpShorter"
                        href="/aboutus"
                        target="_blank"
                      >
                        Explore DEFItt
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="col-md-12 col-lg-6 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.7s"
              >
                <div className="what-is-crypto-img">
                  <a href="https://ftttoken.com" target="_blank">
                    <img
                      className="img-fluid"
                      src="theme-assets/images/what-is-crypto.png"
                      alt="What is Crypto?"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

About.propTypes = {};

export default About;
