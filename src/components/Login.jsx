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
        setTimeout(() => {
          setIsLogged('');
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setIsLogged('failed');
        setTimeout(() => {
          setIsLogged('');
        }, 3000);
      });
  };

  return (
    <div className='login-form-container container'>
      <form id='login' className='login-form-content animate' onSubmit={onSubmit}>
        <div className='form-heading'>
          <h2> Login Form</h2>
        </div>

        {isLogged === 'passed' && (
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

        <div className="form-group">
          <label for='email'>Email id</label>
          <input type='text'
          className="form-control"
            placeholder='Enter User email id'
            name='email'
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label for='password'>Password</label>
          <input
            type='password'
            className="form-control"
            placeholder='Enter Password'
            onChange={onChange}
            value={password}
            name='password'
            required
          />
        </div>
        <div className="form-action">
          <label>
            <input type='checkbox' name='remember' />{' '}Remember me
          </label>
          <button type='submit' className="btn btn-lg btn-gradient-purple btn-glow animated">Login</button>
        </div>
        <div className="login-option text-center">
          <label>
            Don't have an account?<Link to='/register'>Register</Link>
          </label>
        </div>
      
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
