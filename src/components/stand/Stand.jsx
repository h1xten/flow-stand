import React from 'react'
import Meter from '../meter/Meter'
import PumpButtons from '../pumpButtons/PumpButtons'
import './stand.css'

const FrontStand = ({N, setN, isStart, setIsStart}) => {
  return (
    <div className="frontstand">
      <Meter N={N} />
      <PumpButtons N={N} setN={setN} isStart={isStart} setIsStart={setIsStart} />
    </div>
  )
}

const BackStand = () => {
  return (
    <div className="backstand">back</div>
  )
}

const Stand = ({N, setN, isStart, setIsStart}) => {

  return (
    <div className='stand'>
      <FrontStand N={N} setN={setN} isStart={isStart} setIsStart={setIsStart} />
      <BackStand />
    </div>
  )
}

export default Stand