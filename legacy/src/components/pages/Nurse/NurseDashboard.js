import React from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import NDashNav from "./NDashNav"
import NWidget from './NWidget'
import {Link} from 'react-router-dom'


const NurseDashboard = () => {

 
  return (
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <Sidebar/>
        <div className='Dashboardcontainer'>
        <NDashNav/>
        <div className='widgets'>
        <Link to="/AdminDashboard/Patient">
          <NWidget type = "patient"/>
          </Link>
          <Link to="/AdminDashboard/Nurse">
          <NWidget type="nurse"/>
          </Link>
        </div>
        </div>
    </div> 
</motion.div>
    // <div className='N-m'>

    // <div className='N-g'>
    //  </div>
    // </div>
  )
  }
export default NurseDashboard