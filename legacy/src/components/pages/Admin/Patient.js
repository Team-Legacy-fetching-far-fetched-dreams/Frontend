import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import {motion} from 'framer-motion/dist/framer-motion'

const Patient = () => {
  return (
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='A-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        <div className=''>
         
        </div>
        </div>
        <div>
          <Clock />
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
  )
}

export default Patient