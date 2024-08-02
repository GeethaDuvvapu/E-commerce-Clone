import React from 'react'
import './BottomSection3.css'
import earpeiceimg from '../../../ProductPage3/Assets/earpeiceimg.jpg'
import earring2 from '../../../ProductPage3/Assets/earring2.jpg'
import hairpin3img from '../../../ProductPage3/Assets/hairpin3img.jpg'

const BottomSection3 = () => {
  const grid= [
    
    {
      id:1,
      image:earpeiceimg,
      name:"Lira Earrings",
      price:"$ 30,00"
     },
     {
      id:2,
      image:earring2,
      name:"Hal Earrings",
      price:"$ 25,00"
     },
     {
      id:3,
      image:hairpin3img,
      name:"Yuki Hair Pin Set of 3",
      price:"$ 30,00"
     }
       ]
  return (
    <div className='bottomproductpage3'>
     <div className='similaritems'>
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
     </div>
    </div>
  )
}

export default BottomSection3