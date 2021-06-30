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
                <div className='col-lg-6 col-md-12'>
                  <div className='banner-content pt-5'>
                    <h1
                      className='best-template animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.5s'
                    >
                      Buy, sell and spend DEFItt{' '}
                      <br className='d-none d-xl-block' />
                      decentralised tokens with{' '}
                      <br className='d-none d-xl-block' />
                      zero fuss.
                    </h1>
                    <h3
                      className='d-block white animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.6s'
                    >
                      DEFItt a part of the future of money{' '}
                      <br className='d-none d-xl-block' />
                      {/* merchants and affiliates. */}
                    </h3>
                    <div className='mt-5'>
                      <StripeCheckout
                        token={makePayment}
                        stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
                      >
                        <a
                          href="#"
                          className='btn btn-lg btn-gradient-purple btn-glow mr-4 mb-2 animated'
                          data-animation='fadeInUpShorter'
                          data-animation-delay='1.7s'
                        >Purchase Token</a>
                      </StripeCheckout>
                      <a
                        href='#whitepaper'
                        className='btn btn-lg btn-gradient-purple btn-glow mb-2 animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='1.8s'
                      >Whitepaper</a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 move-first'>
                  <div id='svg-animation'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 857 807'
                      width='857'
                      height='807'
                      preserveAspectRatio='xMidYMid meet'
                      style={{ width: '100%', height: '100%' }}
                    >
                      <g clipPath='url(#svg_animation_mask)'>
                        <g transform='matrix(1,0,0,1,-1.93,468.7)' opacity='1'>
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1s'
                            width='558px'
                            height='339px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/base.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,60,580)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2s'
                            width='130px'
                            height='130px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-shadow.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,60.8,560.9)' opacity='1'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='1.9s'
                            width='130px'
                            height='130px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-btc.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,215,580)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2s'
                            width='90px'
                            height='90px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-shadow.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,215,545)' opacity='1'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='1.5s'
                            width='90px'
                            height='130px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-eth.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,238,670)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2s'
                            width='120px'
                            height='120px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-shadow.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,240.8,660.9)' opacity='1'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='1.7s'
                            width='120px'
                            height='120px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-neo.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,97,560)' opacity='1'>
                          <image
                            className='animated svg-elements-2'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2s'
                            width='60px'
                            height='60px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/btc.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,230,550)' opacity='1'>
                          <image
                            className='animated svg-elements-1'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='1.6s'
                            width='60px'
                            height='60px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/eth.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,270 ,645)' opacity='1'>
                          <image
                            className='animated svg-elements-1'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='1.8s'
                            width='70px'
                            height='70px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/neo.svg'
                          ></image>
                        </g>

                        <g
                          transform='matrix(1,0,0,1,152.1,445.61)'
                          opacity='0.8'
                        >
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.4s'
                            width='406px'
                            height='274px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/base-shadow.svg'
                          ></image>
                        </g>
                        <g
                          transform='matrix(1,0,0,1,151.07,301.7)'
                          opacity='0.95'
                        >
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.4s'
                            width='558px'
                            height='339px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/base.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,428.5,403.5)' opacity='1'>
                          <g
                            opacity='1'
                            transform='matrix(1.0196,0,0,0.9676,-49.875,71.125)'
                          >
                            <path
                              className='animated'
                              data-animation='path'
                              data-animation-delay='1.4s'
                              strokeLinecap='round'
                              strokeLinejoin='miter'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='4'
                              d=' M57.584999084472656,53.77799987792969 C41.18600082397461,60.93600082397461 21.354000091552734,65.125 0,65.125 C-56.362789154052734,65.125 -102.125,35.94248580932617 -102.125,0 C-102.125,-35.94248580932617 -56.362789154052734,-65.125 0,-65.125 C0,-65.125 0,-65.125 0,-65.125 C56.362789154052734,-65.125 102.125,-35.94248580932617 102.125,0 C102.125,22.325000762939453 84.47000122070312,42.04199981689453 57.584999084472656,53.77799987792969'
                            ></path>
                          </g>
                        </g>

                        <g transform='matrix(1,0,0,1,345,595)' opacity='1'>
                          <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                            <path
                              className='animated'
                              data-animation='path-reverse'
                              data-animation-delay='1.4s'
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              strokeDashoffset='20'
                              fill='none'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='3'
                              d='M0.26,101.431l65-45  c0,0,5.4-1.4,5-25l1-10c0,0-1.2-5.6,6-8l50-30c0,0,7.4-3.6,1-7l-65-38'
                            ></path>
                          </g>
                        </g>

                        <g transform='matrix(1,0,0,1,290,545)' opacity='1'>
                          <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                            <path
                              className='animated'
                              data-animation='path-reverse'
                              data-animation-delay='1.4s'
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='3'
                              d='M0.239,42.447l11-6  c0,0,5-1.2,4-25v-9c0,0-2-5.8,6-9l16-8'
                            ></path>
                          </g>
                        </g>

                        <g transform='matrix(1,0,0,1,175,430)' opacity='1'>
                          <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                            <path
                              className='animated'
                              data-animation='path'
                              data-animation-delay='2.4s'
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='3'
                              d='M101.68,24.545l-25-15  c0,0-6.14-6-14-1l-28,17c0,0-6.4,5.16-5-30v-20c0,0,0.8-5.6-4-5l-35,25c0,0-5.2,1.6-4,18v90c0,0-1.6,9.8,6,11l40,25c0,0,7,2.6,2,7  l-35,20'
                            ></path>
                          </g>
                        </g>
                        <g transform='matrix(1,0,0,1,255,345)' opacity='0.5'>
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.4s'
                            width='250px'
                            height='260px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/logo-base.svg'
                          ></image>
                        </g>

                        <g
                          transform='matrix(0.1385,0,0,0.1175,275,385)'
                          opacity='0.65'
                        >
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.2s'
                            width='1500px'
                            height='1500px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/logo-shadow.svg'
                          ></image>
                        </g>
                        <g transform='matrix(1,0,0,1,310,410)' opacity='1'>
                          <image
                            className='animated cic-logo'
                            data-animation='fadeInUpShortest'
                            data-animation-delay='2.4s'
                            width='130px'
                            height='89px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/logo.svg'
                          ></image>
                        </g>

                        <g
                          transform='matrix(1,0,0,1,305.1,277.61)'
                          opacity='0.8'
                        >
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.8s'
                            width='406px'
                            height='274px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/base-shadow.svg'
                          ></image>
                        </g>

                        <g
                          transform='matrix(1,0,0,1,301.07,133.7)'
                          opacity='0.95'
                        >
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.8s'
                            width='558px'
                            height='339px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/base.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,320.5,330.5)' opacity='1'>
                          <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                            <path
                              className='animated'
                              data-animation='path'
                              data-animation-delay='2.4s'
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='3'
                              d='M32.208,82.43l-35-20  c0,0-6.714-2.571,1-7l26-15c0,0,4.857-1.143,8-8v-35c0,0,0.857-5.81,3-6l70-45'
                            ></path>
                          </g>
                        </g>

                        <g transform='matrix(1,0,0,1,415,235)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='3s'
                            width='100px'
                            height='100px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-shadow.svg'
                          ></image>
                        </g>
                        <g
                          transform='matrix(1,0,0,1,408.62,240.74)'
                          opacity='1'
                        >
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.1s'
                            width='109px'
                            height='68px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-car.svg'
                          ></image>
                        </g>

                        <g
                          transform='matrix(1,0,0,1,420.8799,200.27)'
                          opacity='1'
                        >
                          <image
                            className='animated svg-elements-1'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.2s'
                            width='80px'
                            height='80px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/car.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,475,410)' opacity='1'>
                          <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                            <path
                              className='animated'
                              data-animation='path'
                              data-animation-delay='2.4s'
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='3'
                              d='M0.261,90.447l50,30  c0,0,4.15,5.17,14,0l12-6c0,0,6-2,5-8v-50c0,0-0.5-9,9-12l80-45c0,0,5.75-3.5,0-7l-32-16'
                            ></path>
                          </g>
                        </g>

                        <g transform='matrix(1,0,0,1,565,300)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='3s'
                            width='120px'
                            height='120px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-shadow.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,565,310)' opacity='1'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.3s'
                            width='122px'
                            height='78px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-mobile.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,600,280)' opacity='1'>
                          <image
                            className='animated svg-elements-1'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.4s'
                            width='51px'
                            height='78px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/mobile.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,495,260)' opacity='1'>
                          <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                            <path
                              className='animated'
                              data-animation='path-reverse'
                              data-animation-delay='1.4s'
                              strokeLinecap='butt'
                              strokeLinejoin='miter'
                              fillOpacity='0'
                              strokeMiterlimit='4'
                              stroke='rgb(99,125,221)'
                              strokeOpacity='1'
                              strokeWidth='3'
                              d='M102.684,0v20  c0.666,7.167-9,11-9,11l-130,75c-11.25,4.5-9,13-9,13v50'
                            ></path>
                          </g>
                        </g>

                        <g transform='matrix(1,0,0,1,570,150)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='3s'
                            width='200px'
                            height='200px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-shadow.svg'
                          ></image>
                        </g>
                        <g transform='matrix(1,0,0,1,570.8,140.9)' opacity='1'>
                          <image
                            className='animated'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.4s'
                            width='200px'
                            height='150px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/icon-base-home.svg'
                          ></image>
                        </g>
                        <g transform='matrix(1,0,0,1,600,90)' opacity='1'>
                          <image
                            className='animated svg-elements-2'
                            data-animation='fadeInUpShorter'
                            data-animation-delay='2.5s'
                            className='svg-elements-2'
                            width='140px'
                            height='140px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/home.svg'
                          ></image>
                        </g>

                        <g transform='matrix(1,0,0,1,734,400)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='2s'
                            width='120px'
                            height='26px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/physical.svg'
                          ></image>
                        </g>
                        <g transform='matrix(1,0,0,1,602,569)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.6s'
                            width='180px'
                            height='24px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/cic-blockchain.svg'
                          ></image>
                        </g>
                        <g transform='matrix(1,0,0,1,432,745)' opacity='0.8'>
                          <image
                            className='animated'
                            data-animation='fadeInLeftShorter'
                            data-animation-delay='1.2s'
                            width='80px'
                            height='24px'
                            preserveAspectRatio='xMidYMid slice'
                            xlinkHref='theme-assets/images/svg/svg-animation/digital.svg'
                          ></image>
                        </g>
                      </g>
                      <defs>
                        <clipPath id='svg_animation_mask'>
                          <rect width='857' height='807' x='0' y='0'></rect>
                        </clipPath>
                      </defs>
                    </svg>
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
