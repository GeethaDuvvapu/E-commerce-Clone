import React from 'react'
import './BottomSection5.css'
import earring2 from "../../Assets/earring2.jpg"
import earpeiceimg from "../../Assets/earpeiceimg.jpg"
import hairpin2img from "../../Assets/hairpin2img.jpg"

const BottomSection5 = () => {
  const grid= [
    
    {
      id:1,
      image:earring2,
      name:"Hal Earrings",
      price:"$ 30,00"
     },
     {
      id:2,
      image:hairpin2img,
      name:"Kaede Hair Pin Set Of 3",
      price:"$ 25,00"
     },
     {
      id:3,
      image:earpeiceimg,
      name:"Lira Earrings",
      price:"$ 30,00"
     }
       ]
  return (
    <div className='bottomproductpage5'>
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

export default BottomSection5