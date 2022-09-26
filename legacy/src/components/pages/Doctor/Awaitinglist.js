import React from 'react'
import './AwaitingList.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import VitalsForm from '../Nurse/Vitals/VitalsForm'

const AwaitingList = () => {
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
        {/* <MainDash/> */}
      </div>
      
    </motion.div>
  )
}

export default AwaitingList;