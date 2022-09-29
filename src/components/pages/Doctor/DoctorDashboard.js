import React, {useEffect, useState, Component} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import MainDash from '../../../components/pages/Admin/MainDash'
import DcSidebar from '../../../components/pages/Doctor/DcSidebar'
import Calendar from 'react-calendar';
import DcDashNav from "./DcDashNav"
import DcWidget from './DcWidget'
import Clock from '../Clock'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import rendrIfo from './renderInfo'
import { logout, useAuth } from '../../../auth'
// import { logout } from '../../../auth'
import Skeleton from '../../Skeleton'
import DoctorLogin from './DoctorLogin'
import 'react-calendar/dist/Calendar.css'

const DoctorDashboard=()=>{
  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const  [data, setData] = useState()
  const [id, setId] = useState()
  const [isloading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const [logged] = useAuth()
  const [state, setState] = useState([0,0])
  const [value, onChange] = useState(new Date());
  // const [isloading, setIsLoading] = useState(true)
  
    const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
    
   
    }
  
  
   
useEffect(()=>{

  console.log(token)
  if(location.state){
  fetch(`/user/user/${location.state.id}`, requestOptions)
    .then(res =>
      {
        setIsLoading(true)
        if (res.status===200)
        {
          return res.json()
        }
        else if(res.status == 401){
          logout(token)
          navigate("/DoctorLogin")
          console.log("Your token has expired, pleae login again")
        }
      return res.json()
    })
    .then(data=>{
      console.log(data)
      setData(data)
      setIsLoading(false)
    })
  
  }else{
    setIsLoading(false)
  }
    
    // console.log(state)
},[])


  return (isloading?<Skeleton type="sidebar"/> :
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='D-d-g'>
    
    <DcSidebar data ={data}/>
        <div className='Dashboardcontainer'>
        <DcDashNav/>
        <div className='widgets'>
        <Link to={{
          pathname:"/DoctorDashboard/Patient",
          state:data
        }}>
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