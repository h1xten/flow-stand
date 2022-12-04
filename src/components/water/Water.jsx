import React, {useEffect, useState} from 'react'
import { AnimatePresence, motion, useAnimation, useMotionValue } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setStopwatch } from '../../store/standSlice/standSlice'

const Water = () => {
  const dispatch = useDispatch()
  const N = useSelector(state => state.N)
  const water = useSelector(state => state.water)
  const dur = useSelector(state => state.duration)
  // stopwatch settings
  const startH = useSelector(state => state.stopwatchSettings.stopwatchStartFrom)
  const endH = useSelector(state => state.stopwatchSettings.stopwatchEnd)

  const controls = useAnimation()
  const height = useMotionValue(0)

  const [heightNumber, setHeightNumber] = useState('0%')
  const [warning, setWarning] = useState(false)

  useEffect(() => {
    controls.start({
      height: '100%',
      transition: {
        duration: dur,
      }
    })
    if(!water) {
      controls.stop()
      height.set(0)

    }
  }, [N, water, warning])


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
      }

      if(endH === Number(latest)) {
        dispatch(setStopwatch(2))
        console.log('STOPPED')
      }
      setHeightNumber(latest)
    })
  }, [height, warning])

  return (
    <AnimatePresence>
      {water &&
        <motion.div
          style={{height}}
          custom={N}
          className='water'
          animate={controls}
        >
          <div className='water__number'>
            {heightNumber &&
              heightNumber + ' см'
            }
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default Water