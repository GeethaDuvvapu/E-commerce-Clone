import { useState, useEffect } from 'react'
import './Cart.scss'
import {Link} from "react-router-dom";
import OllieEarings from '../Cart/Assets/OllieEarringsImg.jpg'
import kaedehairpin from '../Cart/Assets/kaedehairpinImg.jpg'
import LiraEarrings from '../Cart/Assets/earpeiceImg.jpg'
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"



// const Cart = () => {
 
//     const grid= [
//         {
//           id:1,
//           image:LiraEarrings,
//           name:"Lira Earrings",
//           description : "Black/Medium",
//           price:"$ 20,00",
//           count:1
//         },
    
//         {
//           id:2,
//           image:OllieEarings,
//           name:"Ollie Earrings",
//           description : "Black/Medium",
//           price:"$ 20,00",
//           count:3
//         },
//          {
//           id:3,
//           image:kaedehairpin,
//           name:"Kaede Hair Pin",
//           description : "Black/Medium",
//           price:"$ 20,00",
//           count:1
//          }
         
// ]
    
//     const [count, setCount] = useState(grid.map(() => 0));
//       const increment = (index) => {
//                // Update the specific count in the array
//                const newCounts = [...count];
//                newCounts[index] += 1;
//                setCount(newCounts);
//       };
       
//       const decrement = (index) => {
//                // Update the specific count in the array
//                const newCounts = [...count];
//                if (newCounts[index] > 0) {
//                    newCounts[index] -= 1;
//                }
//                setCount(newCounts);
//       };
       

//   return (
//     <>
//       <Navbar/>
//       <div className='cartpage'>
//          <h3>Shopping Cart</h3>
//          <div className='cartsection'>
//            <div className='grid-section3'>
//              {
//                  grid.map((item, index)=>{
//                  return (
//                   <div className="cartpicture" key={item.id} >
//                       <img src={item.image} alt="" />
//                       <div className="cartdescription">
//                         <h3>{item.name}</h3>
//                         <div className="itemprice">
//                           <p>{item.description}</p>
//                           <span>{item.price}</span>
//                         </div>  
//                       </div>
//                       <div className="countpart">
//                         <button onClick={() => decrement(index)}> - </button>
//                         <span>{count[index]}</span>
//                         <button onClick={() => increment(index)}> + </button>
//                       </div>
//                       {/* <button className='count'> - {item.count} +</button> */}
//                       <MdDelete className='deletepart' />
//                   </div>
 
//                  )
//                 })
//              }
//              <div className="update">
//              <button>UPDATE CART</button>
//              </div>
           
//              <div className='apply'>
//                <input type="coupon" placeholder='Coupon Code'/>
//                <button className='coupon'>APPLY COUPON</button>
//              </div>
//            </div>
           
//            <div className='right-cart'>
//              <h3>Cart totals</h3>
//              <div className='subtotal'>
//               <p>SUBTOTAL</p>
//               <span>$ 65,00</span>
//              </div>
//              <div className='shippingpart'>
//               <p>SHIPPING</p>
//               <div className='part2'>
//                  <p>Shipping costs will be calculated once you have provided address.</p>
//                  <div className='calci'>
//                   <p>CALCULATE SHIPPING</p>
//                   <MdKeyboardArrowUp />
//                  </div>
//                  <div className='cartinfo'>
//                   <input type="country" placeholder='SELECT A COUNTRY'/>
//                   <RiArrowDropDownLine />
//                  </div>
//                  <div className='cartinfo'>
//                 <input type="city" placeholder='CITY'/>
//                 <RiArrowDropDownLine />
//                  </div>
//                  <div className='cartinfo'>
//                 <input type="zipcode" placeholder='POST CODE / ZIP'/>
//                 <RiArrowDropDownLine />
//                  </div>
//                  <button>UPDATE TOTALS</button>
//               </div>
//              </div>
//              <div className='part3'>
//                 <p>TOTAL
//                 </p>
//                 <p>$ 87,00</p>
//              </div>
           
//              {/* <button className='proceed'>PROCEED TO CHECKOUT</button> */}
//              {/* <button><Link to=" /Checkout">PROCEED TO CHECKOUT</Link></button> */}
//              {/* <div className='proceed'>
//                <button><Link to="/Checkout">PROCEED TO CHECKOUT</Link></button>
//              </div> */}
//              <Link to="/checkout"><button className="proceed">PROCEED TO CHECKOUT</button>
//              </Link>
//            </div>
//          </div>
//       </div>
//       <Footer/>
//     </>
//   )
// }

const Cart = () => {
  const initialItems = [
    {
      id: 1,
      image: LiraEarrings,
      name: 'Lira Earrings',
      description: 'Black/Medium',
      price: 20.00,
      count: 1,
    },
    {
      id: 2,
      image: OllieEarings,
      name: 'Ollie Earrings',
      description: 'Black/Medium',
      price: 20.00,
      count: 3,
    },
    {
      id: 3,
      image: kaedehairpin,
      name: 'Kaede Hair Pin',
      description: 'Black/Medium',
      price: 20.00,
      count: 1,
    },
];

  const [cartItems, setCartItems] = useState(initialItems);

  const increment = (index) => {
    const newItems = [...cartItems];
    newItems[index].count += 1;
    setCartItems(newItems);
  };

  const decrement = (index) => {
    const newItems = [...cartItems];
    if (newItems[index].count > 0) {
      newItems[index].count -= 1;
      setCartItems(newItems);
    }
  };

  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className='cartpage'>
        <h3>Shopping Cart</h3>
        <div className='cartsection'>
          <div className='grid-section3'>
            {cartItems.map((item, index) => (
              <div className="cartpicture" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cartdescription">
                  <h3>{item.name}</h3>
                  <div className="itemprice">
                    <p>{item.description}</p>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="countpart">
                  <button onClick={() => decrement(index)}> - </button>
                  <span>{item.count}</span>
                  <button onClick={() => increment(index)}> + </button>
                </div>
                <MdDelete className='deletepart' onClick={() => removeFromCart(index)} />
              </div>
            ))}
            <div className="update">
              <button>UPDATE CART</button>
            </div>

            <div className='apply'>
              <input type="coupon" placeholder='Coupon Code' />
              <button className='coupon'>APPLY COUPON</button>
            </div>
          </div>

          <div className='right-cart'>
            <h3>Cart totals</h3>
            <div className='subtotal'>
              <p>SUBTOTAL</p>
              <span>${calculateSubtotal()}</span>
            </div>
            <div className='shippingpart'>
              <p>SHIPPING</p>
              <div className='part2'>
                <p>Shipping costs will be calculated once you have provided address.</p>
                <div className='calci'>
                  <p>CALCULATE SHIPPING</p>
                  <MdKeyboardArrowUp />
                </div>
                <div className='cartinfo'>
                  <input type="country" placeholder='SELECT A COUNTRY' />
                  <RiArrowDropDownLine />
                </div>
                <div className='cartinfo'>
                  <input type="city" placeholder='CITY' />
                  <RiArrowDropDownLine />
                </div>
                <div className='cartinfo'>
                  <input type="zipcode" placeholder='POST CODE / ZIP' />
                  <RiArrowDropDownLine />
                </div>
                <button>UPDATE TOTALS</button>
              </div>
            </div>
            <div className='part3'>
              <p>TOTAL</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <Link to="/checkout"><button className="proceed">PROCEED TO CHECKOUT</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Cart