import React from 'react'
import './DPatient.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'

const DPatient = () => {

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
          <ListOfRegPatients data={data}/>
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

export default DPatient