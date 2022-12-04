import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setN, setWater } from '../../store/standSlice/standSlice'

const PumpButtons = ({N}) => {
  const dispatch = useDispatch()

  const handleUp = () => {
    if(N >= 80) return
    dispatch(setN(N+20))
  }
  const handleDown = () => {
    if(N <= 0) return
    dispatch(setN(N-20))
  }

  const handleStart = () => {
    dispatch(setWater(true))
  }

  const handleStop = () => {
    dispatch(setWater(false))
  }

  return (
    <Box
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      maxWidth='40%'
      maxHeight='33%'
      minHeight='33%'
    >
      <Button variant="contained" size='small' onClick={handleStart}>Пуск</Button>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
        height='100%'
      >
        <IconButton  onClick={handleUp} sx={{backgroundColor: '#1565C0', color: 'white', '&:hover': { backgroundColor: 'darkblue'}}}>
          <KeyboardArrowUp />
        </IconButton>
        
        <IconButton color='primary' onClick={handleDown} sx={{backgroundColor: '#1565C0', color: 'white', '&:hover': { backgroundColor: 'darkblue'}}} >
          <KeyboardArrowDown />
        </IconButton>
      </Box>
      <Button variant="contained" size='small' onClick={handleStop}>Сброс</Button>
    </Box>
  )
}

export default PumpButtons