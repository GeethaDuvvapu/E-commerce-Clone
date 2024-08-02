import React from 'react'
import './ProductPage3.css'
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
// import TopSection3 from '../Components/TopSection3/TopSection3';
// import BottomSection3 from '../Components/BottomSection3/BottomSection3';
import TopSection3 from "../../Pages/ProductPage3/Components/TopsSection3/TopSection3"
import BottomSection3 from "../../Pages/ProductPage3/Components/BottomSection3/BottomSection3"

const ProductPage3 = () => {
  const [value, setValue] = React.useState('1');
   
  const handleChange = (event, newValue) => {
    setValue(newValue);
};

  return (
    <>
     <Navbar/>
     <div className='productpage'>
       <TopSection3/>
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
       <BottomSection3/>

     </div>
     <Footer/>
    </>
  )
}

export default ProductPage3