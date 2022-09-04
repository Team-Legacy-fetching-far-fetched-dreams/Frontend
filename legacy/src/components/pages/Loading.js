import React from 'react'
import './Loading.css'

import Logo from '../../imgs/Log.png'
import LogoTitle from '../../imgs/title.png'
import {motion} from 'framer-motion/dist/framer-motion'

const Loading = () => {
  return (
    <motion.div className = "head"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div>
        <img src={Logo} alt="" className = "logo"></img>
       </div>
       <div>
        <img src={LogoTitle} alt="" className = "title"></img>
       </div>
    </motion.div>
  )
}

export default Loading