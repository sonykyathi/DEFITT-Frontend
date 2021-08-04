import React, { Fragment } from 'react';

const Wallets = () => {
  return (
    <Fragment>
      <section id='whitepaper' className='whitepaper section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='content-area text-center'>
                <h4
                  className='title animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.5s'
                >
                  Exchanges and Wallets
                </h4>
                <p
                  className='animated text-white'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.6s'
                >
                  Cryptocurrency is gaining popularity throughout the world,
                  with recent innovation in the United States and elsewhere, and
                  emerging economies leading the trends. According to studies,
                  blockchain technology is expected to contribute significantly
                  to global GDP by 2030.
                </p>
                <p
                  className='animated text-white'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  DEFItt can be stored in any wallet of your choice mainly
                  TRUST, METAMASK or any other Transfers are encrypted using
                  either public or private keys and are directly linked to the
                  user's digital wallet.
                </p>
                <p
                  className='animated text-white'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  Unlike traditional currencies, it is not distributed by a
                  single company and is not vulnerable to government
                  intervention or manipulation. It also offers several
                  advantages, such as increased mobility, transferability,
                  inflation resilience, and visibility.
                </p>
                <p
                  className='animated text-white'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  DEFItt is currently available on PANCAKE SWAP which is one of
                  the top growing exchanges in the world.
                </p>

                <div className='whitepaper-languages'>
                  <div className='row'>
                    <div
                      className='col-6 col-md-3 text-center mt-4 animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.6s'
                    >
                      <a href='https://metamask.io/' target="_blank" title='METAMASK'>
                        <img
                          width='60px'
                          src='theme-assets/images/metamask.png'
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
                      <a href='https://trustwallet.com/' target="_blank" title='Trust wallet'>
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
                      <a href='https://www.binance.com/en/wallet-direct' target="_blank" title='Binance Wallet'>
                        <img
                          width='60px'
                          src='theme-assets/images/binance-wallet.png'
                          alt='Binance Wallet'
                        />
                        <div className='lang-text'>
                          <span className='icon ti-download mr-1'></span>
                          <span className='language'> Binance Wallet</span>
                        </div>
                      </a>
                    </div>
                    <div
                      className='col-6 col-md-3 text-center mt-4 animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.9s'
                    >
                      <a href='https://pancakeswap.finance/' target="_blank" title='PancakeSwap'>
                        <img
                          width='60px'
                          src='theme-assets/images/pancakeswap.png'
                          alt='PancakeSwap'
                        />
                        <div className='lang-text'>
                          <span className='icon ti-download mr-1'></span>
                          <span className='language'> PancakeSwap</span>
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

export default Wallets;
