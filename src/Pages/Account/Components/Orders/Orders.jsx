import React from 'react'
import './Orders.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

function createData(ORDERNUMBER, DATE, STATUS, TOTAL, ACTIONS) {
  return { ORDERNUMBER, DATE, STATUS, TOTAL, ACTIONS };
}



const Orders = () => {
   
 const rows = [
  createData(7643980998990, 'October 8,2021', 'Delivered', '$ 105', 'View Order'),
  createData(943980998990, 'October 8,2021', 'Processing', '$ 100', 'View Order'),
  createData(879980998990, 'October 8,2020', 'Delivered', '$ 65', 'View Order'),
];
  
  return (
    <div className='orders-page'>
      <div className='no-order'>
          <p>No order has been made yet.</p>
          <h4>BROWSE PRODUCT</h4>
      </div>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead>
            <TableRow>
              <TableCell>ORDERNUMBER</TableCell>
              <TableCell align="right">DATE</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">TOTAL</TableCell>
              <TableCell align="right">ACTIONS</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ORDERNUMBER}>
              <TableCell component="th" scope="row">
                {row.ORDERNUMBER }
              </TableCell>
              <TableCell align="right">{row.DATE}</TableCell>
              <TableCell align="right">{row.STATUS}</TableCell>
              <TableCell align="right">{row.TOTAL}</TableCell>
              <TableCell align="right"><Link to="/vieworder">{row.ACTIONS}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
   
    </div>
  )
}

export default Orders