import React, {useEffect, useState, Component} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import MainDash from '../../../components/pages/Admin/MainDash'
import {Link, useNavigate} from 'react-router-dom'
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import Calendar from 'react-calendar';
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import Clock from '../Clock'
import rendrIfo from './renderInfo'
import { logout } from '../../../auth'
import DoctorLogin from './DoctorLogin'
import 'react-calendar/dist/Calendar.css'

const DoctorDashboard=()=>{
  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const [state, setState] = useState([0,0])
  const [value, onChange] = useState(new Date());
  
  useEffect(() => {
    const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
    
   
    }
  
  
   


  console.log(token)

  fetch('/user/users', requestOptions)
    .then(res =>
      {
        if (res.status===200)
        {

          return res.json()
        }
        else if (res.status == 401){
          logout(token)
          // navigate('/DoctorLogin')
        }
        else if (res.status===402){
        }
      
      res.json()
    })
    .then(data=>{
      console.log(data)})
    
    
    
    // console.log(state)
    

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
        <div>
          <Clock />
          <Calendar onChange={onChange} value={value} />
        </div>
        </div>
    </div> 
</motion.div>
  )
}


export default DoctorDashboard