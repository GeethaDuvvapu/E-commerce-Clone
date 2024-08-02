import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Country = () => {
  return (
    <>
    <Box sx={{ minWidth: 100 }}>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Country*
        </InputLabel>
        <NativeSelect
          defaultValue=""
          inputProps={{
            name: 'country',
            id: 'uncontrolled-native',
          }}
        > 
          <option value=""></option>
          <option value="">None</option>
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>London</option>
          <option value={10}>England</option>
          <option value={20}>NewZland</option>
          <option value={30}>Srilanka</option>
          <option value={10}>Singapore</option>
          <option value={20}>Dubai</option>
          {/* <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </NativeSelect>
      </FormControl>
    </Box>
    </>
  )
}

export default Country