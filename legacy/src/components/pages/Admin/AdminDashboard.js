import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Calendar from '../../Calendar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import Widget from './Widget'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link} from 'react-router-dom'

const AdminDashboard = () => {

  const style = {
    position: "relative",
    margin: "50px auto"
  }
  
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
          <Link to="/AdminDashboard/Doctor">
          <Widget type ="doctor"/>
          </Link>
          <Link to="/AdminDashboard/Nurse">
          <Widget type="nurse"/>
          </Link>
          <Link to="/AdminDashboard/Patient">
          <Widget type = "patient"/>
          </Link>
        </div>
        <div>
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>   
          <Clock />
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
  )
}

export default AdminDashboard