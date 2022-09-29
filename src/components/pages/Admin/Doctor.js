import React, {Component, useEffect, useState} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'
import AdminLogin from './AdminLogin'
import { logout } from '../../../auth'


import Clock from '../Clock'
// import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link,useLocation} from 'react-router-dom'



const Doctor = () => {

  const  [state, setState] = useState()
  const [isLoading, setLoading]  = useState()
 

  
 useEffect(() =>{

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
    const requestOptions = {
      method: "GET",
      header : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }
    
    fetch("/user/doctors", requestOptions)
    .then(res => {
      if(res.status===200){
        setLoading(true)
        return res.json()
      }
      else if (res.status === 401){
        logout(token)
      }
      res.json()
    })
    .then((resJson)=>{
        setState(resJson)
        console.log(resJson)
        setLoading(false)
    })

 },[])
    
  


  return (state?
    <motion.div className='A-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='A-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
      
          
          {!isLoading? <ListOfSpecEmployee data={state} />:<div>loading</div>}
        

        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>:<div>...LOADING...</div>
  )
}


export default Doctor