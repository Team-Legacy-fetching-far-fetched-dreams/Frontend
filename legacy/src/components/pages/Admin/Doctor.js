import React from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import Clock from '../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfSpecEmployees from "../../pages/TABLE LISTS/ListOfDoctors/ListOfSpecEmployee"

const data = [
    {
      public_id:'1',
      username: "Manu",
      other_names:'Godsaves',
      gender: "Male",
      surname: "kofi"
      },
      {
        public_id:'2',
        username: "Essuman",
        other_names:'Godsaves',
        gender: "Male",
        surname: "kofi"
        },
        {
          public_id:'1',
          username: "Manu",
          other_names:'Godsaves',
          gender: "Male",
          surname: "kofi"
          },
          {
            public_id:'1',
            username: "Manu",
            other_names:'Godsaves',
            gender: "Male",
            surname: "kofi"
            },
            {
              public_id:'1',
              username: "Manu",
              other_names:'Godsaves',
              gender: "Male",
              surname: "kofi"
              },
              {
                public_id:'1',
                username: "Manu",
                other_names:'Godsaves',
                gender: "Male",
                surname: "kofi"
                },
   
  ]
const Doctor = () => {
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
          <ListOfSpecEmployees data={data}/>
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