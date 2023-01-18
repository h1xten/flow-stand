import { Box } from '@mui/material'
import React from 'react'
import Stand from '../../components/stand/Stand'
import Stopwatch from '../../components/stopwatch/Stopwatch'
import Tank from '../../components/tank/Tank'
import './homepage.css'

const Homepage = () => {

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