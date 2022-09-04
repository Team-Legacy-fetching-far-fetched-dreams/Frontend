import React from 'react'
import './AboutUs.css'
import {motion} from 'framer-motion/dist/framer-motion'

const AboutUs = () => {
  return (
    <motion.div className='Ab-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
    <div className='Ab-g'>
      
      </div>
    </motion.div>
  )
}

export default AboutUs