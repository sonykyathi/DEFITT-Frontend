import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {downloadWhitePaper} from '../../utils/utils'

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        className='footer static-bottom footer-dark footer-custom-className'
        data-midnight='white'
      >
        <div className='container'>
          <div className='footer-wrapper'>
            <div className='row'>
              <div className='col-xl-4 col-lg-5 col-md-5 col-sm-7 col-xs-12 col-12'>
                <div className='about'>
                  <div
                    className='footer-logo title animated'
                    data-animation='fadeInUpShorter'
                    data-animation-delay='0.2s'
                  >
                    {' '}
                    <a href={`${process.env.REACT_APP_URL}/#head-area`}>
                      <img src='theme-assets/images/logo.png' alt='Logo' />
                    </a>
                  </div>
                  <div
                    className='about-text animated'
                    data-animation='fadeInUpShorter'
                    data-animation-delay='0.3s'
                  >
                    <p className='grey-accent2'>
                      DEFItt is a decentralised digital currency that is free of
                      complete censorship and accessible to anyone. It is built
                      on the BEP-20 token standard, powered by the Binance Smart
                      Contract Blockchain.
                    </p>
                  </div>
                  <ul className='social-buttons list-unstyled mb-5'>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.5s'
                    >
                      <a
                        target='_blank'
                        href='https://twitter.com/Defitt_ftt'
                        title='Twitter'
                        className='btn font-medium'
                      >
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.4s'
                    >
                      <a
                        target='_blank'
                        href='https://www.facebook.com/de.fitt.1/'
                        title='Facebook'
                        className='btn font-medium'
                      >
                        <i className='ti-facebook'></i>
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.7s'
                    >
                      <a
                        target='_blank'
                        href='https://www.instagram.com/defi.tt/'
                        title='Instagram'
                        className='btn font-medium'
                      >
                        <i className='ti-instagram'></i>
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.6s'
                    >
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/defitt-financial-services/'
                        title='LinkedIn'
                        className='btn font-medium'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.8s'
                    >
                      <a
                        target='_blank'
                        href='https://www.youtube.com/channel/UCyO9CUPft6N_xpnAl4pZONg'
                        title='Youtube'
                        className='btn font-medium'
                      >
                        <i className='ti-youtube'></i>
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.8s'
                    >
                      <a
                        target='_blank'
                        href='https://t.me/DefittChat'
                        title='Telegram'
                        className='btn font-medium'
                      >
                        <i className='fa fa-telegram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-4 col-lg-3 col-md-3 col-sm-1 col-xs-12 col-12 d-sm-none d-md-block'></div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-12 col-12'>
                <div className='links'>
                  <h5
                    className='title animated'
                    data-animation='fadeInUpShorter'
                    data-animation-delay='0.5s'
                  >
                    Useful Links
                  </h5>
                  <ul className='useful-links float-left mr-5'>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.6s'
                    >
                      <a href={`${process.env.REACT_APP_URL}/#head-area`}>
                        Home
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.7s'
                    >
                      <a onClick={downloadWhitePaper} 
                      style={{cursor:"pointer"}}
                      >
                        Whitepaper
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='0.8s'
                    >
                      <a href={`${process.env.REACT_APP_URL}/#roadmap`}>
                        RoadMap{' '}
                      </a>
                    </li>
                  </ul>
                  <ul className='useful-links'>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.0s'
                    >
                      <a href={`${process.env.REACT_APP_URL}/#advisor`}>
                        Franchise
                      </a>
                    </li>
                    <li
                      className='animated'
                      data-animation='fadeInUpShorter'
                      data-animation-delay='1.1s'
                    >
                      <a href={process.env.REACT_APP_ADMIN_URL} target='_blank'>
                        Sign in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='copy-right mx-auto'>
              <span className='copyright'>
                Copyright © 2021,{' '}
                <a href='#' title='pixinvent' className='white'>
                  {' '}
                  DEFItt
                </a>.
              </span>
              <span className="disclaimer-text">A unit of Sky Net Group of Companies</span>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
