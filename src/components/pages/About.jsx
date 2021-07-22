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
              <h6 className='sub-title'>About Us</h6>
              <h2 className='title'>About Us</h2>
            </div>
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
                      difficulties as well as pressures. DEFItt is using the BEP
                      20 Platform on the Binance Smart Chain which enables the
                      transactions security, speed and reliability.
                    </span>{' '}
                    <br />
                    <span className=' white mr-3'>
                      Blockchain is the future and we are all aware of It
                      however the right usage of blockchain is what makes DEFItt
                      different from all. An ecosystem that DEFItt has made with
                      its paired stable token FTT, makes this token touch human
                      lives.
                    </span>{' '}
                    <br />
                    <span className=' white mr-3'>
                      DEFItt is paired by FTT which can give access to user to
                      our different verticals.
                    </span>
                    <div className='row'>
                      <div className='col-lg-12 col-md-6 text-center'>
                        <a
                          className='mt-2 btn btn-lg btn-gradient-purple btn-glow mb-2 animated'
                          data-animation='fadeInUpShorter'
                          href='/aboutus'
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
                    <img src='theme-assets/images/hero-coin.png' width='100' />
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
