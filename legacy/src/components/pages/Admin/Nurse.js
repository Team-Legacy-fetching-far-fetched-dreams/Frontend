import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfAllEmployees from '../TABLE LISTS/ListOfAllEmployees/ListOfAllEmployees'

const Nurse = () => {
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
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='N-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        <div className=''>
          <ListOfAllEmployees data={data}/>
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

export default Nurse