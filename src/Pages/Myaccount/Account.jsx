import React from 'react'
import './Accountstyle.css'
// import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';


const Account = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleClick = (message) => {
    // alert(message);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission (e.g., API call)
      alert('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  return (
    <>
      <Navbar/>
      {/* <div className='account-details'>
        <h1>My account</h1>
        <div className='registerpath'>
          <button id='unique'>Sign in</button>
          <h3>Register</h3>
        </div>
        <div className='form'>
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Password'/>
        </div>
        <div className='checkbox'>
          <Checkbox {...label} />
          <p>Remember me</p>
        </div>
        <div className='handle'>
          <button><Link to="/">SIGN</Link></button>
        </div>
        <Link to="/password"><p>Have you forgotten your password?</p></Link>
      </div> */}
      <div className='account-details'>
        <Link to="/account"><h1>My account</h1></Link>
        <div className='registerpath'>
          <button id='unique'>Sign in</button>
          <Link to="/signup"><h3>Register</h3></Link>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <div>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div className='checkbox'>
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <p>Remember me</p>
          </div>
          <div className='handle'>
          {/* <button type="/">Sign in</button> */}
           <button><Link to="/">SIGN IN</Link></button>
          </div>
        </form>
        <Link to="/password"><p>Have you forgotten your password?</p></Link>
      </div>
    <Footer/>
    </>
  )
}

export default Account