import React from 'react'
import './BottomSection2.css'
import chainimg from '../../Assets/chainimg.jpg'
import hairpinimg from '../../Assets/hairpinimg.jpg'
import hairpin2img from '../../Assets/hairpin2img.jpg'
// import earring3 from '../../../Assets/yukihairpinImg.jpg'
// import earring3 from '../../../Assets/yukihairpinImg.jpg'
// import HalEarrings from '../../Assets/Earrings.jpg'
// import kaedehairpin from '../../Assets/kaedehairpinImg.jpg'

const BottomSection2 = () => {

  const grid= [
    
    {
      id:1,
      image:chainimg,
      name:"Hal Earrings",
      price:"$ 30,00"
     },
     {
      id:2,
      image:hairpinimg,
      name:"Hair Pin Set of 3",
      price:"$ 25,00"
     },
     {
      id:3,
      image:hairpin2img,
      name:"Kaede Hair Pin Set Of 3",
      price:"$ 30,00"
     }
       ]
  return (
    <div className='bottomproductpage2'>
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

export default BottomSection2