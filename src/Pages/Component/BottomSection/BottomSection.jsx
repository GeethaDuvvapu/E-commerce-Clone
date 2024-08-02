import React from 'react'
import './BottomSection.css'
import earring2 from '../../Assets/earring2.jpg'
import HalEarrings from '../../Assets/Earrings.jpg'
import kaedehairpin from '../../Assets/kaedehairpinImg.jpg'

const BottomSection = () => {
    const grid= [
    
        {
          id:1,
          image:earring2,
          name:"Ollie Earrings",
          price:"$ 30,00"
         },
         {
          id:2,
          image:HalEarrings,
          name:"Hal Earrings",
          price:"$ 25,00"
         },
         {
          id:3,
          image:kaedehairpin,
          name:"Kaede Hair Pin Set Of 3",
          price:"$ 30,00"
         }
           ]
  return (
    <div className='bottomproductpage'>
        <div className='similaritems'>
          <h2>Similar Items</h2>
        </div>

          
        <div className='grid-section3'>
          
          {
             grid.map((item,index)=>{
                 return (
                     <div className="models" key={index}>
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

export default BottomSection