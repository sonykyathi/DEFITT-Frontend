import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import whitepaper from '../../assets/whitepaper.pdf';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <Fragment>
      <header className='page-header'>
        <nav className='main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1'>
          <div className='container'>
            <a
              className='navbar-brand animated'
              data-animation='fadeInDown'
              data-animation-delay='1s'
              href={`${process.env.REACT_APP_URL}/#head-area`}
            >
              <img
                src='theme-assets/images/logo.png'
                alt='Crypto Logo'
                style={{ width: '100px' }}
              />
              {/* <span className='brand-text'>
                <span className='font-weight-bold'>Crypto</span> ICO
              </span> */}
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <div id='navigation' className='navbar-nav ml-auto'>
                <ul className='navbar-nav mt-1'>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.1s'
                  >
                    <a
                      className='nav-link'
                      href={`${process.env.REACT_APP_URL}/#about`}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.2s'
                  >
                    <a
                      className='nav-link'
                      href="javascript:void(0);"
                    >
                      Projects
                    </a>
                  </li>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.3s'
                  >
                    <a className='nav-link' href={whitepaper} target='_blank'>
                      Whitepaper
                    </a>
                  </li>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.4s'
                  >
                    <a
                      className='nav-link'
                      href="javascript:void(0);"
                    >
                      Investments
                    </a>
                  </li>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.5s'
                  >
                    <a
                      className='nav-link'
                      href={`${process.env.REACT_APP_URL}/#roadmap`}
                    >
                      Roadmap
                    </a>
                  </li>
                  <li
                    className='dropdown show mr-2 px-2 animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.6s'
                  >
                    <a
                      className='dropdown-toggle white'
                      href='#'
                      role='button'
                      id='more'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Our Verticles
                    </a>
                    <div className='dropdown-menu' aria-labelledby='more'>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi Play
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi Startup
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi TradX
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi Kampus
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi Nirvaana
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi Landscape
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi Buzaar
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Defi SwipeCard
                      </a>
                      <a href='javascript:void(0);' className='dropdown-item'>
                        Crypto Neo Bank
                      </a>
                    </div>
                  </li>
                  <li
                    className='dropdown show mr-4 animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.7s'
                  >
                    <a
                      className='dropdown-toggle'
                      href='#'
                      role='button'
                      id='language'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <span></span> Our Coins
                    </a>
                    <div className='dropdown-menu' aria-labelledby='language'>
                      <a className='dropdown-item'href="javascript:void(0);">
                        <span></span> DFT
                      </a>
                      <a className='dropdown-item' href="javascript:void(0);">
                        <span></span> FTT
                      </a>
                    </div>
                  </li>
                </ul>
                <span id='slide-line'></span>
                <form className='form-inline mt-2 mt-md-0'>
                  <Link
                    className='btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.8s'
                    to='/login'
                    data-toggle='modal'
                    data-target='#loginForm'
                    data-backdrop='false'
                  >
                    Sign in
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

Header.propTypes = {};

export default Header;
