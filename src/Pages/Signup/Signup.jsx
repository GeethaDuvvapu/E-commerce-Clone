import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import './Signup.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

// const Signup = () => {
//   return (
//     <>
//      <Navbar/>
//      <div className='signup-page'>
//        <div className='signup-content'>
//         <h2>Sign Up</h2>
//         <p>Create an account to unlock exclusive features.</p>
//        </div>
//        <form>

//          <label>Full Name</label>
//          <input type="text" placeholder='Enter Your Name' />

//          <label>Email</label>
//          <input type="email" placeholder='Enter Your Email' />
   
//          <label>Password</label>
//          <input type="password" placeholder='Enter Your Password' />
   
//          <div className="checkbox">
//           <div>
//            <input type="checkbox"/>
//           </div>
//           <label htmlFor="">I agree with Terms of Use and Privacy Policy</label>
//          </div>
//          <button>Sign Up</button>
//          <div className='accnt-info'>
//           <h6>Already have an account?  Login</h6>
//          </div>
//        </form>
//      </div>
//      <Footer/>
//     </>
//   )
// }

const Signup = () => {
    const [formValues, setFormValues] = useState({
      fullName: '',
      email: '',
      password: '',
      agreeToTerms: false,
    });
  
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormValues({
        ...formValues,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const validate = () => {
      const errors = {};
  
      if (!formValues.fullName.trim()) {
        errors.fullName = 'Full Name is required';
      }
  
      if (!formValues.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        errors.email = 'Email address is invalid';
      }
  
      if (!formValues.password) {
        errors.password = 'Password is required';
      } else if (formValues.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
  
      if (!formValues.agreeToTerms) {
        errors.agreeToTerms = 'You must agree to the terms';
      }
  
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate();
      setFormErrors(errors);
      setIsSubmitted(true);
  
      if (Object.keys(errors).length === 0) {
        // Submit form
        console.log('Form Submitted', formValues);
        // Clear form
        setFormValues({
          fullName: '',
          email: '',
          password: '',
          agreeToTerms: false,
        });
        setIsSubmitted(false);
      }
    };
  
    return (
      <>
        <Navbar />
        <div className="signup-page">
          <div className="signup-content">
            <h2>Sign Up</h2>
            <p>Create an account to unlock exclusive features.</p>
          </div>
          <form onSubmit={handleSubmit}>
  
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Name"
              value={formValues.fullName}
              onChange={handleChange}
            />
            {formErrors.fullName && <p className="error">{formErrors.fullName}</p>}
  
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
  
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <p className="error">{formErrors.password}</p>}
  
            <div className="checkbox">
              <div>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formValues.agreeToTerms}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="">I agree with Terms of Use and Privacy Policy</label>
            </div>
            {formErrors.agreeToTerms && <p className="error">{formErrors.agreeToTerms}</p>}
  
            <button type="submit">Sign Up</button>
            <div className="accnt-info">
              <h6>Already have an account? <Link to="/myaccount">Login</Link></h6>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }



export default Signup

