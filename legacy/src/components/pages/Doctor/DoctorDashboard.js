import React from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
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
    <Sidebar/>
        <div className='Dashboardcontainer'>
        <DcDashNav/>
        <div className='widgets'>
        <Link to="/AdminDashboard/Patient">
          <DcWidget type = "patient"/>
          </Link>
          <Link to="/AdminDashboard/Nurse">
          <DcWidget type="nurse"/>
          </Link>
        </div>
        </div>
    </div> 
</motion.div>
  )
}

export default DoctorDashboard