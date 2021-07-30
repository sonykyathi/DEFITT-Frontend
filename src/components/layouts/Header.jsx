import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {downloadWhitePaper} from '../../utils/utils'

const Header = (props) => {
  
  return (
    <Fragment>
      <header className='page-header'>
        <nav className='main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1'>
          <div className='container'>
            <a
              className='navbar-brand nav-logo animated'
              data-animation='fadeInDown'
              data-animation-delay='1s'
              href={`${process.env.REACT_APP_URL}/#head-area`}
            >
              <img
                src='theme-assets/images/d-logo.png'
                alt='DEFitt Logo'
                className='img-fluid'
                // style={{ width: '100px' }}
              />
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
              {/* <span className='navbar-toggler-icon'></span> */}
              <i className='fa fa-bars' aria-hidden='true'></i>
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
                      href={`${process.env.REACT_APP_URL}/#head-area`}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.1s'
                  >
                    <a className='nav-link' href='/aboutus' target='_blank'>
                      About Us
                    </a>
                  </li>
                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.3s'
                  >
                    <a
                      className='nav-link'
                      onClick={downloadWhitePaper}
                      style={{cursor:"pointer"}}

                    >
                      Whitepaper
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
                      <a
                        href={`${process.env.REACT_APP_URL}/#defiplay`}
                        className='dropdown-item'
                      >
                        Dfitt Play
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#defistartup`}
                        className='dropdown-item'
                      >
                        Defi Startup
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#defitradx`}
                        className='dropdown-item'
                      >
                        Defi TradX
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#defikampus`}
                        className='dropdown-item'
                      >
                        Defi Kampus
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#definirvaana`}
                        className='dropdown-item'
                      >
                        Defi Nirvaana
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#defilandscape`}
                        className='dropdown-item'
                      >
                        Defi Landscape
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#defibuzaar`}
                        className='dropdown-item'
                      >
                        Defi Buzaar
                      </a>
                      <a
                        href={`${process.env.REACT_APP_URL}/#defiswipecard`}
                        className='dropdown-item'
                      >
                        Defi SwipeCard
                      </a>
                    </div>
                  </li>
                  <li
                    className='dropdown show mr-2 animated'
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
                      <a
                        className='dropdown-item'
                        href={`${process.env.REACT_APP_URL}/#head-area`}
                      >
                        DFT
                      </a>
                      <a
                        href='https://ftttoken.com'
                        className='dropdown-item'
                        target='_blank'
                      >
                        FTT
                      </a>
                    </div>
                  </li>

                  <li
                    className='nav-item animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.4s'
                  >
                    <a
                      className='nav-link'
                      href={`${process.env.REACT_APP_URL}/#advisor`}
                    >
                      Franchise
                    </a>
                  </li>
                </ul>
                <span id='slide-line'></span>
                <form className='form-inline mt-2 mt-md-0'>
                  <a
                    className='btn btn-sm btn-gradient-purple btn-glow my-2 my-sm-0 animated'
                    data-animation='fadeInDown'
                    data-animation-delay='1.8s'
                    href={process.env.REACT_APP_ADMIN_URL}
                    target='_blank'
                  >
                    Sign in
                  </a>
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
