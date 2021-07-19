import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const HeadArea = (props) => {
  const makePayment = (token) => {
    axios
      .post(`${process.env.REACT_APP_API}/api/v1/payment`, token)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <Fragment>
      <section className='head-area' id='head-area'>
        <div id='particles-js'></div>
        <div className='head-content d-flex align-items-center'>
          <div className='container'>
            <div className='banner-wrapper'>
              <div className='row align-items-center'>
                <div className='col-lg-12 col-md-6' style={{}}>
                  <marquee className='text-white' scrollamount='8'>
                    <span style={{ fontSize: 18 }}>
                      1 Defitt = 10$ AND &nbsp;&nbsp;&nbsp;{' '}
                    </span>{' '}
                    <span style={{ fontSize: 18 }}>1 Ftt = 1$</span>
                  </marquee>
                </div>
              </div>
              <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12'>
                  <div className='banner-content pt-5'>
                    <div className='banner-logo'>
                      <img
                        src='theme-assets/images/logo.png'
                        alt='Defitt Logo'
                        className='img-fluid'
                      />
                    </div>
                    <h1
                      className='best-template animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.5s'
                    >
                      DEFItt intends to lead the market for decentralized
                      finance. <br /> A decentralized BEP-20 token which gives
                      it access to the world to be the next alternative to paper
                      money.
                    </h1>
                    {/* <h1
                      className='best-template animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.5s'
                    >
                      DEFItt intends to lead the market for decentralized
                      finance.
                      <br />A decentralized BEP-20 token which gives it access
                      to the world <br className='d-none d-xl-block' />
                      to be the next alternative
                      <br className='d-none d-xl-block' />
                      to paper money.
                    </h1>
                    <h3
                      className='d-block white animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.6s'
                    >
                      The future of decentralization{' '}
                      <br className='d-none d-xl-block' />
                    </h3> */}
                    <div className='mt-5'>
                      <a
                        href={process.env.REACT_APP_ADMIN_URL}
                        target='_blank'
                        className='btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='1.7s'
                      >
                        Purchase Token
                      </a>
                      <a
                        href='assets/whitepaper.pdf'
                        target='_blank'
                        className='btn btn-lg btn-gradient-purple btn-glow mb-2 animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='1.8s'
                      >
                        Whitepaper
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 move-first'>
                  <div
                    id='svg-animation'
                    style={{ width: '300px', margin: '0 auto' }}
                  >
                    <a href='theme-assets/images/logo-200.jpg' target='_blank'>
                      <img
                        src='theme-assets/images/defi-coin-logo.png'
                        className='img-fluid cic-logo-animation hero-coin'
                        data-animation='fadeInUpShortest'
                        data-animation-delay='2.4s'
                        preserveAspectRatio='xMidYMid slice'
                        alt=''
                      />
                    </a>
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

HeadArea.propTypes = {};

export default HeadArea;
