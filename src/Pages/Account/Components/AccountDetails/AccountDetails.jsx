import React from 'react'
import { useState } from 'react';

import './AccountDetails.css'

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    displayname: '',
    emailaddress: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.displayname) newErrors.displayname = 'Display name is required';
    if (!formData.emailaddress) newErrors.emailaddress = 'Email address is required';
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      // console.log('Form submitted successfully', formData);
      alert('Form submitted successfully!');

    }
  };

  return (
    // <div className='accountdetails-page'>
    //   <h3>Account details</h3>
    //   <div className='form-section'>
    //     <div className='mail'>
    //       <input type="firstname" placeholder='First name*' />
    //       <input type="lastname" placeholder='Last name*'/>
    //       <div className='mail-1'>
    //         <input type="Displayname" placeholder='Display name*'/>
    //         <p>This will be how your name will be displayed in the account section and in reviews.</p>
    //       </div>
    //       <input type="emailaddress" placeholder='Email address*'/>
    //       <h4>Password change</h4>
    //       <input type="password" placeholder='Current password (leave blank to leave unchanged)'/>
    //       <input type="password" placeholder='New password (leave blank to leave unchanged)'/>
    //       <input type="password" placeholder='Confirm new password' />
    //       <button>SAVE CHANGES</button>

    //     </div>
    //   </div>
      
    // </div>

    <div className='accountdetails-page'>
      <h3>Account details</h3>
      <div className='form-section'>
       <form className='mail' onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder='First name*'
          value={formData.firstname}
          onChange={handleChange}
        />
        {errors.firstname && <p className="error">{errors.firstname}</p>}
        <input
          type="text"
          name="lastname"
          placeholder='Last name*'
          value={formData.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <p className="error">{errors.lastname}</p>}
        <div className='mail-1'>
          <input
            type="text"
            name="displayname"
            placeholder='Display name*'
            value={formData.displayname}
            onChange={handleChange}
          />
          {errors.displayname && <p className="error">{errors.displayname}</p>}
          <p>This will be how your name will be displayed in the account section and in reviews.</p>
        </div>
        <input
          type="email"
          name="emailaddress"
          placeholder='Email address*'
          value={formData.emailaddress}
          onChange={handleChange}
        />
        {errors.emailaddress && <p className="error">{errors.emailaddress}</p>}
        <h4>Password change</h4>
        <input
          type="password"
          name="currentPassword"
          placeholder='Current password (leave blank to leave unchanged)'
          value={formData.currentPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name="newPassword"
          placeholder='New password (leave blank to leave unchanged)'
          value={formData.newPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder='Confirm new password'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <button type="submitt">SAVE CHANGES</button>
       </form>
      </div>
    </div>
  )
}

export default AccountDetails