import React from 'react'
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import '../Footer/Footer.css';

const Footer = () => {
  return (
      
      <div  className='footer'>
        <hr />
        <div className="footer-data">
          <div className="footer-about">
            {/* { <p>CONTACT</p> } */}
            <Link to="/contact">CONTACT</Link>

            <p>TERMS OF SERVICES</p>
            <p>SHIPPING AND RETURNS</p>
          </div>
            
          <div className="email">
            <p>Give an email get the newsletter</p>
            <MdOutlineArrowRightAlt className='arrow'/>
          </div>
        </div>

        <div className="footer-below">
          <div className="terms-policy">
            {/* <p> © 2021 Shelly. Terms of use and privacy policy.</p> */}
            <p>
              © 2021 Shelly. Terms of use and <a href="/privacy">privacy policy</a>.
            </p>

          </div>

          <div className="social-icons">
            <TiSocialLinkedin />
            <TiSocialFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    
  )
}

export default Footer
