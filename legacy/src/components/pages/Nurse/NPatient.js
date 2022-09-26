import React from 'react'
import './NPatient.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Clock from '../Clock'
import NSidebar from './NSidebar'
import NDashNav from "./NDashNav"
import NWidget2 from './NWidget2'
import Table from './Table/Table'




const NPatient = () => {
  return (
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <NSidebar/>
        <div className='Dashboardcontainer1'>
        <NDashNav/>
        <div className='NWidgets2'>
          <NWidget2/>
          <NWidget2/>
        </div>
        <div>
          <Clock />
        
        </div>
        <Table/>
        </div>
    </div> 
</motion.div>
  )
}

export default NPatient