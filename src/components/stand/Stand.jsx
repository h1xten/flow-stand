import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Meter from '../meter/Meter'
import PumpButtons from '../pumpButtons/PumpButtons'
import './stand.css'

const FrontStand = ({N}) => {
  return (
    <div className="frontstand">
      <Meter N={N} />
      <PumpButtons N={N} />
    </div>
  )
}

const BackStand = () => {
  return (
    <div className="backstand">
      <div className='backstand-1'>
        <div className="pchv"></div>
      </div>
      <div className='backstand-2'></div>
    </div>
  )
}

const Stand = () => {
  const N = useSelector(state => state.N)

  return (
    <div className='stand'>
      <Box
        display='flex'
        position='relative'
        minWidth='40vw'
        minHeight='65vh'
        mb='5vh'
        border='1px solid black'
        overflow='hidden'
        sx={{
          perspective: '1000px',
          perspectiveOrigin: 'center -5em',
          transformStyle: 'preserve-3d'
        }}
      >
        <FrontStand N={N} />
        <div className="topside"></div>
        <div className="botton"></div>
        <div className="leftside"></div>
        <div className="rightside"></div>
        <BackStand />
      </Box>
    </div>
  )
}

export default Stand