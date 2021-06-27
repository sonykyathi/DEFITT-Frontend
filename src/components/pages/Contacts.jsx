import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Contacts = (props) => {
  return (
    <Fragment>
      <section id='contact' className='contact section-padding'>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              <h6 className='sub-title'>JOIN US</h6>
              <h2 className='title'>Contact</h2>
            </div>
            <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              Have questions? We’re happy to help.
            </p>
          </div>
          <div className='row'>
            <div className='col-xl-8 col-md-12 mx-auto'>
              <ul className='list-unstyled contact-info pb-5 mb-5'>
                <li
                  className='animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.5s'
                >
                  <i className='ti-headphone'></i>
                  <span className='ml-1'>+44 0123 4567</span>
                </li>
                <li
                  className='animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.6s'
                >
                  <i className='ti-email'></i>
                  <span className='ml-1'>info@yourcompany.com</span>
                </li>
                <li
                  className='animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.7s'
                >
                  <i className='ti-comment-alt'></i>
                  <span className='ml-1'>Join us on Telegram</span>
                </li>
              </ul>
              <form
                action='#'
                method='post'
                acceptCharset='utf-8'
                className='text-center'
              >
                <input
                  type='text'
                  className='form-control animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.8s'
                  name='name'
                  placeholder='Your Name'
                />
                <input
                  type='text'
                  className='form-control animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='0.9s'
                  name='mail'
                  placeholder='Your Mail'
                />
                <input
                  type='text'
                  className='form-control animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='1.0s'
                  name='message'
                  placeholder='Your Massage'
                />
                <button
                  type='submit'
                  className='btn btn-lg btn-gradient-purple btn-glow animated'
                  data-animation='fadeInUpShorter'
                  data-animation-delay='1.1s'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
