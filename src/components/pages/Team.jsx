import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Team = (props) => {
  return (
    <Fragment>
      <section id='team' className='team section-padding '>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              <h6 className='sub-title'>Creative</h6>
              <h2 className='title'>Team</h2>
            </div>
            <p
              className='content-desc animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.4s'
            >
              A cryptocurrency (or crypto currency) is a digital asset designed
              to work as a medium
              <br className='d-none d-xl-block' />
              of exchange that uses cryptography to secure its transactions.
            </p>
          </div>
          <div className='row team-intro justify-content-center text-center'>
            <div
              className='col-12 col-md-4 col-lg-2 team-width animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.5s'
            >
              <span>18</span>
              <p>
                Creative and
                <br />
                Dedicated People
              </p>
            </div>
            <div
              className='col-12 col-md-4 col-lg-2 team-width animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.6s'
            >
              <span>125</span>
              <p>Years of combined experience</p>
            </div>
            <div
              className='col-12 col-md-4 col-lg-2 team-width animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.7s'
            >
              <span>10</span>
              <p>Years of blockchain experience</p>
            </div>
          </div>
          <div className='team-profile mt-5'>
            <div className='row mb-5'>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='0.8s'
              >
                <div className='d-flex team-member'>
                  <div
                    className='team-img float-left mr-3'
                    data-toggle='modal'
                    data-target='#teamUser9'
                  >
                    <img
                      src='theme-assets/images/team-1.jpg'
                      alt='team-profile-1'
                      className='rounded-circle'
                      width='128'
                    />
                  </div>
                  <div className='profile align-self-center'>
                    <div className='name'>Logan S. Perez</div>
                    <div className='role'>CEO &amp; CFO</div>
                    <div className='social-profile mt-3'>
                      <a
                        href='#'
                        title='Linkedin'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                      <a
                        href='#'
                        title='Twitter'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-twitter-alt'></i>
                      </a>
                      <a
                        href='#'
                        title='Github'
                        className='font-medium grey-accent2'
                      >
                        <i className='ti-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='0.9s'
              >
                <div className='d-flex team-member'>
                  <div
                    className='team-img float-left mr-3'
                    data-toggle='modal'
                    data-target='#teamUser6'
                  >
                    <img
                      src='theme-assets/images/team-1.jpg'
                      alt='team-profile-1'
                      className='rounded-circle'
                      width='128'
                    />
                  </div>
                  <div className='profile align-self-center'>
                    <div className='name'>Susan J. Newsom</div>
                    <div className='role'>Graphic Designer</div>
                    <div className='social-profile mt-3'>
                      <a
                        href='#'
                        title='Linkedin'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                      <a
                        href='#'
                        title='Twitter'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-twitter-alt'></i>
                      </a>
                      <a
                        href='#'
                        title='Github'
                        className='font-medium grey-accent2'
                      >
                        <i className='ti-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='1.0s'
              >
                <div className='d-flex team-member'>
                  <div
                    className='team-img float-left mr-3'
                    data-toggle='modal'
                    data-target='#teamUser2'
                  >
                    <img
                      src='theme-assets/images/team-2.jpg'
                      alt='team-profile-1'
                      className='rounded-circle'
                      width='128'
                    />
                  </div>
                  <div className='profile align-self-center'>
                    <div className='name'>Mary J. Wardle</div>
                    <div className='role'>CPO</div>
                    <div className='social-profile mt-3'>
                      <a
                        href='#'
                        title='Linkedin'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                      <a
                        href='#'
                        title='Twitter'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-twitter-alt'></i>
                      </a>
                      <a
                        href='#'
                        title='Github'
                        className='font-medium grey-accent2'
                      >
                        <i className='ti-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='1.1s'
                data-toggle='modal'
                data-target='#teamUser10'
              >
                <div className='d-flex team-member'>
                  <div className='team-img float-left mr-3'>
                    <img
                      src='theme-assets/images/team-2.jpg'
                      alt='team-profile-1'
                      className='rounded-circle'
                      width='128'
                    />
                  </div>
                  <div className='profile align-self-center'>
                    <div className='name'>Nicholas M. Sharpe</div>
                    <div className='role'>UI / UX Designer</div>
                    <div className='social-profile mt-3'>
                      <a
                        href='#'
                        title='Linkedin'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                      <a
                        href='#'
                        title='Twitter'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-twitter-alt'></i>
                      </a>
                      <a
                        href='#'
                        title='Github'
                        className='font-medium grey-accent2'
                      >
                        <i className='ti-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='1.2s'
                data-toggle='modal'
                data-target='#teamUser4'
              >
                <div className='d-flex team-member'>
                  <div className='team-img float-left mr-3'>
                    <img
                      src='theme-assets/images/team-3.jpeg'
                      alt='team-profile-1'
                      className='rounded-circle'
                      width='128'
                    />
                  </div>
                  <div className='profile align-self-center'>
                    <div className='name'>Cecelia T. Carter</div>
                    <div className='role'>CTO</div>
                    <div className='social-profile mt-3'>
                      <a
                        href='#'
                        title='Linkedin'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                      <a
                        href='#'
                        title='Twitter'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-twitter-alt'></i>
                      </a>
                      <a
                        href='#'
                        title='Github'
                        className='font-medium grey-accent2'
                      >
                        <i className='ti-github'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-sm-12 col-md-6 col-lg-4 mb-5 animated'
                data-animation='jello'
                data-animation-delay='1.3s'
                data-toggle='modal'
                data-target='#teamUser13'
              >
                <div className='d-flex team-member'>
                  <div className='team-img float-left mr-3'>
                    <img
                      src='theme-assets/images/team-4.jpeg'
                      alt='team-profile-1'
                      className='rounded-circle'
                      width='128'
                    />
                  </div>
                  <div className='profile align-self-center'>
                    <div className='name'>Terry T. Robinette</div>
                    <div className='role'>Developer</div>
                    <div className='social-profile mt-3'>
                      <a
                        href='#'
                        title='Linkedin'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                      <a
                        href='#'
                        title='Twitter'
                        className='font-medium grey-accent2 mr-2'
                      >
                        <i className='ti-twitter-alt'></i>
                      </a>
                      <a
                        href='#'
                        title='Github'
                        className='font-medium grey-accent2'
                      >
                        <i className='ti-github'></i>
                      </a>
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

Team.propTypes = {};

export default Team;
