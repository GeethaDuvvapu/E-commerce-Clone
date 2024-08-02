import React from 'react'
import './Passwordstyle.css'
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Password = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission (e.g., API call)
      alert('Password reset email sent!');
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
    return errors;
  };
  return (
    <>
     <Navbar/>
     {/* <div className='reset-section'>
        <h1>Have you Forgotten Your Password ?</h1>
        <p>
          If you've forgotten your password, enter your e-mail <br /> address and we'll send you an e-mail 
        </p>
        <div className='mail-id'>  
          <p>Email</p>
        </div>
       
        <button>Reset Password</button>
     </div> */}
      <div className='reset-section'>
        <div className='forgot'>
         <h1>Have you Forgotten Your Password?</h1>
         <p>
          If you've forgotten your password, enter your e-mail<br />
          address and we'll send you an e-mail.
         </p>
        </div>
       
       <form onSubmit={handleSubmit}>
        <div className='mail-id'>
          {/* <p>Email</p> */}
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <button type="submit">Reset Password</button>
      </form>
      </div>
     <Footer/>
    </>
  )
}

export default Password