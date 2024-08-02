import React from 'react'
import './Error.css'
import {Link} from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

const Error = () => {
  return (
    <>
     <Navbar/>
     <div className='errorpart'>
        <div className='head'>
          <h3>404 ERROR</h3>
        </div>
        <div className='message'>
          <p>This page not found;</p>
          <p> back to home and start again</p>
        </div>
        <div className='err-msg'>
         <Link to="/"><button>HOMEPAGE</button></Link>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default Error