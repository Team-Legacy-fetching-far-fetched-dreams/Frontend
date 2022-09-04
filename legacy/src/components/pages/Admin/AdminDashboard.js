import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import MainDash from './MainDash'
import {motion} from 'framer-motion/dist/framer-motion'

const AdminDashboard = () => {
  return (
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='A-d-g'>
        <Sidebar/>
        <MainDash/>
      </div>
    </motion.div>
  )
}

export default AdminDashboard