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
        {/* <div id='particles-js'></div> */}
        <div className='head-content d-flex align-items-center'>
          <div className='container'>
            <div className='banner-wrapper'>
              <div className='row align-items-center'>
                <div className='col-lg-12 col-md-6'>
                  <marquee className='text-white' scrollamount='10'>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img src='theme-assets/images/logo.png' width='50px' />
                      </span>
                      &nbsp; 1 Defitt = $10.00, &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img
                          src='theme-assets/images/hero-coin.png'
                          width='50px'
                        />
                      </span>
                      1 Ftt = $1.00, &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img src='theme-assets/images/btc.png' width='50px' />
                      </span>
                      1 BTC = $32,159.46, &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img
                          src='theme-assets/images/ethereum.png'
                          width='50px'
                        />
                      </span>
                      1 ETH = $1,990.30, &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img
                          src='theme-assets/images/tether.png'
                          width='50px'
                        />
                      </span>
                      1 USDT = $1.00, &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img src='theme-assets/images/bnb.png' width='50px' />
                      </span>
                      1 BNB = $293.08, &nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontSize: 18 }}>
                      <span>
                        <img
                          src='theme-assets/images/cardano.png'
                          width='50px'
                        />
                      </span>
                      1 ADA = $1.17 &nbsp;&nbsp;&nbsp;
                    </span>
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
                      First of its kind, Investment with Zero Risk. Buy, sell
                      and spend DEFItt with zero fuss.
                      <br />
                    </h1>
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
