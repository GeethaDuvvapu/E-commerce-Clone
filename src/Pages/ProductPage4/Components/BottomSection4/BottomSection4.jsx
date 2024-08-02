import React from 'react'
import './BottomSection4.css'
import chainimg from "../../Assets/chainimg.jpg"
import hairpin2img from "../../Assets/hairpin2img.jpg"
import hairpin3img from "../../Assets/hairpin3img.jpg"

const BottomSection4 = () => {
  const grid= [
    
    {
      id:1,
      image:chainimg,
      name:"Plaine Necklace",
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
      image:hairpin3img,
      name:"Yuki Hair Pin Set of 3",
      price:"$ 30,00"
     }
       ]
  return (
    <div className='bottomproductpage4'>
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

export default BottomSection4