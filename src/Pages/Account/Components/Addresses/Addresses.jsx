// import React, { useState } from 'react'
import { useState } from 'react';
import './Addresses.css'
import Country from "../Country"
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
// import dropdowns from "../../Components/Addresses/Assets/Iconcolor.png"


const Addresses = () => {
  // const [state,setState] = useState(false);
  const handleadd =()=>{
    setState(true)
  }

  const [state, setState] = useState(false); // Toggle between add button and form

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    postcode: '',
    town: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleAdd = () => {
    setState(!state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.companyName) errors.companyName = 'Company name is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.streetAddress) errors.streetAddress = 'Street address is required';
    if (!formData.postcode) errors.postcode = 'Postcode is required';
    if (!formData.town) errors.town = 'Town/City is required';
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  return (
    // <div className='addresses-page'>
    //   <p>The following addresses will be used on the checkout page by default.</p>
    //   <div className='section'>
    //     <div className='billing-address'>
    //      <h4>Billing address</h4>
    //      <div className='content-2'>
    //        <div className={state ? "form":"add"}>
    //         <button className='click' onClick={handleadd}>ADD</button>
    //         <p>You have not set up this type of address yet.</p>
    //        </div>
          
    //        <div className= {state? "add" :"form"}>
    //         <div className='card'>
    //          <div className='Details'>
    //             <input type="firstname" placeholder='First name*' />
    //             <input type="lastname" placeholder='Last name*'/>
    //          </div>
    //          <div className='companyname'>
    //             <input type="companyname" placeholder='Company name*'/>
    //          </div>
    //          <div className='country'>
    //             <input type="country" placeholder='Country*'/>
    //             <img src={dropdowns} alt="" />
    //          </div>
    //          <div className='streetaddress'>
    //             <input type="streetaddress" placeholder='Street Address*'/>
    //          </div>
    //          <div className='postcode'>
    //             <input type="postcode/zip" placeholder='Postcode/Zip*'/>
    //          </div>
    //          <div className='town'>
    //             <input type="town/city" placeholder='Town/City*'/>
    //          </div>
    //          <div className='phone'>
    //             <input type="tel" placeholder='Phone*'/>
    //          </div>
    //          <div className='email'>
    //             <input type="email" placeholder='Email*'/>
    //          </div>
    //          <button className='order-bttn'>PLACE ORDER</button>
    //         </div>
            
    //        </div>


    //      </div>
    //     </div>
        
    //     <div className='shipping-address'>
    //       <div className='content-4'>
    //        <h4>Shipping address</h4>
    //       </div>
    //       <div className='content-5'>
    //        <h3>ADD</h3>
    //       </div>
    //       <div className='content-6'>
    //        <p>You have not set up this type of address yet.</p>
    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className='addresses-page'>
      <p>The following addresses will be used on the checkout page by default.</p>
      <div className='section'>
        <div className='billing-address'>
          <h4>Billing address</h4>
          <div className='content-2'>
           <div className={state ? "form" : "add"}>
            <button className='click' onClick={handleAdd}>ADD</button>
            <p>You have not set up this type of address yet.</p>
           </div>

           <div className={state ? "add" : "form"}>
            <form className='card' onSubmit={handleSubmit}>
              <div className='Details'>
                <input
                  type="text"
                  name="firstName"
                  placeholder='First name*'
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className='error'>{errors.firstName}</p>}
                <input
                  type="text"
                  name="lastName"
                  placeholder='Last name*'
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className='error'>{errors.lastName}</p>}
              </div>
              <div className='companyname'>
                <input
                  type="text"
                  name="companyName"
                  placeholder='Company name*'
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && <p className='error'>{errors.companyName}</p>}
              </div>
              {/* <div className='country'>
                <input
                  type="text"
                  name="country"
                  placeholder='Country*'
                  value={formData.country}
                  onChange={handleChange}
                />
                {errors.country && <p className='error'>{errors.country}</p>}
              </div> */}
              <Country/>
              {/* <img src={dropdowns} alt="" /> */}


              <div className='streetaddress'>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder='Street Address*'
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
                {errors.streetAddress && <p className='error'>{errors.streetAddress}</p>}
              </div>
              <div className='postcode'>
                <input
                  type="text"
                  name="postcode"
                  placeholder='Postcode/Zip*'
                  value={formData.postcode}
                  onChange={handleChange}
                />
                {errors.postcode && <p className='error'>{errors.postcode}</p>}
              </div>
              <div className='town'>
                <input
                  type="text"
                  name="town"
                  placeholder='Town/City*'
                  value={formData.town}
                  onChange={handleChange}
                />
                {errors.town && <p className='error'>{errors.town}</p>}
              </div>
              <div className='phone'>
                <input
                  type="tel"
                  name="phone"
                  placeholder='Phone*'
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className='error'>{errors.phone}</p>}
              </div>
              <div className='email'>
                <input
                  type="email"
                  name="email"
                  placeholder='Email*'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
              </div>
              <button className='order-bttn' type="submit">SAVE ADDRESS</button>
            </form>
           </div>
        </div>
      </div>

      <div className='shipping-address'>
        <div className='content-4'>
          <h4>Shipping address</h4>
        </div>
        <div className='content-5'>
          <h3>ADD</h3>
        </div>
        <div className='content-6'>
          <p>You have not set up this type of address yet.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Addresses