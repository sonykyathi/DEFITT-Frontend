import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className='vertical-social'>
        <ul>
          <li><a target='_blank' aria-hidden='true' href='https://twitter.com/Defitt_ftt'><i className='fa fa-twitter'></i></a></li>
          <li><a target='_blank' aria-hidden='true' href='https://www.facebook.com/de.fitt.1/'><i className='ti-facebook'></i></a></li>
          <li><a target='_blank' aria-hidden='true' href='https://www.instagram.com/defi.tt_/'><i className='ti-instagram'></i></a></li>
          <li><a target='_blank' aria-hidden='true' href='https://www.linkedin.com/in/defitt-financial-services/'><i className='ti-linkedin'></i></a></li>
          <li><a target='_blank' aria-hidden='true' href='https://www.youtube.com/channel/UCyO9CUPft6N_xpnAl4pZONg'><i className='ti-youtube'></i></a></li>
          <li><a target='_blank' aria-hidden='true' href='https://t.me/DefittChat'><i className='fa fa-telegram'></i></a></li>



          {/* <li>
            <a href='#'>
              <i className='fa fa-telegram' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-medium' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              {' '}
              <i className='fa fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-github' aria-hidden='true'></i>
            </a>
          </li> */}
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {};

export default Navbar;
