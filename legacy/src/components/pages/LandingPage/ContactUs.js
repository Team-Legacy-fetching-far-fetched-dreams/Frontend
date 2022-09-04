import React from 'react'
import './ContactUs.css'
import {motion} from 'framer-motion/dist/framer-motion'

const ContactUs = () => {
  return (
    <motion.div className='C-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
    <div className='C-g'>
      
      </div>
    </motion.div>
  )
}

export default ContactUs