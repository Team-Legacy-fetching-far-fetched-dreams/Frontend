import React,{useState, useEffect, Component} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import Calendar from 'react-calendar';
import Clock from '../Clock'
import AdDashNav from "./AdDashNav"
import Widget from './Widget'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { logout, useAuth} from '../../../auth'
import Skeleton from '../../Skeleton'
import AdminLogin from './AdminLogin'


const AdminDashboard=() => {
 const  [data, setData] = useState()
 const [id, setId] = useState()
 const [isloading, setIsLoading] = useState(true)
 const navigate = useNavigate()
 const location = useLocation()
 const [value, onChange] = useState(new Date());
//  const [logged] = useAuth()

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

  console.log(location)
  if(location.state){
  fetch(`https://legacy-healthcare-services.herokuapp.com/user/user/${location.state.id}`, requestOptions)
    .then(res => 
      {
        setIsLoading(true)
      if (res.status===200)
      {
        return res.json()
      }
      else if(res.status == 401){
        logout(token)
        navigate("/AdminLogin")
        console.log("Your token has expired, pleae login again")
      }
      return res.json()
      })
    .then(data=>{if (data){
      console.log(data)
      setData(data)
      setIsLoading(false)
      
    }
  })

  }
  else{
    setIsLoading(false)
    // navigate('/AdminLogin')
  }
  console.log(data)
  console.log("ouh")

    
}, [])

  



  return (isloading?<Skeleton type="sidebar"/> :
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <div className='A-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav data={data}/>
        <div className='widgets'>
          <Link to="/AdminDashboard/Doctor">
          <Widget type ="doctor"/>
          </Link>
          <Link to="/AdminDashboard/Nurse">
          <Widget type="nurse"/>
          </Link>
          <Link to="/AdminDashboard/Patient">
          <Widget type = "patient"/>
          </Link>
        </div>
        <div>
       <Calendar onChange={onChange} value={value} />
        <Clock />
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>)
}
export default AdminDashboard