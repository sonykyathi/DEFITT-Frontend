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
              <h6 className='sub-title'>About</h6>
              <a target='_blank' href='https://ftttoken.com'>
                <h2 className='title'>About</h2>
              </a>
            </div>
            {/* <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              DEFItt a part of the future of money.
              <br className='d-none d-xl-block' />
            </p> */}
          </div>
          <div className='content-area'>
            <div className='row'>
              <div className='col-md-12 col-lg-6' style={{ margin: 'auto 0' }}>
                <ul className='app-features'>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      DEFItt is a solution that allows you to enjoy success and
                      inspired experiences while also assisting you in becoming
                      venture financed with greater benefits and fewer risks.
                      DEFItt serves as your companion token for gaining access
                      to the fiat world. For an investor, this is a
                      once-in-a-lifetime opportunity, the one opportunity, and a
                      well-planned approach. The result will be a modernised
                      token that flourishes as a consequence of exposure to a
                      well-thought-out strategy capable of dealing with
                      difficulties as well as pressures. After a one-year
                      stacking period, you will be able to convert into our
                      Fiat-pegged Financial Tech Token -FTT, where you will be
                      able to utilize all of our verticals. See www.DEFItt.org
                      for more details. DEFItt will only sell 100 Million
                      tokens, increasing its value
                    </span>
                    <div className='row'>
                      <div className='col-lg-12 col-md-6 text-center'>
                        <a
                          className='mt-2 btn btn-lg btn-gradient-purple btn-glow mb-2 animated'
                          data-animation='fadeInUpShorter'
                          href=''
                          target='_blank'
                        >
                          explore defitt
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
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
                    <span className='mt-2 d-none d-md-block'>FTT Coin</span>
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
