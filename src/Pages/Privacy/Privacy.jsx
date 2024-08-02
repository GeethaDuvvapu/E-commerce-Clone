import React from 'react'
import './Privacy.css'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
const Privacy = () => {
  return (
    <>
     <Navbar/>
     <div className='main'>
        <div className='header'>
          <h2>Privacy Policy</h2>
          <div className='privacy-points'>
           <p>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, <br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac <br /> urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat <br /> tortor lacus, ac sodales lectus placerat quis. 
           </p>
           <h4>Security</h4>
           <p>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,<br /> gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.
           </p>
           <h4>Cookies</h4>
           <p>
            ●  Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.
           </p>
           <p>
           ●  Nam fringilla molestie velit, eget pellentesque risus scelerisque a
           </p>
          </div>
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default Privacy