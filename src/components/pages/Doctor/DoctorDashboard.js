import React, {useEffect, useState, Component} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../Admin/Sidebar'
import MainDash from '../Admin/MainDash'
import DcSidebar from './DcSidebar'
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
import Dash2 from '../../../imgs/Dash2.png'


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
    fetch(`https://legacy-healthcare-services.herokuapp.com/user/user/${location.state.id}`, requestOptions)
      .then(res =>
        {
          if (res.status===200)
          {
  
            return res.json()
          }
          else if(res.status == 401){
            logout(token)
            navigate("/DoctorLogin")
            console.log("Your token has expired, please login again")
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
      // navigate('/DoctorLogin')
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
        <Link to ={{
              pathname:'/DoctorDashboard/Nurse',
              state:data
            }}>
          <DcWidget type = "nurse"/>
          </Link>
        <Link to={{
          pathname:"/DoctorDashboard/Patient",
          state:data
        }}>
          <DcWidget type = "patient"/>
          </Link>
          <Link to ={{
              pathname:'/DoctorDashboard/AwaitingList',
              state:data
            }}>
          <DcWidget type = "awaiting patients"/>
          </Link>
          
        </div>
        <div>
        <img src={Dash2} alt='' className='dash2'></img>
          <Clock />
          <Calendar onChange={onChange} value={value} />
        </div>
        </div>
    </div> 
</motion.div>
  )
}


export default DoctorDashboard