import React, { Fragment, useState } from 'react';
import DefittMap from './DefittMap';
import PropTypes from 'prop-types';
import { CONTACT_US_VALIDATE } from '../../utils/validate';

import { store } from 'react-notifications-component';

import axios from 'axios';
const USER_CONTACTUS = {
  name: "",
  email: "",
  message: "",
  errors: {
    name: "",
    email: "",
    message: ""
  }
}
const Contact = (props) => {
  const [state, setstate] = useState(USER_CONTACTUS);

  const onSubmit = (e) => {
    e.preventDefault();

    let { success, name, email, message } = CONTACT_US_VALIDATE({ name: state.name, email: state.email, message: state.message })
    if (!success) {
      console.log(state,"======1")
      setstate({ ...state, errors: { ...state.errors, name, email, message } })
    } else {
      setstate({ ...state, errors: { ...state.errors, ...USER_CONTACTUS.errors } })
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API}/api/v1/user/contact-us`,
        headers: {},
        data: {
          name:state.name, email:state.email, message:state.message
        }
      }).then(response => response.data).then(res=>{
        if(res.status===200){
          console.log(res, "======")
          store.addNotification({
            title: "Success",
            message: res.message,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      })

    }
  }
  const onChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <Fragment>
      <section id='contact' className='contact section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12'>
              <div className='map-holder'>
                <DefittMap></DefittMap>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12'>
              <div className='contact-form'>
                <div className='heading text-center'>
                  <div
                    className='animated'
                    data-animation='fadeInUpShorter'
                    data-animation-delay='0.3s'
                  >
                    <h6 className='sub-title'>JOIN US</h6>
                    <h2 className='title'>Contact US</h2>
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
                    <ul className='list-unstyled contact-info '>
                      <li
                        className='animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='0.5s'
                      >
                        <i className='ti-headphone'></i>
                        <span className='ml-1'>+44 08000418812</span>
                      </li>
                      <li
                        className='animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='0.7s'
                      >
                        <i className='ti-comment-alt'></i>
                        <span className='ml-1'>Join us</span>
                      </li>
                    </ul>
                    <ul className='list-unstyled contact-info'>
                      <li
                        className='animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='0.6s'
                      >
                        <i className='ti-email'></i>
                        <span className='ml-1'>info@defitt.org</span>
                      </li>
                    </ul>
                    <form
                      onSubmit={onSubmit}
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
                        value={state.name}
                        onChange={onChange}
                      />
                      <span style={{ color: "red" }}>{state.errors.name}</span>
                      <input
                        type='text'
                        className='form-control animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='0.9s'
                        name='email'
                        placeholder='Your Mail'
                        value={state.email}
                        onChange={onChange}
                      />
                      <span style={{ color: "red" }}>{state.errors.email}</span>

                      <input
                        type='text'
                        className='form-control animated'
                        data-animation='fadeInUpShorter'
                        data-animation-delay='1.0s'
                        name='message'
                        placeholder='Your Message'
                        value={state.message}
                        onChange={onChange}
                      />
                      <span style={{ color: "red" }}>{state.errors.message}</span>

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
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Contact.propTypes = {};

export default Contact;
