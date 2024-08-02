import React from 'react'
import '../AdditionalInfo/AdditionalInfo.css'
import Navbar from '../../../../Components/Navbar/Navbar'
import TopSection from '../../../Component/TopSection/TopSection'
import BottomSection from '../../../Component/BottomSection/BottomSection'
import Footer from '../../../../Components/Footer/Footer'
import circleicon from '../../Assets/receviedicon.png'

const AdditionalInfo = () => {
  return (
    <>
       <Navbar/>
       <div className='productpage'>
        <div className='shoppingbag'>
          <img src={circleicon} alt="" />
          <h5>The item added to your Shopping bag.</h5>
          <div className='viewcart'>
           <p>VIEW CART</p>
          </div>
        </div>
        <TopSection/>
        <div className='detailsofselectitem1'>
          <div className='description'>
            <h4>Description</h4>
          </div>
          <div className='additionalinfo'> 
             <h4>Additional information</h4>
          </div>
          <div className='reviews'>
             <h4>Reviews(0)</h4>
          </div>
        </div>
        <div className='aboutofproduct1'>
          <div className='feauters'>
           <h5>Weight:</h5>
           <p>0.3 kg</p>
          </div> 
          <div className='feauters'>
           <h5>Dimentions: </h5>
           <p>15 x 10 x 1 cm </p>
          </div>
          <div className='feauters'>
            <h5>Colours: </h5>
            <p>Black, Browns, White</p>
          </div>
          <div className='feauters'>
            <h5> Material: </h5>
            <p>Metal</p>
          </div>
        </div>
        <BottomSection/>
       </div>
       <Footer/>
    </>
  )
}

export default AdditionalInfo