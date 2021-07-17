import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Advisors = (props) => {
  return (
    <Fragment>
      <section id='advisor' className='advisor team section-padding'>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              <h6 className='sub-title'>Partners</h6>
              <h2 className='title'>Partners</h2>
            </div>
            <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              Digital currency is a money balance recorded electronically on
              <br className='d-none d-xl-block' />a stored-value card or other
              device. Another form of electronic money is network money.
            </p>
          </div>
          <div className='team-profile mt-5'>
            <div className='row mb-5 justify-content-center'>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='0.5s'
              >
                <div className='d-flex flex-column'>
                  <a
                    href='https://www.expochat.online/'
                    target='_blank'
                    className='text-white'
                  >
                    <div
                      className='team-img'
                      // data-toggle='modal'
                      // data-target='#teamUser1'
                    >
                      <img
                        src='theme-assets/images/partner-expochat.png'
                        alt='team-profile-1'
                        className='rounded-circle'
                        width='128'
                      />
                    </div>
                    {/* <div className='team-icon'>
                    <i className='ti-linkedin'></i>
                  </div> */}
                    <div className='profile partner-name text-center mt-3'>
                      <div className='name'>Expo Chat </div>
                      {/* <div className='role'>Blockchain Entrepreneur</div> */}
                      {/* <div className='crypto-profile'>
                      <img
                        src='theme-assets/images/company-logo-1.png'
                        alt='Team User'
                      />
                    </div> */}
                    </div>
                  </a>
                </div>
              </div>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='0.7s'
                // data-toggle='modal'
                // data-target='#teamUser3'
              >
                <div className='d-flex flex-column'>
                  <a
                    href='https://wefilm.com/'
                    target='_blank'
                    className='text-white'
                  >
                    <div className='team-img'>
                      <img
                        src='theme-assets/images/partner-wefilm.png'
                        alt='team-profile-1'
                        className='rounded-circle'
                        width='128'
                      />
                    </div>
                    {/* <div className='team-icon'>
                    <i className='ti-linkedin'></i>
                  </div> */}
                    <div className='profile partner-name text-center mt-3'>
                      <div className='name'>Weflim</div>
                      {/* <div className='role'>Fin-Tech Entrepreneur</div> */}
                      {/* <div className='crypto-profile'>
                      <img
                        src='theme-assets/images/company-logo-3.png'
                        alt='Team User'
                      />
                    </div> */}
                    </div>
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

Advisors.propTypes = {};

export default Advisors;
