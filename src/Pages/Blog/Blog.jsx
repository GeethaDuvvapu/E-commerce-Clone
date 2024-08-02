import React from 'react'
import './Blog.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { CiSearch } from "react-icons/ci"
// import halfhandimage from "../Blog/Assets/watchImg.jpg"
import bandsImg from './Assets/bandsImg.jpg'
import earringImg from './Assets/earringImg.jpg'
import girlImg from './Assets/girlImg.jpg'
import watchImg from './Assets/watchImg.jpg'



const Blog = () => {
  const grid= [watchImg,girlImg,earringImg,bandsImg]

  return (
  <>
    <Navbar/>
    <div className='blogpage'>
      <div className='headingpart'>
        <h1>Blog</h1>
        <div className='search-bar'>
          <p>Search...</p>
           <CiSearch />
        </div>
        <div className='categories'>
          <h3>Categories</h3>
          <p>Fashion</p>
          <p>Style</p>
          <p>Accessories</p>
          <p>Season</p>
        </div>
      </div>


      <div className='grid'>

        {
            grid.map((item)=>{
                return (
                    <div className="images">
                        <img src={item} alt="" />
                        <div className="content">
                            <p>Fashion - October 8, 2020</p>
                            <h3>Top Trends From Spring</h3>
                            <div className='loremtext'>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />  faucibus augue, a maximus elit ex vitae libero... 
                              </p>
                            </div>
                            <h4>Read More</h4>
                        </div>
                    </div>

                );
            })
        }
        

      </div>
     
    </div>
    <Footer/>
  </>
  )
}

export default Blog
