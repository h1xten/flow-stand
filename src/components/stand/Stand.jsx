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
  const warningLight = useSelector(state => state.warningLight)

  return (
    <div className='stand'>
      <Box
        display='flex'
        position='relative'
        minWidth='40vw'
        minHeight='65vh'
        mb='5vh'
        borderRadius='5px'
        // border='1px solid black'
        boxShadow='0px 0px 35px 12px rgba(2, 2, 2, 0.2)'
        overflow='hidden'
        sx={{
          perspective: '1000px',
          transform: 'translateZ(-100px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <FrontStand N={N} />
        <div className="topside"></div>
        <div className="bottomside"></div>
        <div className="leftside"></div>
        <div className="rightside"></div>
        <Box 
          className={warningLight ? 'warning_light w_on' : 'warning_light'}
        >
        </Box>
        <BackStand />
      </Box>
    </div>
  )
}

export default Stand