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
              <h6 className='sub-title'>DEFITT Staking</h6>
              <a target='_blank' href='https://ftttoken.com'>
                <h2 className='title'>DEFITT Staking</h2>
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
                      DEFItt makes it possible for holders to stake their DEFItt
                      and make their assets work for them by generating rewards,
                      rather than collecting dust in their crypto wallets.
                      DEFItt offers a no-risk investment, whereby for a one-year
                      lock period, FIT TECHNOLOGIES LIMITED UK will offer 40%
                      assured growth and locking for 2 years will yield a 100%
                      assured return on investment. A 3-year locking period will
                      yield the holder 200% assured growth.
                    </span>{' '}
                    <br />
                    <span className=' white mr-3'>
                      DEFItt is a solution that allows you to enjoy success and
                      inspired experiences while also assisting you in becoming
                      venture financed with greater benefits and fewer risks.
                      DEFItt serves as your companion token for gaining access
                      to the fiat world.
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
                          href='assets/about.pdf'
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
