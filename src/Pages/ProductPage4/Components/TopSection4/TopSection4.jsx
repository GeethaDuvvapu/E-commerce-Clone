import React from 'react'
import './TopSection4.css'
import { useState } from 'react';
import hairpinimg from "../../Assets/hairpinimg.jpg"
import { TiStar } from "react-icons/ti";
import { LuHeart } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";

const TopSection4 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
   <div className='topproductpage4'>
    <div className='earing-section'>
      <div className='small-sizepics'>
         <img src={hairpinimg} alt="" />
         <img src={hairpinimg} alt="" />
         <img src={hairpinimg} alt="" />
         <img src={hairpinimg} alt="" />
      </div>
      <div className='big-sizepic'>
        <img src={hairpinimg} alt="" />
      </div>
      <div className='product-details'>
        <div className='section3'>
          <h2>Hair Pin Set of 3</h2>
          <p>$ 30,00</p>
        </div>
        <div className='rating'>
          <div className='stars'>
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
          </div>
          <p>1 customer review</p>
        </div>
        <div className='review'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br /> placerat, augue a volutpat hendrerit, sapien tortor faucibus <br /> augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu <br /> facilisis consequat sed eu felis. </p>
        </div>
        <div className='cart-details'>
          <div className='count'>
                 <button onClick={increment}>+</button>
                 <span>{count}</span> 
                 <button onClick={decrement}>-</button>
          </div>
          <button className='addcart'>ADD TO CART</button>
        </div>
        <div className='socialicons'>
          <div className='heart'>
            <LuHeart />
          </div>
          <div className='media'>
            <SlEnvolope />
            <TiSocialFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className='sku'>
          <h5>SKU:</h5>
          <p>12</p>
        </div>
        <div className='categorie'>
          <h5>Categories:</h5>
          <p>Fashion, Style</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default TopSection4