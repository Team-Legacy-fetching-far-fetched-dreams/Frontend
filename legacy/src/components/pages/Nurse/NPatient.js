import React from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Clock from '../Clock'
import NSidebar from '../../../components/pages/Nurse/NSidebar'
import NDashNav from "./NDashNav"
import VitalsForm from '../TABLE LISTS/Vitals/VitalsForm'
const NPatient = () => {
  return (
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <NSidebar/>
        <div className='Dashboardcontainer'>
        <NDashNav/>
        <div className=''>
        <VitalsForm/>
        </div>
        <div>
          <Clock />
        </div>
        </div>
    </div> 
</motion.div>
  )
}

export default NPatient