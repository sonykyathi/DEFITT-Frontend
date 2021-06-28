import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLogged, setIsLogged] = useState('');
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/api/v1/auth/login`, formData)
      .then((response) => {
        console.log(response.data);
        setIsLogged('passed');
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setIsLogged('failed');
      });
  };

  return (
    <div className='login-form-container'>
      <div id='' className=''>
        <form id='login' className='modal-content animate' onSubmit={onSubmit}>
          <div className='container'>
            <div className='form-heading'>
              <h2> Login Form</h2>
            </div>
            <label for='email'>
              <b>Email id</b>
            </label>
            <input
              type='text'
              placeholder='Enter User email id'
              name='email'
              onChange={onChange}
              value={email}
              required
            />

            <label for='password'>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={onChange}
              value={password}
              name='password'
              required
            />

            <button type='submit'>Login</button>
            <label>
              <input type='checkbox' checked='checked' name='remember' />{' '}
              Remember me
            </label>
            {isLogged == 'passed' && (
              <div>
                <p style={{ color: 'green', textAlign: 'center' }}>
                  Login Successfull
                </p>
              </div>
            )}
            {isLogged == 'failed' && (
              <div>
                <p style={{ color: 'red', textAlign: 'center' }}>
                  Invalid Credentials
                </p>
              </div>
            )}
          </div>

          <div className='container' style={{ backgroundColor: '#f1f1f1' }}>
            <span className='psw' style={{ textAlign: 'center' }}>
              Don't have an account?<Link to='/register'>Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
