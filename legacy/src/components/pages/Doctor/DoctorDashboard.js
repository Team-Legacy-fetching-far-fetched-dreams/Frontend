import React from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import {Link} from 'react-router-dom'

const DoctorDashboard = () => {
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
        <div className='widgets'>
        <Link to="/DoctorDashboard/Patient">
          <DcWidget type = "patient"/>
          </Link>
        </div>
        </div>
    </div> 
</motion.div>
  )
}

export default DoctorDashboard