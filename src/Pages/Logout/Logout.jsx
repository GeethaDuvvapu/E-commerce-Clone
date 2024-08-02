import React from 'react'
import './Logout.css'
import { Link } from 'react-router-dom';
import { BsEmojiSmileFill } from "react-icons/bs";


import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Logout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='logoutmsg'>
          <h2>You have been logged out. See you again soon !</h2>
          <BsEmojiSmileFill />
        </div>
        <div className='loginmsg'>
         <Link to="/myaccount"><h2> Click here to log in again.</h2></Link>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Logout