import React from 'react'
<<<<<<< HEAD
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'
=======
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
>>>>>>> 6fff3f964da294c0d64cd0ab838ee5857a6aace3

const Patient = () => {
  

  const data = [
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    },
    {
      public_id:1,
      username:';sdiofh',
      other_name:"spdion",
      gender : "M"
    }
  ]
  

  return (
<<<<<<< HEAD
    <div>Patient

    <ListOfSpecEmployee data={data}/>
    </div>
    // <div>

    // </div>
   
=======
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
         
        </div>
        </div>
        <div>
          <Clock />
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
>>>>>>> 6fff3f964da294c0d64cd0ab838ee5857a6aace3
  )
}

export default Patient