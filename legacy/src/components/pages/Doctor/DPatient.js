import React from 'react'
import './DPatient.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'

const data = [
    {
    patient_id:'1',
    surname: "Essuman",
    other_names:'Godsaves',
    gender: "Male"
    },
    {
       patient_id:'2',
    surname: "Larbi",
    other_names:'Samuel',
    gender: "Male"
    },
    {
       patient_id:'3',
    surname: "Baissie",
    other_names:'Francis',
    gender: "Male"
    },
    {
       patient_id:'4',
    surname: "Akyeampong",
    other_names:'Barden',
    gender: "Male"
    },
    {patient_id:'5',
     surname: "Marfo",
    other_names:'Nana',
    gender: "Male"},
     
    {patient_id:'6',
    surname: "Emma",
   other_names:'Kusi',
   gender: "Male"} ,
  
   {patient_id:'7',
    surname: "Jacob",
   other_names:'Jaay',
   gender: "Male"} ,
  
   {patient_id:'8',
    surname: "Serebour",
   other_names:'Kelvin',
   gender: "Male"} ,
  
   {patient_id:'9',
    surname: "Gberbie",
   other_names:'Emma',
   gender: "Male"} 
  ]
const DPatient = () => {
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