import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Faq = (props) => {
  return (
    <Fragment>
      <section id='faq' className='faq section-padding'>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              {/* <h6 className='sub-title'>question</h6> 
              <h2 className='title'>FAQ</h2> */}
            </div>
            <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              A cryptocurrency is a digital or virtual currency that is secured
              by cryptography, which makes it nearly impossible to counterfeit
              or double-spend.
              <br className='d-none d-xl-block' />
              Many cryptocurrencies are decentralized networks based on
              blockchain technology—a distributed ledger enforced by a disparate
              network of computers.
            </p>
          </div>
          <div className='row'>
            <div className='col'>
              <nav>
                <div
                  className='nav nav-pills nav-underline mb-5 animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.5s'
                  id='myTab'
                  role='tablist'
                >
                  <a
                    href='#general'
                    className='nav-item nav-link active'
                    id='general-tab'
                    data-toggle='tab'
                    aria-controls='general'
                    aria-selected='true'
                    role='tab'
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                      <img  width ='100px' src='theme-assets/images/btc.png'></img>
                      <span>BTC</span>
                    </div>
                  </a>
                  <a
                    href='#ico'
                    className='nav-item nav-link'
                    id='ico-tab'
                    data-toggle='tab'
                    aria-controls='ico'
                    aria-selected='false'
                    role='tab'
                  >
                  <div style={{ display: 'flex', flexDirection: 'column' , alignItems:'center'}}>
                      <img  width ='100px' src='theme-assets/images/ethereum.png'></img>
                      <span>Ethereum</span>
                    </div>
                   
                  </a>
                  <a
                    href='#token'
                    className='nav-item nav-link'
                    id='token-tab'
                    data-toggle='tab'
                    aria-controls='token'
                    aria-selected='false'
                    role='tab'
                  >
                <div style={{ display: 'flex', flexDirection: 'column' , alignItems:'center'}}>
                      <img  width ='100px' src='theme-assets/images/bnb.png'></img>
                      <span>BNB</span>
                    </div>
                  </a>
                  <a
                    href='#client'
                    className='nav-item nav-link'
                    id='client-tab'
                    data-toggle='tab'
                    aria-controls='client'
                    aria-selected='false'
                    role='tab'
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' , alignItems:'center'}}>
                      <img width ='100px'  src='theme-assets/images/cardano.png'></img>
                      <span>Cardano</span>
                    </div>
                  </a>
                  <a
                    href='#legal'
                    className='nav-item nav-link'
                    id='legal-tab'
                    data-toggle='tab'
                    aria-controls='legal'
                    aria-selected='false'
                    role='tab'
                  >
                   <div style={{ display: 'flex', flexDirection: 'column' , alignItems:'center'}}>
                      <img width ='100px'  src='theme-assets/images/tether.png'></img>
                      <span>Tether</span>
                    </div>
                  </a>
                </div>
              </nav>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='general'
                  role='tabpanel'
                  aria-labelledby='general-tab'
                >
                  <div className='card'>
                    <div className='card-body'>
                      Bitcoin is a decentralized digital currency, without a
                      central bank or single administrator, that can be sent
                      from user to user on the peer-to-peer bitcoin network
                      without the need for intermediaries
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='ico'
                  role='tabpanel'
                  aria-labelledby='ico-tab'
                >
                  <div className='card'>
                    <div className='card-body'>
                      Ethereum is a decentralized, open-source blockchain with
                      smart contract functionality. Ether is the native
                      cryptocurrency of the platform. After Bitcoin, it is the
                      second-largest cryptocurrency by market capitalization.
                      Ethereum is the most actively used blockchain
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='token'
                  role='tabpanel'
                  aria-labelledby='token-tab'
                >
                  <div className='card'>
                    <div className='card-body'>
                      Binance Coin (BNB) is a cryptocurrency that can be used to
                      trade and pay fees on the Binance cryptocurrency exchange.
                      ... Users of Binance Coin receive a discount in
                      transaction fees on the Binance Exchange as an incentive.
                      BNB can also be exchanged or traded for other
                      cryptocurrencies, such as Bitcoin.
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='client'
                  role='tabpanel'
                  aria-labelledby='client-tab'
                >
                  <div className='card'>
                    <div className='card-body'>
                      Cardano is a public blockchain platform. It is open-source
                      and decentralized, with consensus achieved using proof of
                      stake. It can facilitate peer-to-peer transactions with
                      its internal cryptocurrency, Ada. Cardano was founded in
                      2015 by Ethereum co-founder Charles Hoskinson
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='legal'
                  role='tabpanel'
                  aria-labelledby='legal-tab'
                >
                  <div className='card'>
                    <div className='card-body'>
                      Tether is a controversial cryptocurrency with tokens
                      issued by Tether Limited, which in turn is controlled by
                      the owners of Bitfinex. Tether Limited formerly falsely
                      claimed that each token was backed by one United States
                      dollar, but on 14 March 2019 changed the backing to
                      include loans to affiliate companies.
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

Faq.propTypes = {};

export default Faq;
