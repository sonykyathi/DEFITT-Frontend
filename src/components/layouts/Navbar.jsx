import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className='vertical-social'>
        <ul>
          <li>
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
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {};

export default Navbar;
