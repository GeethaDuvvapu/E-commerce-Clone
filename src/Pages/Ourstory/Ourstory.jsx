import React from 'react'
import './Ourstory.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import handimage from "../Ourstory/Assets/bandsImg.jpg"
import halfhandimage from "../Ourstory/Assets/watchImg.jpg"



const Ourstory = () => {
  return (
   <>
    <Navbar/>
    <div className='about-section'>
      <div className='storypage'>
        <div className='about1'>
          <h1>About</h1>
          <p>Who we are and why we do what we do!</p>
          <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, <br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac <br /> urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat <br /> tortor lacus, ac sodales lectus placerat quis. 
          </p>
        </div>
       {/* <h1>About</h1>
       <p>Who we are and why we do what we do!</p>
       <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, <br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac <br /> urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat <br /> tortor lacus, ac sodales lectus placerat quis. 
       </p> */}
     
       <div className='main_story'>
        {/* <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, <br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac <br /> urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat <br /> tortor lacus, ac sodales lectus placerat quis. 
        </p> */}
        <h2>Top Trends</h2>
        <img src={handimage} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a <br />volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis <br /> mauris eget arcu facilisis consequat sed eu felis. 
        </p>
        <p>
           ● consectetur adipiscing elit. Aliquam placerat
        </p>
        <p> 
           ● Lorem ipsum dolor sit amet consectetur 
        </p>
        <h2>Produced with care</h2>
        <img src={halfhandimage} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,<br /> sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat <br />sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.
        </p>
       </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Ourstory
