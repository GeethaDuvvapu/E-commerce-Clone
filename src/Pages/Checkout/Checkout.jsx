import React from 'react'
import { useState } from 'react';
import "../Checkout/Checkout.css"
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import dropdowns from "../Checkout/Assets/Iconcolor.png"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { GrPaypal } from "react-icons/gr";
import Country from '../Account/Components/Country';


const Checkout = () => {
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
    orderNotes: '',
  });

  const [errors, setErrors] = useState({});

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

  const validate = () => {
    let newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.streetaddress) newErrors.streetaddress = 'Street address is required';
    if (!formData.postcode) newErrors.postcode = 'Postcode is required';
    if (!formData.town) newErrors.town = 'Town is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';

    return newErrors;
  };


  return (
    <>
      <Navbar/>
      {/* <div className='checkout-section'>
        <div className='main-heading'>
          <h1>Checkout</h1>
        </div>  
        <div className='code'>
            <div className='customer1'>
             <p>Returning customer?</p>
             <h5>Click here to login</h5>
            </div>
            <div className='customer2'>
             <p>Have a coupon?</p>
             <h5>Click here to enter your code</h5>
            </div>
            <div className='coupon'>
              <p>If you have a coupon code, please apply it below.</p>
              <div className='coupon-code'>
                <p>Coupon Code</p>
                <button id='different'>APPLY COUPON</button>
              </div>
            </div>
        </div>
        <div className='billing-section'>
          <div className='left-side'>
            <h3>Billing Details</h3>
            <div className='form'>
              <div className='Details'>
                <input type="firstname" placeholder='First name*' />
                <input type="lastname" placeholder='Last name*'/>
              </div>
              <div className='companyname'>
                <input type="companyname" placeholder='Company name*'/>
              </div>
              <div className='country'>
                <input type="country" placeholder='Country*'/>
              </div>
              <div className='streetaddress'>
                <input type="streetaddress" placeholder='Street Address*'/>
              </div>
              <div className='postcode'>
                <input type="postcode/zip" placeholder='Postcode/Zip*'/>
              </div>
              <div className='town'>
                <input type="town/city" placeholder='Town/City*'/>
              </div>
              <div className='phone'>
                <input type="tel" placeholder='Phone*'/>
              </div>
              <div className='email'>
                <input type="email" placeholder='Email*'/>
              </div>
              <div className='create-account'>
                <MdOutlineCheckBoxOutlineBlank />
                <p>Create an acoount?</p>
              </div>
              <div className='ship-address'>
                <MdOutlineCheckBoxOutlineBlank />
                <p>Ship to a different address?</p>
              </div>
              <div className='notes'>
                <input type="notes" placeholder='Order notes'/>
              </div>
            </div>

          </div>
          <div className='right-side'>
            <h3>YOUR ORDER</h3>
            <div className='product-section'>
              <div className='product'>
                <h5>PRODUCT</h5>
                <h5>TOTAL</h5>
              </div>
              <hr />
              <div className='hair-pins'>
                <div className='liraearrings'>
                  <p>Lira Earrings </p>
                  <p>$64</p>
                </div>
                <div className='liraearrings'>
                  <p>Ollie Earrings</p>
                  <p>$10</p>
                </div>
                <div className='liraearrings'>
                  <p>Kaede Hair Pin</p>
                  <p>$10</p>
                </div>
                <hr />
                <div className='liraearrings'>
                  <h5>SUBTOTAL</h5>
                  <p>$85</p>
                </div>
                <hr />
                <div className='liraearrings'>
                  <h5>SHIPPING</h5>
                  <p>Free shipping</p>
                </div>
                <hr />
                <div className='liraearrings'>
                  <h5>TOTAL</h5>
                  <h5>$85</h5>
                </div>
              </div>
              <div className='bank'>
                <div className='transfer'>
                  <FaRegDotCircle />
                  <h5>Direct bank transfer</h5>
                </div>
                <div className='matter'>
                  <p>
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account
                  </p>
                </div>
              </div>
              <div className='payment-method'>
                <div className='check-payments'>
                  <GoDot />
                  <h5>Check payments</h5>
                </div>
                <div className='check-payments'>
                  <GoDot />
                  <h5>Cash on delivery</h5>
                </div>
                <div className='check-payments'>
                  <GoDot />
                  <h5>PayPal </h5>
                  <GrPaypal />
                </div>
              </div>
              <div className='order-bttn'>
                <button><Link to="/Orderconformation">PLACE ORDER</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='checkout-section'>
        <div className='main-heading'>
          <h1>Checkout</h1>
        </div>
        <div className='code'>
         <div className='customer1'>
           <p>Returning customer?</p>
           <h5>Click here to login</h5>
         </div>
         <div className='customer2'>
          <p>Have a coupon?</p>
          <h5>Click here to enter your code</h5>
         </div>
         <div className='coupon'>
          <p>If you have a coupon code, please apply it below.</p>
          <div className='coupon-code'>
            <p>Coupon Code</p>
            <button id='different'>APPLY COUPON</button>
          </div>
         </div>
        </div>
        <div className='billing-section'>
        <div className='left-side'>
          <h3>Billing Details</h3>
          <form className='form' onSubmit={handleSubmit}>
            <div className='Details'>
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
            </div>
            <div className='companyname'>
              <input
                type="text"
                name="companyname"
                placeholder='Company name'
                value={formData.companyname}
                onChange={handleChange}
              />
            </div>
            {/* <div className='country'>
              <input
                type="text"
                name="country"
                placeholder='Country*'
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && <p className="error">{errors.country}</p>}
            </div> */}
            <Country/>
            <div className='streetaddress'>
              <input
                type="text"
                name="streetaddress"
                placeholder='Street Address*'
                value={formData.streetaddress}
                onChange={handleChange}
              />
              {errors.streetaddress && <p className="error">{errors.streetaddress}</p>}
            </div>
            <div className='postcode'>
              <input
                type="text"
                name="postcode"
                placeholder='Postcode/Zip*'
                value={formData.postcode}
                onChange={handleChange}
              />
              {errors.postcode && <p className="error">{errors.postcode}</p>}
            </div>
            <div className='town'>
              <input
                type="text"
                name="town"
                placeholder='Town/City*'
                value={formData.town}
                onChange={handleChange}
              />
              {errors.town && <p className="error">{errors.town}</p>}
            </div>
            <div className='phone'>
              <input
                type="tel"
                name="phone"
                placeholder='Phone*'
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className='email'>
              <input
                type="email"
                name="email"
                placeholder='Email*'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className='create-account'>
              <MdOutlineCheckBoxOutlineBlank />
              <p>Create an account?</p>
            </div>
            <div className='ship-address'>
              <MdOutlineCheckBoxOutlineBlank />
              <p>Ship to a different address?</p>
            </div>
            <div className='notes'>
              <input
                type="text"
                name="notes"
                placeholder='Order notes'
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className='right-side'>
          <h3>YOUR ORDER</h3>
          <div className='product-section'>
            <div className='product'>
              <h5>PRODUCT</h5>
              <h5>TOTAL</h5>
            </div>
            <hr />
            <div className='hair-pins'>
              <div className='liraearrings'>
                <p>Lira Earrings</p>
                <p>$64</p>
              </div>
              <div className='liraearrings'>
                <p>Ollie Earrings</p>
                <p>$10</p>
              </div>
              <div className='liraearrings'>
                <p>Kaede Hair Pin</p>
                <p>$10</p>
              </div>
              <hr />
              <div className='liraearrings'>
                <h5>SUBTOTAL</h5>
                <p>$85</p>
              </div>
              <hr />
              <div className='liraearrings'>
                <h5>SHIPPING</h5>
                <p>Free shipping</p>
              </div>
              <hr />
              <div className='liraearrings'>
                <h5>TOTAL</h5>
                <h5>$85</h5>
              </div>
            </div>
            <div className='bank'>
              <div className='transfer'>
                <FaRegDotCircle />
                <h5>Direct bank transfer</h5>
              </div>
              <div className='matter'>
                <p>
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account
                </p>
              </div>
            </div>
            <div className='payment-method'>
              <div className='check-payments'>
                <GoDot />
                <h5>Check payments</h5>
              </div>
              <div className='check-payments'>
                <GoDot />
                <h5>Cash on delivery</h5>
              </div>
              <div className='check-payments'>
                <GoDot />
                <h5>PayPal</h5>
                <GrPaypal />
              </div>
              <Link to="/orderconformation"><button className="submit">PLACE ORDER</button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Footer/>

    </>
  )
}

export default Checkout