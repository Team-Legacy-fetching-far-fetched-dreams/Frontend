import React from 'react'
import './DPatient.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'

const DPatient = () => {
  return (
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}

    >
      <div className='D-d-g'>
        <DcSidebar/>
        <div className='Dashboardcontainer'>
        <DcDashNav/>
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

export default DPatient