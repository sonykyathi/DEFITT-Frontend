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
              <h6 className='sub-title'>Utilization</h6>
              <a target='_blank' href='https://ftttoken.com'>
                <h2 className='title'>Utilization with DEFItt</h2>
              </a>
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
              <div className='col-md-12 col-lg-6' style={{ margin: 'auto 0' }}>
                <p
                  className='content-desc animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.4s'
                >
                  Using FTT, exchanges can improve the below processes,
                  <br /> associated with the legacy financial system. Issues
                  such as:
                  <br className='d-none d-xl-block' />
                </p>
                <ul className='app-features'>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      Transaction fees are poor and undesirable
                    </span>
                  </li>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      {' '}
                      Identifying the right payment providers for an exchange
                    </span>
                  </li>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      Low the costs for minor value transfers are prohibitively
                      expensive
                    </span>
                  </li>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      Extremely low and unfavourable currency conversion costs
                    </span>
                  </li>
                </ul>

                <p
                  className='content-desc animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.4s'
                >
                  Financial Tech Token-FTT has additional benefits; these are:
                  <br className='d-none d-xl-block' />
                </p>
                <ul className='app-features'>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      FTT tokens can be used in place of traditional currency
                      deposit and withdrawal options
                    </span>
                  </li>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      Instead of employing a traditional bank or payment
                      provider, exchanges can accept crypto-¬fiats as a deposit,
                      withdrawal, or storage option
                    </span>
                  </li>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      Able to make customer assets save by using approved
                      crypto¬-processes including multi signature security, cold
                      and hot wallets, and more
                    </span>
                  </li>
                  <li className='dark-bg-text-color'>
                    <span className=' white mr-3'>
                      Able to Conduct audits in a sole cryptosystem is simpler
                      and more secure
                    </span>
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
