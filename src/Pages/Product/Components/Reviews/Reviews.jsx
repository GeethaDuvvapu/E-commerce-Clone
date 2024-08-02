import React from 'react'
import '../Reviews/Reviews.css'
import Navbar from '../../../../Components/Navbar/Navbar'
import Footer from '../../../../Components/Footer/Footer'
import TopSection from '../../../Component/TopSection/TopSection'
import BottomSection from '../../../Component/BottomSection/BottomSection'
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiCheckboxBlankLine } from "react-icons/ri";




const Reviews = () => {
  return (
    <>
      <Navbar/>
      <div className='productpage'>
       <TopSection/>
       <div className='detailsofselectitem2'>
          <h4>Description</h4>
          <h4>Aditional information</h4>
          <div className='reviews'>
           <h4>Reviews(0)</h4>
          </div>
       </div>
       <div className='aboutofproduct2'>
         <div className='reviewsection'>
           <div className='rightpart'>
            <h2>2 Reviews for lira earings</h2>
           </div>
           <div className='section1'>
             <h4>Scarlet withch</h4>
             <p>6 May, 2020</p>
           </div>
           <div className='rating'>
             <IoIosStar />
             <IoIosStar />
             <IoIosStar />
             <FaRegStar />
             <FaRegStar />
           </div>
           <div className='content'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ,<br /> nibh euismod tincidunt ut laoreet. </p>
           </div>
           <div className='section1'>
             <h4>Scarlet withch</h4>
             <p>6 May, 2020</p>
           </div>
           <div className='rating'>
             <IoIosStar />
             <IoIosStar />
             <IoIosStar />
             <FaRegStar />
             <FaRegStar />
           </div>
           <div className='content'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br />nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Aliquam placerat.</p>
           </div>
         </div>

         <div className='detailsofreview'>
          <div className='leftpart'>
            <h2>Add a Review</h2>
          </div>
          <div className='content2'>
            <p>Your email address will not be published. Required fields are marked *</p>
          </div>
          <div className='yourreview'>
            <p>Your Review*</p>
          </div>
          <div className='name'>
            <p>Enter your name*</p>
          </div>
          <div className='email'>
            <p>Enter your Email*</p>
          </div>
          <div className='checkbox'>
           <RiCheckboxBlankLine />
           <p>Save my name, email, and website in this browser for the next time I comment</p>
          </div>
          <div className='your-rating'>
            <p>Your Rating*</p>
          </div>
          <div className='rating2'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <button className='submit-btn'>Submit</button>
         </div>
       </div>
      
      </div>
   
       <BottomSection/>
      <Footer/>

    </>
  )
}

export default Reviews