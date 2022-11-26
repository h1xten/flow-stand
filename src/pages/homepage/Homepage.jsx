import React, {useState} from 'react'
import Stand from '../../components/stand/Stand'
import Tank from '../../components/tank/Tank'
import './homepage.css'

const Homepage = () => {
  const [N, setN] = useState(0)
  const [isStart, setIsStart] = useState(false)

  const dur = N === 0 ? 5
              : N === 20 ? 20
              : N === 40 ? 10 
              : N === 60 ? 2 
              : N === 80 ? 50 
              : 5
              // const dur = N === 0 ? 25 
              // : N === 20 ? 437
              // : N === 40 ? 345.6 
              // : N === 60 ? 298.6 
              // : N === 80 ? 273.2 
              // : 25

  return (
    <div className='homepage'>
      <Stand N={N} setN={setN} isStart={isStart} setIsStart={setIsStart} />
      <Tank N={N} dur = {dur} isStart={isStart} />
    </div>
  )
}

export default Homepage