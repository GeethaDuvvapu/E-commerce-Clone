import React from 'react'
import '../Product/Product.css'
// import liraearrings from './Assets/earpeiceImg.jpg'
// import OllieEarings from './Assets/OllieEarringsImg.jpg'
// import HalEarrings from './Assets/Earrings.jpg'
// import kaedehairpin from './Assets/kaedehairpinImg.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { TiStar } from "react-icons/ti";
import { LuHeart } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import TopSection from '../Component/TopSection/TopSection'
import BottomSection from '../Component/BottomSection/BottomSection'


const Product = () => {
//    const grid= [
    
// {
//   id:1,
//   image:OllieEarings,
//   name:"Ollie Earrings",
//   price:"$ 30,00"
//  },
//  {
//   id:2,
//   image:HalEarrings,
//   name:"Hal Earrings",
//   price:"$ 25,00"
//  },
//  {
//   id:3,
//   image:kaedehairpin,
//   name:"Kaede Hair Pin Set Of 3",
//   price:"$ 30,00"
//  }
//    ]
  return (
    <>
       <Navbar/>
       <div className='productpage'>
        <TopSection/>
         <div className='detailsofselectitem'>
           <div className='description'>
            <h4>Description</h4>
           </div>
           <h4>Aditional information</h4>
           <h4>Reviews(0)</h4>
         </div>
         <div className='aboutofproduct'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed <br /> eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
            </p>
         </div>


          {/* <div className='similaritems'>
            <h2>Similar Items</h2>
          </div>

          
        <div className='grid-section3'>
          
          {
             grid.map((item)=>{
                 return (
                     <div className="models">
                       <img src={item.image} alt="" />
                         <h3>{item.name}</h3>
                          <p>{item.price}</p>
                      </div>
 
                 );
             })
           }
        </div> */}
        <BottomSection/>
       </div>
       <Footer/>
    </>
  )
}

export default Product