import React from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import NSidebar from '../../../components/pages/Nurse/NSidebar'
import NDashNav from "./NDashNav"
import NWidget from './NWidget'
import Clock from '../Clock'
import {Link} from 'react-router-dom'
import Table2 from './Table2/Table2'
import RightSide from './RightSide/RightSide'




const NurseDashboard = () => {

 
  return (
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
     
    <div className='N-d-g'>
      
    <NSidebar/>
        <div className='Dashboardcontainer3'>
        <NDashNav/>
        <div className='widgets'>
        <Link to="/NurseDashboard/Patient">
          <NWidget type = "patient"/>
          </Link>
          <Link to="/NurseDashboard/Doctor">
          <NWidget type="doctor"/>
          </Link>
          <div className='right23'>
          <RightSide/>
          </div>

        </div>
      
    
        <div>
          <Clock/>
        </div>
        
       
        </div>
        
    </div> 
</motion.div>

  )
}

export default NurseDashboard