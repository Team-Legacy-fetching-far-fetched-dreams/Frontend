import React,{useState, Component} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import Widget from './Widget'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { logout,} from '../../../auth'
import AdminLogin from './AdminLogin'

const AdminDashboard=() => {
 const  [data, setData] = useState()
 const [isloading, setIsLoading] = useState(true)
 const navigate = useNavigate()
 const location = useLocation()

 const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  
  // const navigate = useNavigate()
  const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
    
  }





  


useState(() => {


  if(token){
  fetch('/user/users', requestOptions)
    .then(res => 
      {
      if (res.status===200)
      {
        return res.json()
      }
      else if(res.status == 401){
        logout(token)
        navigate("/AdminLogin")
      }
      return res.json()
      })
    .then(data=>{
      console.log(data)
      setData(data)
      setIsLoading(false)
      
    })

  }else{
    navigate('/AdminLogin')
  }
  console.log(location)
},[])
    
  

  



  return (isloading?<div>...LOADING...</div>:
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div className='A-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        <div className='widgets'>
          <Link to="/AdminDashboard/Doctor">
          <Widget type ="doctor"/>
          </Link>
          <Link to="/AdminDashboard/Nurse">
          <Widget type="nurse"/>
          </Link>
          <Link to="/DoctorDashboard/Patient">
          <Widget type = "patient"/>
          </Link>
        </div>
        <div>
          <Clock />
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>)
}
export default AdminDashboard