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
              <h6 className='sub-title'>Pre-Sale &amp; Values</h6>
              <h2 className='title'>Tokens Sale</h2>
              <p
                className='content-desc animated'
                data-animation='fadeInUpShorter'
                data-animation-delay='0.4s'
              >
                The first token sale (also known as an ICO) was held by
                Mastercoin in
                <br className='d-none d-xl-block' />
                July 2013. Ethereum raised money with a token sale in 2014.
              </p>
            </div>
            <div className='row align-items-center'>
              <div
                className='col-xl-5 col-lg-6 col-md-12 animated'
                data-animation='fadeInUpShorter'
                data-animation-delay='0.6s'
              >
                <div className='token-sale-counter'>
                  <h5>ICO will start in</h5>
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
                          <div className='progress-info'>1 DEFITT = $1000 = 3177.38 CIC</div>
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
                    Token Sale DEFItt is a decentralised digital currency that
                    is free of complete censorship and accessible to anyone. It
                    is built on the BEP-20 token standard, powered by the
                    Binance Smart Contract Blockchain.
                    <br />
                    DEFItt leverages the properties of the blockchain
                    technology, decentralised unalterable and indestructible
                    technology to create a trusty, reduced risk, fraud-free and
                    transparent platform in a scalable way.
                  </p>
                  <div className='col-md-5'>
                    <ul className='token-sale-info'>
                      <li>
                        Dfitt Play{' '}
                        <strong className='white'>5 June 2021</strong>
                      </li>
                      <li>
                        DefiStartup{' '}
                        <strong className='white'>5 June 2021</strong>
                      </li>
                      <li>
                        Defi TradX{' '}
                        <strong className='white'>19 June 2021</strong>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-7 pr-0'>
                    <ul className='token-sale-info'>
                      <li>
                        Defi Kampus{' '}
                        <strong className='white'>3 July 2021</strong>
                      </li>
                      <li>
                        Defi NIRVAANA{' '}
                        <strong className='white'>7 July 2021</strong>
                      </li>
                      <li>
                        Defi Landscape{' '}
                        <strong className='white'>31 July 2021</strong>
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
