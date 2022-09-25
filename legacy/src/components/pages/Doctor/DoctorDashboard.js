import React, {useEffect} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import Clock from '../Clock'
import {Link} from 'react-router-dom'

const DoctorDashboard = () => {

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const {data} = localStorage.getItem('DATA');
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
    })

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
        </div>
        </div>
    </div> 
</motion.div>
  )
}

export default DoctorDashboard