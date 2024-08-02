import React from 'react'
import './Account.css'
import Navbar from '../../Components/Navbar/Navbar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Footer from '../../Components/Footer/Footer'
import Dashboard from './Components/Dashboard/Dashboard';
import Orders from './Components/Orders/Orders';
import Downloads from './Components/Downloads/Downloads';
import Addresses from './Components/Addresses/Addresses';
import AccountDetails from './Components/AccountDetails/AccountDetails';
import Logout from './Components/Logout/Logout';


const Account = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  return (
    <>
     <Navbar/>
     <div className='mainpage'>
        <div className='my-account'>
         <h2>My Account</h2>
        </div>
        <Box sx={{ width: '92%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Dashboard" value="1" />
                <Tab label="Orders" value="2" />
                <Tab label="Downloads" value="3" />
                <Tab label="Addresses" value="4" />
                <Tab label="Account details" value="5" />
                <Tab label="Logout" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1"><Dashboard/></TabPanel>
            <TabPanel value="2"><Orders/></TabPanel>
            <TabPanel value="3"><Downloads/></TabPanel>
            <TabPanel value="4"><Addresses/></TabPanel>
            <TabPanel value="5"><AccountDetails/></TabPanel>
            <TabPanel value="6"><Logout/></TabPanel>
          </TabContext>
        </Box>
     </div>
     <Footer/>

    </>
  )
}

export default Account