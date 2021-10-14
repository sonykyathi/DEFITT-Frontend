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
                  EXCHANGES AND WALLETS
                </h4>
                <p
                  className='animated text-white'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.6s'
                >
                  Developed to be fully compatible with all platforms that accept the BEP-20 standard, DEFItt can be stored in major wallets such as Trust Wallet and MetaMask. No single company facilitates the sale and trading of DEFItt, offering advantages like increased scalability, transparency, accessibility, and resistance against inflation.
                </p>
                <p
                  className='animated text-white'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  Crypto users and investors that are interested in obtaining DEFItt can buy from decentralized excchange PancakeSwap.
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
                          <span className='language'>MetaMask</span>
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
                          <span className='language'>Trust Wallet</span>
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
