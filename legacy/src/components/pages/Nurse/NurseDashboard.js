import React,{useState} from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import NSidebar from '../../../components/pages/Nurse/NSidebar'
import NDashNav from "./NDashNav"
import NWidget from './NWidget'
import Calendar from 'react-calendar';
import Clock from '../Clock'
import {Link} from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'

const NurseDashboard = () => {
  const [value, onChange] = useState(new Date());
 
  return (
    // <div className='N-m'>
    // <div className='N-g'>
    //  </div>
    // </div>
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <NSidebar/>
        <div className='Dashboardcontainer'>
        <NDashNav/>
        
        <div className='widgets'>
        <Link to="/NurseDashboard/Patient">
          <NWidget type = "patient"/>
          </Link>
          <Link to="/NurseDashboard/Doctor">
          <NWidget type="doctor"/>
          </Link>
        </div>
        <div>
          <Clock/>
          <Calendar onChange={onChange} value={value} />
        </div>
        </div>
    </div> 
</motion.div>

  )
}

export default NurseDashboard