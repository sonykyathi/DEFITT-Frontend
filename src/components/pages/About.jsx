import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <Fragment>
      <section className='about section-padding' id='about'>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              <h6 className='sub-title'>Abou t</h6>
              <h2 className='title'>What is DEFItt</h2>
            </div>
            <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              DEFItt a part of the future of money.
              <br className='d-none d-xl-block' />
            </p>
          </div>
          <div className='content-area'>
            <div className='row'>
              <div className='col-md-12 col-lg-6'>
                <h4
                  className='title animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.5s'
                >
                  DEFItt a part of the future of money.
                  <br className='d-none d-xl-block' />
                </h4>
                <h6
                  className='pt-4 pb-2 animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.6s'
                >
                  DEFItt is a decentralised digital currency that is free of
                  complete censorship and accessible to anyone. It is built on
                  the BEP-20 token standard, powered by the Binance Smart
                  Contract Blockchain.
                </h6>
                <p
                  className='animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  DEFItt leverages the properties of the blockchain technology,
                  decentralised unalterable and indestructible technology to
                  create a trusty, reduced risk, fraud-free and transparent
                  platform in a scalable way
                </p>
              </div>
              <div
                className='col-md-12 col-lg-6 animated'
                data-animation='fadeInUpShorter'
                data-animation-delay='0.7s'
              >
                <div className='position-relative what-is-crypto-img float-xl-right'>
                  <img
                    className='img-fluid'
                    src='theme-assets/images/what-is-crypto.png'
                    alt='What is Crypto?'
                  />
                  <div className='play-video text-center'>
                    <a
                      href='#'
                      className='play rounded-circle btn-gradient-purple btn-glow video-btn'
                      data-toggle='modal'
                      data-src='https://www.youtube.com/embed/UXAJu3zS4bU'
                      data-target='#ico-modal'
                    >
                      <i className='ti-control-play'></i>
                    </a>
                    <span className='mt-2 d-none d-md-block'>How it works</span>
                  </div>
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
