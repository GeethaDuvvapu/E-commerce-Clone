import React from 'react'
import './ShoppingBag.css'
import OllieEarings from '../ShoppingBag/Assets/OllieEarringsImg.jpg'
import kaedehairpin from '../ShoppingBag/Assets/kaedehairpinImg.jpg'
import LiraEarrings from '../ShoppingBag/Assets/earpeiceImg.jpg'
import { IoIosClose } from "react-icons/io";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const ShoppingBag = () => {
    const grid= [
        {
            id:1,
            image:LiraEarrings,
            name:"Lira Earrings",
            description : "Black/Medium",
            price:"$ 20,00",
            count:1
           },
    
        {
          id:2,
          image:OllieEarings,
          name:"Ollie Earrings",
          description : "Black/Medium",
          price:"$ 20,00",
          count:3
         },
         {
          id:3,
          image:kaedehairpin,
          name:"Kaede Hair Pin",
          description : "Black/Medium",
          price:"$ 20,00",
          count:1
         },
         {
            id:4,
            image:OllieEarings,
            name:"Ollie Earrings",
            description : "Black/Medium",
            price:"$ 20,00",
            count:1
           }
         
           ]
  return (
    <>
     <Navbar/>
     <div className='main'>
        <div className='container'>
          <div className='header'>
          <h2>Privacy Policy</h2>
          <div className='privacy-points'>
           <p>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, <br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac <br /> urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat <br /> tortor lacus, ac sodales lectus placerat quis. 
           </p>
           <h4>Security</h4>
           <p>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,<br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.
           </p>
           <h4>Cookies</h4>
           <p>
            ●  Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.
           </p>
           <p>
           ●  Nam fringilla molestie velit, eget pellentesque risus scelerisque a
           </p>
          </div>
          </div>
          <div className='shoppingbag'>
            <div className='container2'>
              <h5>Shopping bag</h5>
              <p>5 items</p>
            </div>
          
            <div className='cartbag'>
            <div className='grid-section5'>
             {
                 grid.map((item,index)=>{
                 return (
                    <div  className="cartpicture" key={index}>
                        <img src={item.image} alt="" />
                          <div className="cartdescription">
                            <h3>{item.name}</h3>
                            <div className="itemprice">
                              <p>{item.description}</p>
                              <span>{item.price}</span>
                            </div>  
                            <div className='qty'>
                              <p>QTY: -   +</p>
                            </div>
                          </div>
                          <IoIosClose />

                    </div>
 
                 )
                })
             }
            
            </div>
            </div>
            <hr />
            <div className='sub'>
              <div className='sub1'>
                <p>Subtotal (5 items)</p>
                <p> $ 100,00</p>
              </div>
              <button>VIEW CART</button>
            </div>
          </div>
        </div>
        {/* <div className='header'>
          <h2>Privacy Policy</h2>
          <div className='privacy-points'>
           <p>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, <br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac <br /> urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat <br /> tortor lacus, ac sodales lectus placerat quis. 
           </p>
           <h4>Security</h4>
           <p>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,<br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.
           </p>
           <h4>Cookies</h4>
           <p>
            ●  Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.
           </p>
           <p>
           ●  Nam fringilla molestie velit, eget pellentesque risus scelerisque a
           </p>
          </div>
        </div>
        <div className='shoppingbag'>
          <h5>Shopping bag</h5>
          <p>5 items</p>
          <div className='cartbag'>
            <div className='grid-section4'>
             {
                 grid.map((item)=>{
                 return (
                    <div className="cartpicture">
                        <img src={item.image} alt="" />
                          <div className="cartdescription">
                            <h3>{item.name}</h3>
                            <div className="itemprice">
                              <p>{item.description}</p>
                              <span>{item.price}</span>
                            </div>  
                            <div className='qty'>
                            <p>QTY: -   +</p>
                          </div>
                          </div>

                    </div>
 
                 )
                })
             }
            
            </div>
          </div>
        </div> */}
     </div>
     {/* <div className='shoppingbag'>
          <h5>Shopping bag</h5>
          <p>5 items</p>
          <div className='cartbag'>
            <div className='grid-section4'>
             {
                 grid.map((item)=>{
                 return (
                    <div className="cartpicture">
                        <img src={item.image} alt="" />
                          <div className="cartdescription">
                            <h3>{item.name}</h3>
                            <div className="itemprice">
                              <p>{item.description}</p>
                              <span>{item.price}</span>
                            </div>  
                            <div className='qty'>
                            <p>QTY: -   +</p>
                          </div>
                          </div>

                    </div>
 
                 )
                })
             }
            
            </div>
          </div>
     </div> */}
     
     <Footer/>
    </>
  )
}

export default ShoppingBag