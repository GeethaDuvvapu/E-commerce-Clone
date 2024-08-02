import React from 'react'
import './Shop.css'
import {Link} from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { CiSearch } from "react-icons/ci"
import earpeiceImg from "./Assets/earpeiceImg.jpg"
import hairpinImg from './Assets/hairpinImg.jpg'
import halearingsImg from './Assets/halearringsImg.jpg'
import kaedehairpinImg from './Assets/kaedehairpinImg.jpg'
import plainnecklaceImg from './Assets/plainenecklaceImg.jpg'
import yukihairpinImg from './Assets/yukihairpinImg.jpg'
import dropdowns from "../Shop/Assets/Iconcolor.png"
import Priceline  from '../Shop/Assets/Priceline.png'
import { BiSolidToggleLeft } from "react-icons/bi";
import ProductPage2 from '../ProductPage2/ProductPage2';
import ProductPage from '../ProductPage/ProductPage';

const Shop = () => {
  // const grid= [earpeiceImg,hairpinImg,halearingsImg,kaedehairpinImg,plainnecklaceImg,yukihairpinImg]
  const grid= [
    
    {
      id:1,
      image:earpeiceImg,
      name:"Lira Earrings",
      price:"$ 20,00",
      pages: "/ProductPage"
      
     },
     {
      id:2,
      image:halearingsImg,
      name:"Hal Earrings",
      price:"$ 25,00",
      pages:"/ProductPage2"
     },
     {
      id:3,
      image:kaedehairpinImg,
      name:"Kaede Hair Pin Set Of 3",
      price:"$ 30,00",
      pages: "/ProductPage3"
     },
     {
      id:4,
      image:hairpinImg,
      name:"Hair Pin Set of 3",
      price:"$ 30,00",
      pages: "/ProductPage4"
     },
     {
      id:5,
      image:plainnecklaceImg,
      name:"Plaine Necklace",
      price:"$ 19,00",
      pages: "/ProductPage5"
     },
     {
      id:6,
      image:yukihairpinImg,
      name:"Yuki Hair Pin Set of 3",
      price:"$ 29,00",
      pages: "/ProductPage6"
     }
       ]
  return (
    <>
      <Navbar/>
      <div className='shoppage'>
        <div className='latest-shop'>
         <h1>Shop The Latest</h1>
         <div className='search-bar'>
           <p>Search...</p>
            <CiSearch />
         </div>
         <div className='leftpart'>
            <div className='shop-section'>
              <h5>Shop By</h5>
              <img src={dropdowns} alt="" />
            </div>
            <div className='sort-section'>
              <h5>Sort By</h5>
              <img src={dropdowns} alt="" />
            </div>
            <div className='price-bar'>
              <img src={Priceline} alt="" />
            </div>
            <div className='price-range'>
              <h6>Price: $40 - $180</h6>
              <p>Filter</p>
            </div>
            <div className='sale-section'>
              <p>On sale</p>
              <BiSolidToggleLeft />
            </div>
            <div className='stock-section'>
              <p>In Stock</p>
              <BiSolidToggleLeft />
            </div>
         </div>


        </div>

{/* 
        <div className='grid-section'>
          
         {
            grid.map((item)=>{
                return (
                    <div className="pictures">
                      <img src={item} alt="" />
                      <div className="name">
                        <h3>Lira Earrings</h3>
                        <div className='price'>
                         <p>$ 20,00</p>
                        </div>
                      </div>
                    </div>

                );
            })
          }
        </div> */}
         <div className='grid-section2'>
          
          {
             grid.map((item)=>{
                 return (
                     <div className="models2">
                       <Link to= {item.pages} ><img src={item.image} alt="" id={item.id} /></Link> 
                       <h3>{item.name}</h3>
                       <p>{item.price}</p>
                     </div>
 
                 );
             })
           }
         </div>
      </div>
      <Footer/>

    </>
  )
}

export default Shop
