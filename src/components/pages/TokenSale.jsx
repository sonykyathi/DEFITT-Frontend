import React, { Fragment, useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const TokenSale = () => {
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
      <section
        id='token-sale-mobile-app'
        className='token-sale-mobile-app section-padding '
      >
        <div className='token-sale'>
          <div className='container'>
            <div className='heading text-center'>
              <h6 className='sub-title'>INVESTMENT</h6>
              <h2 className='title'>INVESTMENT PROFITABILITY</h2>
            </div>
            <div className='row align-items-center'>
              <div
                className='col-xl-5 col-lg-6 col-md-12 animated'
                data-animation='fadeInUpShorter'
                data-animation-delay='0.6s'
              >
                <div className='token-sale-counter'>
                  <h5>LOCKING PROFIT</h5>
                  <div className='token-details text-center'>
                    <div className='clock-counter mb-4'>
                      <div className='clock ml-0 mt-5 d-flex justify-content-center'></div>
                      <div className='message'></div>
                    </div>
                    <div className='loading-bar mb-2 position-relative'>
                      <div className='progres-area pb-5'>
                        <ul className='progress-top'>
                          <li></li>
                          <li className='pre-sale'>1 Year</li>
                          <li>2 Years</li>
                          <li className='bonus'>3 Years</li>
                          <li></li>
                        </ul>
                        <ul className='progress-bars'>
                          <li></li>
                          <li>|</li>
                          <li>|</li>
                          <li>|</li>
                          <li></li>
                        </ul>
                        <div className='progress'>
                          <div
                            className='progress-bar progress-bar-custom'
                            role='progressbar'
                            style={{ width: '28%' }}
                            aria-valuenow='100'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                        <div className='progress-bottom'>
                          {/* <div className='progress-info'>65% target raised</div> */}
                          <div className='progress-info'>1 DEFITT = $10</div>
                        </div>
                      </div>
                    </div>
                    <a
                      href={process.env.REACT_APP_ADMIN_URL}
                      target='_blank'
                      className='btn btn-lg btn-glow btn-gradient-blue'
                    >
                      Purchase Token
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-7 col-lg-6 col-md-12 mt-5 pl-4 animated'
                data-animation='fadeInUpShorter'
                data-animation-delay='0.6s'
              >
                <div className='row'>
                  <p>
                  DEFItt allows token holders to stake their asset and generate rewards instead of stashing it in their crypto wallet without any profit. For a one-year lock period, Fit Technologies Limited UK will offer a 40% assured asset growth. This return on investment (ROI) can even reach up to 100% and 200% if the user stakes DEFITT for two years and three years, respectively.
                    <br />
                    DEFItt holders can also access all verticals since DEFITT is paired to FTT. 
                  </p>
                  <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
                    <ul className='token-sale-info'>
                      <li>
                        Dfitt Play{' '}
                        <strong className='white'>June 5, 2021</strong>
                      </li>
                      <li>
                        Defi Startup{' '}
                        <strong className='white'>Aug 5, 2021</strong>
                      </li>
                      <li>
                        Defi TradX{' '}
                        <strong className='white'>Sep 5, 2021</strong>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
                    <ul className='token-sale-info'>
                      <li>
                        Defi Kampus{' '}
                        <strong className='white'>Sep 20, 2021</strong>
                      </li>
                      <li>
                      DeFi Nirvaana{' '}
                        <strong className='white'>Oct 13, 2021</strong>
                      </li>
                      <li>
                        Defi Landscape{' '}
                        <strong className='white'>Oct 28, 2021</strong>
                      </li>
                    </ul>
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

export default TokenSale;
