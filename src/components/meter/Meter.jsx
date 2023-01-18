import React from 'react'
import {Box, Typography} from '@mui/material'
import './meter.css'
import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material'

const Meter = ({N}) => {

  return (
    <Box
      display='flex'
      flexDirection='column'
      backgroundColor='black'
      maxWidth='30%'
      maxHeight='40%'
      minHeight='160px'
      ml='5%'
      color='white'
      p='5px 10px'
    >
      <Typography fontSize='12px' textAlign='right'>Измеритель</Typography>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        border='2px solid grey'
        height='100%'
        p='5px 10px'
      >
        <Typography
          height='30%'
          color='red'
          backgroundColor='rgb(100, 0, 0)'
          fontFamily='Digitals, sans-serif'
          fontSize='25px'
          display='flex'
          alignItems='center'
          justifyContent='right'
          p='0px 10px'
        >
          -
        </Typography>
        <Typography
          height='30%'
          color='rgb(0, 255, 0)'
          backgroundColor='darkgreen'
          fontFamily='Digitals, sans-serif'
          fontSize='25px'
          display='flex'
          alignItems='center'
          justifyContent='right'
          width='50%'
          p='0px 10px'
        >
          {N}
        </Typography>
        <Box display='flex'>
          <Box border='1px solid white' mr='10px' display='flex' alignItems='center' justifyContent='center'>
            <KeyboardDoubleArrowUp sx={{color: 'white', fontSize: '20px'}} />
          </Box>
          <Box Box border='1px solid white' mr='10px' display='flex' alignItems='center' justifyContent='center'>
            <KeyboardDoubleArrowDown sx={{color: 'white', fontSize: '20px'}} />
          </Box>
        </Box>
      </Box>
      <Typography fontSize='12px'>TPM200</Typography>
    </Box>
  )
}

export default Meter