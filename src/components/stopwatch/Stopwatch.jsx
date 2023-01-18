import { ArrowRight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStopwatch } from '../../store/standSlice/standSlice'
import Display from './Display'

const Stopwatch = () => {
  const dispatch = useDispatch()
  const [time, setTime] = useState({h: 0, m: 0, s: 0, ms: 0})
  const [interv, setInterv] = useState()
  // stopwatch status 0 - not started 1 - started 2 - stopped
  const stopwatch = useSelector(state => state.stopwatch)

  const start = () => {
    dispatch(setStopwatch(1))
    run()
    setInterv(setInterval(run, 10))
  }

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

  const run = () => {
    if(updatedM === 60 ){
      updatedH++
      updatedM = 0
    }
    if(updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    if(updatedMs === 100) {
      updatedS++
      updatedMs = 0
    }
    updatedMs++
    return setTime({h: updatedH, m: updatedM, s: updatedS, ms: updatedMs})
  }

  const stop = () => {
    clearInterval(interv)
    dispatch(setStopwatch(2))
  }

  const reset = () => {
    clearInterval(interv)
    dispatch(setStopwatch(0))
    setTime({h: 0, m: 0, s: 0, ms: 0})
  }

  const resume = () => start()

  return (
    <Box
      position='absolute'
      right='2rem'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      p='1rem'
      border='1px solid black'
      borderRadius='10px'
      minWidth='250px'
    >
      <Display time={time} />
      <Box
        display='flex'
        justifyContent= {stopwatch === 0 ? 'center' : 'space-between'}
        alignItems='center'
        m='15px 0px'
      >
        {stopwatch === 0 &&
          <Button variant="contained" size='small' onClick={() => start()}>Старт</Button>
        }
        { stopwatch === 1 &&
          <>
            <Button variant="contained" size='small' color='error' onClick={() => stop()}>Стоп</Button>
            <Button variant="contained" size='small' onClick={() => reset()}>Заново</Button>
          </>
        }
        { stopwatch === 2 &&
          <>
            <Button variant="contained" size='small' onClick={() => resume()}> <ArrowRight /> </Button>
            <Button variant="contained" size='small' onClick={() => reset()}>Заново</Button>
          </>
        }
      </Box>
      {/* <Box
        display='flex'
        flexDirection='column'
        p='0px 5px'
      >
        <Input 
          placeholder="Запустить при h: " 
          sx={{margin: '5px'}} 
          onChange={(e) => dispatch(setStopwatchStartFrom(e.target.value)) } 
          type='number'/>
          {startH}
        <Input 
          placeholder="Остановить при h: " 
          sx={{margin: '5px'}} 
          onChange={(e) => dispatch(setStopwatchEnd(e.target.value))} 
          type='number'/>
          {endH}
      </Box> */}
    </Box>
  )
}

export default Stopwatch