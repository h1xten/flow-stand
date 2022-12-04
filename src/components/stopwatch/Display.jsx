import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Display = ({time}) => {

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      fontSize='24px'
      padding='5px'
      borderRadius='25px'
      border='1px solid black'
    >
      {
        Object.entries(time).map(([key, value]) => (
          <>
            <Box
              key={key}
              display='flex'
              justifyContent='center'
              alignItems='center'
              minWidth='30px'
              fontFamily='Digitals, sans-serif'
              m='0'
              p='0'
            >
              {value >= 10 ? value : '0' + value}
            </Box>
            <Typography>
              {key !== 'ms' && ':'}
            </Typography>
          </>
        ))
      }
    </Box>
  )
}

export default Display