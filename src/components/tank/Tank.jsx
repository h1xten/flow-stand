import { Box } from '@mui/material'
import React from 'react'
import Water from '../water/Water'
import './tank.css'

const Tank = () => {

  return (
    <Box
      display='flex'
      minHeight='75vh'
    >
      <Box
        position='relative'
        className='tank'
        minWidth='15vw'
        minHeight='75vh'
        ml='1vw'
        overflow='hidden'
        boxShadow='0px 0px 35px 12px rgba(2, 2, 2, 0.2);'
        sx={{
          borderBottomLeftRadius: '3rem',
          borderBottomRightRadius: '3rem',
          
        }}
      >
        <div className="fronttank"></div>
        <Water />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        fontSize='16px'
      >
        <div className='ruler__number'>100</div>
        <div className='ruler__number'>90</div>
        <div className='ruler__number'>80</div>
        <div className='ruler__number'>70</div>
        <div className='ruler__number'>60</div>
        <div className='ruler__number'>50</div>
        <div className='ruler__number'>40</div>
        <div className='ruler__number'>30</div>
        <div className='ruler__number'>20</div>
        <div className='ruler__number'>10</div>
        <div className='ruler__number'>0</div>
      </Box>
    </Box>
  )
}

export default Tank