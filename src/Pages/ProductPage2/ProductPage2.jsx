import React from 'react'
import './ProductPage2.css'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from '../../Components/Footer/Footer'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Description from "../ProductPage/Components/Description/Description"
import Additionalinfo from "../ProductPage/Components/Additionalinfo/Additionalinfo"
import ProductReview from "../ProductPage/Components/ProductReview/ProductReview"
import TopSection2 from './Components/TopSection2/TopSection2';
import BottomSection2 from './Components/BottomSection2/BottomSection2';


const ProductPage2 = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <>
     <Navbar/>
     <div className='productpage'>
       <TopSection2/>
       <Box sx={{ width: '84%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Description" value="1" />
                <Tab label="Additional information" value="2" />
                <Tab label="Reviews" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1"><Description/></TabPanel>
            <TabPanel value="2"><Additionalinfo/></TabPanel>
            <TabPanel value="3"><ProductReview/></TabPanel>
          </TabContext>
       </Box>
       <BottomSection2/>

     </div>
     <Footer/>
    </>
  )
}

export default ProductPage2