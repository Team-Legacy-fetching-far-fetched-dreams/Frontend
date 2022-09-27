import React, {useEffect, useState, Component} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import MainDash from '../../../components/pages/Admin/MainDash'
import {Link, useNavigate} from 'react-router-dom'
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import Clock from '../Clock'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import rendrIfo from './renderInfo'
import { logout } from '../../../auth'
import DoctorLogin from './DoctorLogin'

const DoctorDashboard=()=>{
  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const  [data, setData] = useState()
  const [id, setId] = useState()
  const [isloading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  
  useEffect(() => {
    const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
    
   
    }
  
  
   


  console.log(token)
  if (token){
  fetch(`/user/users${location.state.id}`, requestOptions)
    .then(res =>
      {
        if (res.status===200)
        {

          return res.json()
        }
        else if(res.status == 401){
          logout(token)
          navigate("/DoctorLogin")
          console.log("Your token has expired, pleae login again")
        }
        else if (res.status===402){
        }
      
      res.json()
    })
    .then(data=>{
      console.log(data)
      setData(data)
      setIsLoading(false)
    })
    
  }else{
    navigate('/AdminLogin')
  }
    
    // console.log(state)
    

}, []);
  return (isloading?<div className='offers'>...LOADING...</div>:
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
          <div></div>
        </div>
        </div>
    </div> 
</motion.div>
  )
}


export default DoctorDashboard