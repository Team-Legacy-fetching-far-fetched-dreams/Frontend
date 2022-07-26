import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import Widget from './Widget'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link} from 'react-router-dom'

const AdminDashboard = () => {
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
        <div className='widgets'>
          <Link to="/AdminDashboard/Nurse">
          <Widget type ="doctor"/>
          </Link>
          <Link to="/AdminDashboard/Patient">
          <Widget type="nurse"/>
          </Link>
          <Link to="/AdminDashboard/Analytics">
          <Widget type = "patient"/>
          </Link>
        </div>
        <div>
          <Clock />
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
  )
}

export default AdminDashboard