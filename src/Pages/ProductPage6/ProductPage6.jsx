import React from 'react'
import './ProductPage6.css'
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
import TopSection6 from "../ProductPage6/Components/TopSection6/TopSection6"
import BottomSection6 from "../ProductPage6/Components/BottomSection6/BottomSection6"

const ProductPage6 = () => {
  const [value, setValue] = React.useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
  return (
    <>
     <Navbar/>
     <div className='productpage'>
       <TopSection6/>
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
       <BottomSection6/>
     </div>
     <Footer/>
    </>
  )
}

export default ProductPage6