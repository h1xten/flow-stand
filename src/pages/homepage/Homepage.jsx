import { Box } from '@mui/material'
import React from 'react'
import Stand from '../../components/stand/Stand'
import Stopwatch from '../../components/stopwatch/Stopwatch'
import Tank from '../../components/tank/Tank'
import './homepage.css'

const Homepage = () => {
              // const dur = N === 0 ? 25 
              // : N === 20 ? 437
              // : N === 40 ? 345.6 
              // : N === 60 ? 298.6 
              // : N === 80 ? 273.2 
              // : 25

  return (
    <Box
      className='homepage'
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Stand />
      <Tank />
      <Stopwatch />
    </Box>
  )
}

export default Homepage