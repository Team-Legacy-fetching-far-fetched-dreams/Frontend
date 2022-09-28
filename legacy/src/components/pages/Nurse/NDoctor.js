import React from 'react'
import './NDoctor.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Clock from '../Clock'
import NSidebar from '../../../components/pages/Nurse/NSidebar'
import NDashNav from "./NDashNav"
import NWidget3 from './NWidget3'
import ListOfAllEmployees from './'



const NDoctor = () => {
  return (
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <NSidebar/>
        <div className='Dashboardcontainer2'>
        <NDashNav/>
        <div className=''>
        <div className='NWidgets3'>
          <NWidget3/>
          <NWidget3/>
        
        </div>
        </div>
        
        <div>
          <Clock />
        </div>
        <Table1/>
        
        </div>
    </div> 
</motion.div>
  )
}

export default NDoctor