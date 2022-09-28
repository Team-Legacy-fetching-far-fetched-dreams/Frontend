import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'

const Doctor = () => {
  const data = [{
    patient_Id : '1',
    surname : "Baissie",
    other_names : "Francis",
    gender: "Male"
  },
  {
    patient_Id : '1',
    surname : "Baissie",
    other_names : "Francis",
    gender: "Male"
  },
  {
    patient_Id : '1',
    surname : "Baissie",
    other_names : "Francis",
    gender: "Male"
  },
  {
    patient_Id : '1',
    surname : "Baissie",
    other_names : "Francis",
    gender: "Male"
  }
  ]
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
          <ListOfSpecEmployee data={data}/>
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