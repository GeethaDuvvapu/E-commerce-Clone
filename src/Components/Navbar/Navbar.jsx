import React from 'react'
import {Link} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import shoppe from '../Assets/SHOPPE.png'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={shoppe} alt="" /></Link>
        <div className="list">
         <Link to="/shop">Shop</Link>
         <Link to="/blog">Blog</Link>
         <Link to="/ourstory">OurStory</Link>
         <div className='search-part'>
          <div className='icon'>
            <input type="Search" placeholder='search' />
            <CiSearch className='s-symbol' />
          </div>
         </div>
         <Link to ={"/cart"}>
          <CiShoppingCart />
         </Link>
         <Link to={"/myaccount"}>
          <CgProfile id="personal" />
         </Link>
         <Link to="/logout">Logout</Link>

        </div>
      </div>
      <hr />
      
    </nav>
  )
}

export default Navbar



