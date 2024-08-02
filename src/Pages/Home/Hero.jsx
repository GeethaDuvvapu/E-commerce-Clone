import React from 'react'
import './Herostyle.css';
import earpeiceImg from './Assets/earpeiceImg.jpg'
import hairpinImg from './Assets/hairpinImg.jpg'
import halearingsImg from './Assets/halearringsImg.jpg'
import kaedehairpinImg from './Assets/kaedehairpinImg.jpg'
import plainnecklaceImg from './Assets/plainenecklaceImg.jpg'
import yukihairpinImg from './Assets/yukihairpinImg.jpg'

const Hero = () => {
  // const gridArray= [earpeiceImg,hairpinImg,halearingsImg,kaedehairpinImg,plainnecklaceImg,yukihairpinImg]
  const grid= [
    
    {
      id:1,
      image:earpeiceImg,
      name:"Lira Earrings",
      price:"$ 20,00"
     },
     {
      id:2,
      image:halearingsImg,
      name:"Hal Earrings",
      price:"$ 25,00"
     },
     {
      id:3,
      image:kaedehairpinImg,
      name:"Kaede Hair Pin Set Of 3",
      price:"$ 30,00"
     },
     {
      id:4,
      image:hairpinImg,
      name:"Hair Pin Set of 3",
      price:"$ 30,00"
     },
     {
      id:5,
      image:plainnecklaceImg,
      name:"Plaine Necklace",
      price:"$ 19,00"
     },
     {
      id:6,
      image:yukihairpinImg,
      name:"Yuki Hair Pin Set of 3",
      price:"$ 29,00"
     }
       ]
  return (
    <>
      <section className='mainpart'>
        <div className='herosection'>
          <div className='imgdata'>
            <h1>Gold big Hoops</h1>
            <p>$68,00</p>
          </div>
          <div className="btn-div">
            <button>View Product</button>
          </div>
        </div>

        <div className='shop-container'>
          <h2>Shop The Latest</h2>
          <p>View All</p>
        </div>


        {/* <div className='grid-section2'>
        {
            gridArray.map((item)=>{
              return (
                <div className="modelpics">
                  <img src={item} alt="" />
                  <div className="modelname">
                    <h3>Lira Earrings</h3>
                    <div className='amount'>
                      <p>$ 20,00</p>
                    </div>
                  </div>
               </div>
              );

          })
        }
        </div> */}
        <div className='grid-section1'>
          
          {
             grid.map((item)=>{
                 return (
                     <div className="models1">
                       <img src={item.image} alt="" />
                         <h3>{item.name}</h3>
                          <p>{item.price}</p>
                      </div>
 
                 );
             })
           }
        </div>
        
      </section>
    </>
  ) 

}

export default Hero



