import React from 'react'
import './LandingPage.css'
import NavBar from './Navbar'
import Home from './Home'
import {motion} from 'framer-motion/dist/framer-motion'

const LandingPage = () => {
  return (
    <motion.div className='main'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    
    >
       <div className="LGlass">
        
          <NavBar/>
              <Home/>
         </div>
    </motion.div>
  )
}

export default LandingPage