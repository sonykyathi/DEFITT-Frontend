import React, { Fragment } from 'react';

const WhitePaper = () => {
  return (
    <Fragment>
      <section id='whitepaper' className='whitepaper section-padding'>
        <div className='container'>
          <div className='heading text-center'>
            <h6 className='sub-title'>Documents</h6>
            <h2 className='title'>Whitepaper</h2>
            <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              Cryptocurrencies like Bitcoin and
              Ethereum have a lot of benefits
              <br className='d-none d-xl-block' />
              The most important is that they don’t require trust in an
              intermediary organisation to send payments, enabling them to be
              used by anybody around the world
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-5 col-md-12'>
              <div className='whitepaper-img'>
                <img
                  className='img-fluid animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.6s'
                  src='theme-assets/images/whitepaper.png'
                  alt='whitepaper'
                />
              </div>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='content-area'>
                <h4
                  className='title animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.5s'
                >
                  Exchanges and Wallets
                </h4>
                <p
                  className='animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.6s'
                >
                  We introduce Financial Tech Token –FTT a cryptographic token,
                  completely collateralised by the U.S dollars, strictly pegged
                  on a 1:1 ratio, issued by FIT TECHNOLOGIES UK LIMITED. The FTT
                  is a stable coin that combines the US dollar's trustworthiness
                  and price stability with the technological advantages of a
                  cryptocurrency.
                </p>
                <p
                  className='animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  Deployed on the Binance Smart Chain Network and compliant with
                  the BEP-20 standard for tokens. As a BEP-20 compliant token,
                  the FTT can be transferred on the Binance Smart Chain Network.
                  FTT is created at the time of purchase on the FTT platform and
                  redeemed or "destroyed" at the time of sale on the FTT
                  platform.
                </p>
                <div className='whitepaper-languages'>
                  <div className='row'>
                    <div
                      className='col-6 col-md-3 text-center mt-4 animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.6s'
                    >
                      <a href='#' title='METAMASK'>
                        <img
                        width='60px'
                          src='theme-assets/images/flag-1.png'
                          alt='METAMASK'
                        />
                        <div className='lang-text'>
                          <span className='icon ti-download mr-1'></span>
                          <span className='language'>METAMASK</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className='col-6 col-md-3 text-center mt-4 animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.7s'
                    >
                      <a href='#' title='Trust wallet'>
                        <img
                        width='60px'
                          src='theme-assets/images/trust.png'
                          alt='Trust wallet'
                        />
                        <div className='lang-text'>
                          <span className='icon ti-download mr-1'></span>
                          <span className='language'>Trust wallet</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className='col-6 col-md-3 text-center mt-4 animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.8s'
                    >
                      <a href='#' title='Binance Wallet'>
                        <img
                        width='60px'
                          src='theme-assets/images/binance-wallet.png'
                          alt='Binance Wallet'
                        />
                        <div className='lang-text'>
                          <span className='icon ti-download mr-1'></span>
                          <span className='language'>	Binance Wallet</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className='col-6 col-md-3 text-center mt-4 animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.9s'
                    >
                      <a href='#' title='PancakeSwap'>
                        <img
                        width='60px'
                          src='theme-assets/images/flag-4.png'
                          alt='PancakeSwap'
                        />
                        <div className='lang-text'>
                          <span className='icon ti-download mr-1'></span>
                          <span className='language'>	PancakeSwap</span>
                        </div>
                      </a>
                    </div>
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

export default WhitePaper;
