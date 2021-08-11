import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  return (
    <Fragment>
      <section className='gallery section-padding' id='gallery'>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              <h6 className='sub-title'>Gallery</h6>
              <h2 className='title'>Gallery</h2>
            </div>
          </div>
          <div className='content-area'>
            {/* <div className='row'>
              <div className='col-md-12 col-lg-6' style={{ margin: 'auto 0' }}>
                <ul className='app-features'>
                  <li className='about-text dark-bg-text-color'>
                    <p className=' white'>
                      DEFItt is a solution that allows you to enjoy success and
                      inspired experiences while also assisting you in becoming
                      venture financed with greater benefits and fewer risks.
                      DEFItt serves as your companion token for gaining access
                      to the fiat world. For an investor, this is a
                      once-in-a-lifetime opportunity, the one opportunity, and a
                      well-planned approach. The result will be a modernised
                      token that flourishes as a consequence of exposure to a
                      well-thought-out strategy capable of dealing with
                      difficulties as well as pressures. DEFItt is using the BEP
                      20 Platform on the Binance Smart Chain which enables the
                      transactions security, speed and reliability.
                    </p>{' '}
                    <p className=' white'>
                      Blockchain is the future and we are all aware of It
                      however the right usage of blockchain is what makes DEFItt
                      different from all. An ecosystem that DEFItt has made with
                      its paired stable token FTT, makes this token touch human
                      lives.
                    </p>{' '}
                    <p className=' white'>
                      DEFItt is paired by FTT which can give access to user to
                      our different verticals.
                    </p>
                    <div className='about-btn'>
                      <a className='btn btn-lg btn-gradient-purple btn-glow animated' data-animation='fadeInUpShorter' href='/aboutus' target='_blank'>explore defitt</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className='col-md-12 col-lg-6 animated'
                data-animation='fadeInUpShorter'
                data-animation-delay='0.7s'
              >
                <div className='what-is-crypto-img'>
                  <img
                    className='img-fluid'
                    src='theme-assets/images/what-is-crypto.png'
                    alt='What is Crypto?'
                  />
                  <div className='play-video text-center'>
                    <a href="https://ftttoken.com" target='_blank'><img src='theme-assets/images/hero-coin.png' className="img-fluid" alt=""/></a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Gallery.propTypes = {};

export default Gallery;
