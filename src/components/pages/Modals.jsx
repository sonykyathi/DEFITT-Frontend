import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Modals = (props) => {
  return (
    <Fragment>
      <div
        className='modal ico-modal fade'
        id='ico-modal'
        tabIndex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body p-0'>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' id='video'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser9'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser9Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/team-2.jpg'
                    alt='Ajit Singh Chaddha'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser9Title'>Ajit Singh Chaddha</h5>
                  <small className='text-muted mb-0 '>
                    Founder & Co-Chairman
                  </small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Currently one of the most significant entrepreneurs,
                      businessmen, social activists and inspirational leaders of
                      India associated in various prestigious projects and
                      technologies.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>
                      Financial Experience
                    </small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>
                      Marketing Experience
                    </small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser6'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser6Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/team-1.jpg'
                    alt='H.E Mohamed Khalid Mohamed Al Ali'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser6Title'>H.E Mohamed Khalid Mohamed Al Ali</h5>
                  <small className='text-muted mb-0 '>Co-Chairman</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Highly respected, innovative, philanthropist and
                      award-winning businessman. He was awarded several times
                      the prestigious awards and recognition in his life such as
                      “Family Office Enlightened Governance Award”.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>
                      {' '}
                      Financial Experience
                    </small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>
                      {' '}
                      Marketing Experience
                    </small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser2'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser2Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-2-lg.jpg'
                    alt='Mary J. Wardle'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser2Title'>Mary J. Wardle</h5>
                  <small className='text-muted mb-0 '>CPO</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser10'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser10Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-10-lg.jpg'
                    alt='Nicholas M. Sharpe'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser10Title'>Nicholas M. Sharpe</h5>
                  <small className='text-muted mb-0 '>UI / UX Designer</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser4'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser4Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-4-lg.jpg'
                    alt='Cecelia T. Carter'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser4Title'>Cecelia T. Carter</h5>
                  <small className='text-muted mb-0 '>CTO</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser13'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser13Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-13-lg.jpg'
                    alt='Terry T. Robinette'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser13Title'>Terry T. Robinette</h5>
                  <small className='text-muted mb-0 '>Developer</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser1'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser1Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-1-lg.jpg'
                    alt='Nadia Sidko'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser1Title'>Nadia Sidko</h5>
                  <small className='text-muted mb-0 '>
                    Blockchain Entrepreneur
                  </small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser8'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser8Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-8-lg.jpg'
                    alt='Pavel Volek'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser8Title'>Pavel Volek</h5>
                  <small className='text-muted mb-0 '>
                    Entrepreneur and Investor
                  </small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser3'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser3Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-3-lg.jpg'
                    alt='Alyona Blakytna'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser3Title'>Alyona Blakytna</h5>
                  <small className='text-muted mb-0 '>
                    Fin-Tech Entrepreneur
                  </small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser11'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser11Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-11-lg.jpg'
                    alt='Martin Solarik'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser11Title'>Martin Solarik</h5>
                  <small className='text-muted mb-0 '>Fin-Tech Investor</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser7'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser7Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-7-lg.jpg'
                    alt='Kate Fisenko'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser7Title'>Kate Fisenko</h5>
                  <small className='text-muted mb-0 '>Fin-Tech Investor</small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal team-modal fade'
        id='teamUser12'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='teamUser12Title'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-lg modal-dialog-centered'
          role='document'
        >
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='modal-body'>
              <div className='row p-4'>
                <div className='col-12 col-md-5'>
                  <img
                    className='img-fluid rounded'
                    src='theme-assets/images/user-12-lg.jpg'
                    alt='Michal Krajnansky'
                  />
                </div>
                <div className='col-12 col-md-7 mt-sm-3'>
                  <h5 id='teamUser12Title'>Michal Krajnansky</h5>
                  <small className='text-muted mb-0 '>
                    Blockchain Entrepreneur
                  </small>
                  <div className='social-profile'>
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
                  <div className='my-4'>
                    <p>
                      Experienced algorithmic crypto trader and a machine
                      learning evangelist.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      analysis tools, neural networks and genetic algorithms for
                      optimization. Always wanted to have a trading bot with
                      more features but never had the time to build a solution
                      beyond basic python technical analysis tracker.
                    </p>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Blockchain</small>{' '}
                    <small className='float-right'>85%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '85%' }}
                      aria-valuenow='85'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>Python</small>{' '}
                    <small className='float-right'>90%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='90'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                  <h6 className='mb-0'>
                    <small className='text-uppercase'>C++</small>{' '}
                    <small className='float-right'>75%</small>
                  </h6>
                  <div className='progress box-shadow-1 mb-4'>
                    <div
                      className='progress-bar progress-orange'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Modals.propTypes = {};

export default Modals;
