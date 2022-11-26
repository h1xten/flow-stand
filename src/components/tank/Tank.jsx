import { AnimatePresence, motion, transform, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'
import './tank.css'

const Tank = ({N, dur, isStart}) => {

  const controls = useAnimation()

  const hh = document.querySelector('.water')
  console.log(hh ? hh.clientHeight : 'none')

  // useEffect(() => {
  //   controls.start({
  //     height: '100%',
  //     transition: {
  //       duration: dur
  //     }
  //   })
  // }, [N])

  useEffect(() => {
    controls.start({
      height: '100%',
      transition: {
        duration: dur,
      }
    })
  }, [N, isStart])

  console.log(isStart)

  return (
    <>
      <div className='tank'>
        <AnimatePresence>
          {isStart && 
            <motion.div
              custom={N}
              className='water'
              animate={controls}
            />
          }
        </AnimatePresence>
    </div>
 
    </>
  )
}

export default Tank