import React, {useEffect, useState} from 'react'
import { AnimatePresence, motion, useAnimation, useMotionValue } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setWarningLight } from '../../store/standSlice/standSlice'

const Water = () => {
  const dispatch = useDispatch()
  const N = useSelector(state => state.N)
  const water = useSelector(state => state.water)
  const dur = useSelector(state => state.duration)

  const controls = useAnimation()
  const height = useMotionValue(0)

  const [heightNumber, setHeightNumber] = useState('0%')
  const [warning, setWarning] = useState(false)

  useEffect(() => {
    controls.start({
      height: '100%',
      transition: {
        ease: 'linear',
        duration: dur,
      }
    })
    if(!water) {
      controls.stop()
      height.set(0)

    }
  }) // prev dependenscies [N, water, warning] 



  useEffect(() => {
    height.onChange(latest => {
      latest.toLocaleString()
      if(latest !== 0 && latest.indexOf('.') !== -1) {
        latest = latest.slice(0, -4)
      }
      else if(latest !== 0 && latest === '100%') latest = '100'

      if(latest !== 0 && (latest.indexOf('59.') !== -1 || latest.indexOf('58.9') !== -1)) {
        controls.stop()
        setWarning(true)
        dispatch(setWarningLight(warning))
      }
      setHeightNumber(latest)
    })
  
  }) // prev dependenscies [height, warning]

  return (
    <AnimatePresence>
      {water &&
        <>
        <div className='water__number'>
          <p>
            {heightNumber &&
              heightNumber + ' см'
            }
          </p>
        </div>
        <motion.div
          style={{height}}
          custom={N}
          className='water'
          animate={controls}
        >
        </motion.div>
        </>
      }
    </AnimatePresence>
  )
}

export default Water