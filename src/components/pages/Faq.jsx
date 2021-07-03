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
              A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.
              <br className='d-none d-xl-block' />
              Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers.
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
                    BTC
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
                    Ethereum
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
                    BNB
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
                    Cardano
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
                    Tether
                  </a>
                </div>
              </nav>
              <div className='tab-content' id='myTabContent'>
                <div className='tab-pane fade show active' id='general' role='tabpanel' aria-labelledby='general-tab'>
                  <div className="card">
                    <div className='card-body'>Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries</div>
                  </div>
                  {/* <div id='general-accordion' className='collapse-icon accordion-icon-rotate'>
                    <div
                      className='card animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.1s'
                    >
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link'
                            data-toggle='collapse'
                            data-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            <span className='icon'></span>
                            Can I make payments directly from an exchange?
                          </a>
                        </h5>
                      </div>
                      <div
                        id='collapseOne'
                        className='collapse show'
                        aria-labelledby='headingOne'
                        data-parent='#general-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div
                      className='card animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.2s'
                    >
                      <div className='card-header' id='headingTwo'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            <span className='icon'></span>
                            When will CICO be listed on exchanges?
                          </a>
                        </h5>
                      </div>
                      <div
                        id='collapseTwo'
                        className='collapse'
                        aria-labelledby='headingTwo'
                        data-parent='#general-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div
                      className='card animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.3s'
                    >
                      <div className='card-header' id='headingThree'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            <span className='icon'></span>
                            What is the CICO Token asmart contract address?
                          </a>
                        </h5>
                      </div>
                      <div
                        id='collapseThree'
                        className='collapse'
                        aria-labelledby='headingThree'
                        data-parent='#general-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className='tab-pane fade' id='ico' role='tabpanel' aria-labelledby='ico-tab'>
                  <div className="card">
                    <div className='card-body'>Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the second-largest cryptocurrency by market capitalization. Ethereum is the most actively used blockchain</div>
                  </div>
                  {/* <div
                    id='ico-accordion'
                    className='collapse-icon accordion-icon-rotate'
                  >
                    <div className='card'>
                      <div className='card-header' id='icoHeadingOne'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link'
                            data-toggle='collapse'
                            data-target='#icoCollapseOne'
                            aria-expanded='true'
                            aria-controls='icoCollapseOne'
                          >
                            <span className='icon'></span>
                            Pityful a rethoric question ran over her cheek?
                          </a>
                        </h5>
                      </div>
                      <div
                        id='icoCollapseOne'
                        className='collapse show'
                        aria-labelledby='icoHeadingOne'
                        data-parent='#ico-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='icoHeadingTwo'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#icoCollapseTwo'
                            aria-expanded='false'
                            aria-controls='icoCollapseTwo'
                          >
                            <span className='icon'></span>
                            Which roasted parts of sentences fly into your
                            mouth?
                          </a>
                        </h5>
                      </div>
                      <div
                        id='icoCollapseTwo'
                        className='collapse'
                        aria-labelledby='icoHeadingTwo'
                        data-parent='#ico-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='icoHeadingThree'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#icoCollapseThree'
                            aria-expanded='false'
                            aria-controls='icoCollapseThree'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id='icoCollapseThree'
                        className='collapse'
                        aria-labelledby='icoHeadingThree'
                        data-parent='#ico-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className='tab-pane fade' id='token' role='tabpanel' aria-labelledby='token-tab'>
                  <div className="card">
                    <div className='card-body'>Binance Coin (BNB) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. ... Users of Binance Coin receive a discount in transaction fees on the Binance Exchange as an incentive. BNB can also be exchanged or traded for other cryptocurrencies, such as Bitcoin.</div>
                  </div>
                  {/* <div
                    id='token-accordion'
                    className='collapse-icon accordion-icon-rotate'
                  >
                    <div className='card'>
                      <div className='card-header' id='tokenHeadingOne'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link'
                            data-toggle='collapse'
                            data-target='#tokenCollapseOne'
                            aria-expanded='true'
                            aria-controls='tokenCollapseOne'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #1
                          </a>
                        </h5>
                      </div>
                      <div
                        id='tokenCollapseOne'
                        className='collapse show'
                        aria-labelledby='tokenHeadingOne'
                        data-parent='#token-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='tokenHeadingTwo'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#tokenCollapseTwo'
                            aria-expanded='false'
                            aria-controls='tokenCollapseTwo'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #2
                          </a>
                        </h5>
                      </div>
                      <div
                        id='tokenCollapseTwo'
                        className='collapse'
                        aria-labelledby='tokenHeadingTwo'
                        data-parent='#token-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='tokenHeadingThree'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#tokenCollapseThree'
                            aria-expanded='false'
                            aria-controls='tokenCollapseThree'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id='tokenCollapseThree'
                        className='collapse'
                        aria-labelledby='tokenHeadingThree'
                        data-parent='#token-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className='tab-pane fade' id='client' role='tabpanel' aria-labelledby='client-tab'>
                  <div className="card">
                    <div className='card-body'>Cardano is a public blockchain platform. It is open-source and decentralized, with consensus achieved using proof of stake. It can facilitate peer-to-peer transactions with its internal cryptocurrency, Ada. Cardano was founded in 2015 by Ethereum co-founder Charles Hoskinson</div>
                  </div>
                  {/* <div
                    id='client-accordion'
                    className='collapse-icon accordion-icon-rotate'
                  >
                    <div className='card'>
                      <div className='card-header' id='clientHeadingOne'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link'
                            data-toggle='collapse'
                            data-target='#clientCollapseOne'
                            aria-expanded='true'
                            aria-controls='clientCollapseOne'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #1
                          </a>
                        </h5>
                      </div>
                      <div
                        id='clientCollapseOne'
                        className='collapse show'
                        aria-labelledby='clientHeadingOne'
                        data-parent='#client-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='clientHeadingTwo'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#clientCollapseTwo'
                            aria-expanded='false'
                            aria-controls='clientCollapseTwo'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #2
                          </a>
                        </h5>
                      </div>
                      <div
                        id='clientCollapseTwo'
                        className='collapse'
                        aria-labelledby='clientHeadingTwo'
                        data-parent='#client-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='clientHeadingThree'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#clientCollapseThree'
                            aria-expanded='false'
                            aria-controls='clientCollapseThree'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id='clientCollapseThree'
                        className='collapse'
                        aria-labelledby='clientHeadingThree'
                        data-parent='#client-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className='tab-pane fade' id='legal' role='tabpanel' aria-labelledby='legal-tab'>
                  <div className="card">
                    <div className='card-body'>Tether is a controversial cryptocurrency with tokens issued by Tether Limited, which in turn is controlled by the owners of Bitfinex. Tether Limited formerly falsely claimed that each token was backed by one United States dollar, but on 14 March 2019 changed the backing to include loans to affiliate companies.</div>
                  </div>
                  {/* <div
                    id='legal-accordion'
                    className='collapse-icon accordion-icon-rotate'
                  >
                    <div className='card'>
                      <div className='card-header' id='legalHeadingOne'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link'
                            data-toggle='collapse'
                            data-target='#legalCollapseOne'
                            aria-expanded='true'
                            aria-controls='legalCollapseOne'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #1
                          </a>
                        </h5>
                      </div>
                      <div
                        id='legalCollapseOne'
                        className='collapse show'
                        aria-labelledby='legalHeadingOne'
                        data-parent='#legal-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='legalHeadingTwo'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#legalCollapseTwo'
                            aria-expanded='false'
                            aria-controls='legalCollapseTwo'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #2
                          </a>
                        </h5>
                      </div>
                      <div
                        id='legalCollapseTwo'
                        className='collapse'
                        aria-labelledby='legalHeadingTwo'
                        data-parent='#legal-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='legalHeadingThree'>
                        <h5 className='mb-0'>
                          <a
                            className='btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#legalCollapseThree'
                            aria-expanded='false'
                            aria-controls='legalCollapseThree'
                          >
                            <span className='icon'></span>
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id='legalCollapseThree'
                        className='collapse'
                        aria-labelledby='legalHeadingThree'
                        data-parent='#legal-accordion'
                      >
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div> */}
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
