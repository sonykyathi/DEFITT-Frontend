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
                  <h5>Locking Profit</h5>
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
                    DEFItt makes it possible for holders to stake their DEFItt
                    and make their assets work for them by generating rewards,
                    rather than collecting dust in their crypto wallets. DEFItt
                    offers a no-risk investment, whereby for a one-year lock
                    period, FIT TECHNOLOGIES LIMITED UK will offer 40% assured
                    growth and locking for 2 years will yield a 100% assured
                    return on investment. A 3-year locking period will yield the
                    holder 200% assured growth.
                    <br />
                    DEFItt is paired by FTT which can give access to user to our
                    different verticals.
                  </p>
                  <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
                    <ul className='token-sale-info'>
                      <li>
                        Dfitt Play{' '}
                        <strong className='white'>5 June 2021</strong>
                      </li>
                      <li>
                        Defi Startup{' '}
                        <strong className='white'>5th Aug 2021</strong>
                      </li>
                      <li>
                        Defi TradX{' '}
                        <strong className='white'>5th Sep 2021</strong>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
                    <ul className='token-sale-info'>
                      <li>
                        Defi Kampus{' '}
                        <strong className='white'>20th Sep 2021</strong>
                      </li>
                      <li>
                        Defi NIRVAANA{' '}
                        <strong className='white'>13th Oct 2021</strong>
                      </li>
                      <li>
                        Defi Landscape{' '}
                        <strong className='white'>28th Oct 2021</strong>
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
