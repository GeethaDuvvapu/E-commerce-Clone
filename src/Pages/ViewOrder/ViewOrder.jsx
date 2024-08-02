import React from 'react'
import './ViewOrder.css'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'

const ViewOrder = () => {
  return (
    <>
      <Navbar/>
      <div className='orderconformation-page'>
        {/* <div className='received-order'>
          <img src={circleicon} alt="" />
          <h5>We've received your order</h5>
        </div> */}
        <div className='order-info'>
          <div className='detailsof-order'>
            <div className='order-heading1'>
              <h3>Order Details</h3>
            </div>
            <div className='ordersection1'>
              <div className='order-left'>
              <div className='order-number'>
                <h6>ORDER NUMBER</h6>
                <p>1879605573994</p>
              </div>
              <div className='order-number'>
                <h6>EMAIL</h6>
                <p>Vitathemes@gmail.com</p>
              </div>
              <div className='order-number'>
               <h6>PAYMENT METHOD</h6>
               <p>Mastercard*************7865</p>
             </div>
             <div className='order-number'>
               <h6>ORDER DATE</h6>
               <p>October 8,2020</p>
             </div>
              </div>
              <div className='order-right'>
                <div className='delivery-options'>
                  <h6>DELIVERY OPTIONS</h6>
                  <p>Standard delivery</p>
                </div>
                <div className='delivery-options'>
                  <h6>DELIVERY ADDRESS</h6>
                  <div className='address'>
                    <p>Kristian holst 34 <br /> old street W1F <br /> 7NU london <br /> United Kingdom</p>
                  </div>
                </div>
                <div className='delivery-options'>
                  <h6>CONTACT NUMBER</h6>
                  <p>+44 8749790988</p>
                </div>
              </div>
            </div>
          </div>
          
        
          <div className='order-summary'>
            <div className='order-heading2'>
              <h3>Order Summary</h3>
            </div>
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

           
          <div/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ViewOrder