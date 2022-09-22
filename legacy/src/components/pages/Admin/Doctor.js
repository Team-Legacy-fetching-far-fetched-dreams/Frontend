import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import Widget from './Widget'
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfSpecEmployee from "../../pages/TABLE LISTS/ListOfDoctors/ListOfSpecEmployee"
const Doctor = () => {
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
        <ListOfSpecEmployee/>

        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
  )
}

export default Doctor