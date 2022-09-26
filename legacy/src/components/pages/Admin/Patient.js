import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import Vitals from "../../pages/TABLE LISTS/Vitals/Vitals"

const data = [
    {
    patient_id:'1',
    temperature: "27F",
    height:'30m',
    blood_pressure: "271/93",
    weight: "54kg",
    keeper_id: "10",
    date_recorded: "20-09-22"
    },
    {
     patient_id:'2',
     temperature: "25F",
     height:'20m',
     blood_pressure: "271/93",
     weight: "54kg",
     keeper_id: "20",
     date_recorded: "20-09-22"
      }
     
  ]
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
          <Vitals data={data}/>
         <div>
        </div>
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

export default Doctor