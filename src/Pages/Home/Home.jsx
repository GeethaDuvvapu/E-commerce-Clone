import React from 'react'
import './HomeStyle.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Hero from '../Home/Hero';



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Footer/>
        
    </div>
  )
}

export default Home
