import React from 'react'
import './meter.css'

const Meter = ({N}) => {

  let Q = (102.74 * Math.log(N) - 65.27).toFixed(2)

  if(N === 0) Q = '---'

  return (
    <div className='meter'>
      <p>N = {N}</p>
      <p>Q = {Q} </p>
      
    </div>
  )
}

export default Meter