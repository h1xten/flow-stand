import React from 'react'
import './pumpButtons.css'

const PumpButtons = ({N, setN, isStart, setIsStart}) => {

  const handleUp = () => {
    if(N >= 80) return
    setN(N+20)
  }
  const handleDown = () => {
    if(N <= 0) return
    setN(N-20)
  }

  const handleStart = () => {
    setIsStart(true)
  }

  const handleStop = () => {
    setIsStart(false)
  }

  return (
    <div className='pump_buttons'>
      <div className='start_btn'>
        <button className='btn' onClick={handleStart}>Пуск</button>
      </div>
      <div className='change_btns'>
        <button className='btn' onClick={handleUp}>Up</button>
        <button className='btn' onClick={handleDown}>Down</button>
      </div>
      <div className='reset_btn'>
        <button className='btn' onClick={handleStop}>Сброс</button>
      </div>
    </div>
  )
}

export default PumpButtons