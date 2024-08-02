import React from 'react'
import './Downloads.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ORDERNUMBER, DATE, STATUS, TOTAL, ACTIONS) {
  return { ORDERNUMBER, DATE, STATUS, TOTAL, ACTIONS };
}

const Downloads = () => {
  const rows = [
    createData(7643980998990, 'October 8,2021', 'Delivered', '$ 105', 'View Order | Download'),
    createData(943980998990, 'October 8,2021', 'Processing', '$ 100', 'View Order | Download'),
    createData(879980998990, 'October 8,2020', 'Delivered', '$ 65', 'View Order | Download'),
  ];
  return (
    <div className='downloads-page'>
      <div className='no-downloads'>
        <p>No downloads available yet.</p>
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
              <TableCell align="right">{row.ACTIONS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Downloads