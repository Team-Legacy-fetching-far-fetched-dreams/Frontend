import React, {useState, useEffect} from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import NSidebar from './NSidebar'
import NDashNav from "./NDashNav"
import NWidget from './NWidget'
import Calendar from 'react-calendar';
import Clock from '../Clock'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { logout, useAuth } from '../../../auth'


import 'react-calendar/dist/Calendar.css'
import Skeleton from '../../Skeleton'

const NurseDashboard = () => {
  const  [data, setData] = useState()
  const [id, setId] = useState()
  // const [isloading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const { logged } = useAuth()
  const [value, onChange] = useState(new Date());
  const [isloading, setIsLoading] = useState(true)
  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  // const pid = location.state.id
   
 
   // const navigate = useNavigate()
   const requestOptions = {
     method: "GET",
     headers : {
       'content-type': 'application/json',
       'Authorization': `Bearer ${JSON.parse(token)}`
     }
     
   }
 
 
 
 
 
   
  useEffect(()=>{
 

 
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
         navigate("/NurseLogin")
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
    //  navigate('/NurseLogin')
    setIsLoading(false)
   }
   console.log(data)

 

}, [])
 
  return (isloading?<Skeleton type="sidebar"/> :
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