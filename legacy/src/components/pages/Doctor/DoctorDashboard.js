import React, {useEffect, useState} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import MainDash from '../../../components/pages/Admin/MainDash'
 
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import {Link} from 'react-router-dom'

const DoctorDashboard = () => {

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const {data} = localStorage.getItem('DATA');
  const [state, setState] = useState([0,0])
  useEffect(() => {
    const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    },
    
  }


  console.log(token)

  fetch('/user/users', requestOptions)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setState(data)
      
    })
    
    
    console.log(state)
    

}, []);
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
        <div className='widgets'>
        <Link to="/DoctorDashboard/Patient">
          <DcWidget type = "patient"/>
          </Link>
        </div>
        </div>
    </div> 
</motion.div>
  )
}

export default DoctorDashboard