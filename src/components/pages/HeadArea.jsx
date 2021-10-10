import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { downloadWhitePaper, useInterval } from '../../utils/utils'

import StripeCheckout from 'react-stripe-checkout';

const HeadArea = (props) => {
  const [state, setstate] = useState({ BTC: 32159.46, USDT: 1, ETH: 1990.30, DEFITT: 10, FTT: 1, ADA: 1.17, BNB: 293.08 },{
    BTC24HR:'', USDT24HR:''
  })
  const [value, setvalue] = useState({ BTC24HR: 0, USDT24HR: 0, ETH24HR:0, DEFITT24HR: 0, FTT24HR: 0, ADA24HR: 0, BNB24HR: 0 })

  useInterval(() => {
    cryptoCompareAPI()
  }, 2000)


  const makePayment = (token) => {
    axios
      .post(`${process.env.REACT_APP_API}/api/v1/payment`, token)
      .then((response) => {


      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };


  const cryptoCompareAPI = () => {
    axios
      .get(`${process.env.REACT_APP_API}/api/v1/whitepaper/coin-listing`)
      .then((response) => {
        let OBJ = state;
        let OBJHR = value;
        if (response?.data?.status === 200) {
          response?.data?.data?.map((val) => {
           
            if (val.FROMSYMBOL === "BTC") {
              OBJ.BTC = val.PRICE
              
              OBJHR.BTC24HR =val.CHANGEPCT24HOUR
            }
            if (val.FROMSYMBOL === "ETH") {
              OBJ.ETH = val.PRICE
              OBJHR.ETH24HR =val.CHANGEPCT24HOUR
            }
            if (val.FROMSYMBOL === "BNB") {
              OBJ.BNB = val.PRICE
              OBJHR.BNB24HR =val.CHANGEPCT24HOUR
            }
            if (val.FROMSYMBOL === "ADA") {
              OBJ.ADA = val.PRICE
              OBJHR.ADA24HR =val.CHANGEPCT24HOUR
            }
            if (val.FROMSYMBOL === "USDT") {
              OBJ.USDT = val.PRICE
              OBJHR.USDT24HR =val.CHANGEPCT24HOUR
            }
          })

          setstate({ ...OBJ })
          setvalue({...OBJHR})
        };
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const removeMinus =(values)=>{
    
    if(values.charAt(0)==='-'){
      const s = values.substring(1);
      return s;
    }else{
      return values;
    }

  }
  const selectClass =(val)=>{
    if(Math.sign(val)===-1){
      return "negative";
    }else{
      return "positive";
    }
  }

const selectIcon =(val)=>{
    if(Math.sign(val)===-1){
      return "fa fa-caret-down";
    }else{
      return "fa fa-caret-up";
    }
  }
  return (
    <Fragment>
      <section className='head-area' id='head-area'>
        {/* <div id='particles-js'></div> */}
        <div className='head-content d-flex align-items-center'>
          <div className='container'>
            <div className='banner-wrapper'>
              <div className='row align-items-center'>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 marqborder cusscroll ">
                  <div className="hero-marquee ">
                    
                    <marquee className="text-white" scrollamount='10'>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img src='theme-assets/images/logo.png' className="img-fluid" alt="" />
                        </div>
                        
                        <p>1 Defitt = ${state.DEFITT.toFixed(2)}</p>
                       
                      </div><span className="seperator">|</span>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img src='theme-assets/images/hero-coin.png' className="img-fluid" alt="" />
                        </div>
                        <p>1 Ftt = $1.00</p>
                      </div><span className="seperator">|</span>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img src='theme-assets/images/btc.png' className="img-fluid" alt="" />
                        </div>
                        <p>1 BTC = ${state.BTC.toFixed(2)} </p>
                        <span className={selectClass(value.BTC24HR)}> <i class={selectIcon(value.BTC24HR)} aria-hidden="true"> </i>{removeMinus(value.BTC24HR.toFixed(2))}% </span>
                        {/* <span >{value.BTC24HR.toFixed(2)}</span> */}
                      </div><span className="seperator">|</span>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img
                            src='theme-assets/images/ethereum.png' className="img-fluid" alt="" />
                        </div>
                        <p>1 ETH = ${state.ETH.toFixed(2)}</p>
                        <span className={selectClass(value.ETH24HR)}> <i class={selectIcon(value.ETH24HR)} aria-hidden="true"> </i>
                         {removeMinus(value.ETH24HR.toFixed(2))}%</span>
                      </div><span className="seperator">|</span>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img
                            src='theme-assets/images/tether.png' className="img-fluid" alt="" />
                        </div>
                        <p>1 USDT = ${state.USDT.toFixed(2)} </p>
                        <span className={selectClass(value.USDT24HR)}> <i class={selectIcon(value.USDT24HR)} aria-hidden="true"></i> {removeMinus(value.USDT24HR.toFixed(2))}%</span>
                      </div><span className="seperator">|</span>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img src='theme-assets/images/bnb.png' className="img-fluid" alt="" />
                        </div>
                        <p>1 BNB = ${state.BNB.toFixed(2)}</p>
                        <span className={selectClass(value.BNB24HR)} > <i class={selectIcon(value.BNB24HR)} aria-hidden="true"></i> {removeMinus(value.BNB24HR.toFixed(2))}% </span>
                      </div><span className="seperator">|</span>
                      <div className="marquee-states">
                        <div className="marquee-icon">
                          <img src='theme-assets/images/cardano.png' className="img-fluid" alt="" />
                        </div>
                        <p>1 ADA = ${state.ADA.toFixed(2)}</p>
                        <span className={selectClass(value.ADA24HR)}> <i class={selectIcon(value.ADA24HR)}aria-hidden="true"></i> {removeMinus(value.ADA24HR.toFixed(2))}% </span>
                      </div>
                    </marquee>
                  </div>
                </div>
              </div>
              <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12'>
                  <div className='banner-content'>
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
                        onClick={downloadWhitePaper}
                        style={{ cursor: "pointer", color: "white" }}
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
                  <div id='svg-animation' className="banner-coin text-center">
                    <a href='/' target='_blank'>
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
