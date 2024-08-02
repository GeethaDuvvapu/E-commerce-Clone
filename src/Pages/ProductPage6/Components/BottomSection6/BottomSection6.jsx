import React from 'react'
import './BottomSection6.css'
import hairpin2img from "../../Assets/hairpin2img.jpg"
import earring2 from "../../Assets/earring2.jpg"
import earpeiceimg from "../../Assets/earpeiceimg.jpg"

const BottomSection6 = () => {
  const grid= [
    
    {
      id:1,
      image:hairpin2img,
      name:"Kaede Hair Pin Set Of 3",
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
      image:earpeiceimg,
      name:"Lira Earrings",
      price:"$ 30,00"
     }
       ]
  return (
    <div className='bottomproductpage6'>
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

export default BottomSection6