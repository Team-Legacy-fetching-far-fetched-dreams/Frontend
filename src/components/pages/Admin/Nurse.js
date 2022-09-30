import React, {Component, useState, useEffect} from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import ListOfSpecEmployee from '../TABLE LISTS/ListOfDoctors/ListOfSpecEmployee'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link} from 'react-router-dom'
import { logout } from '../../../auth'
import Cliploader from 'react-spinners/ClipLoader'
import ListOfNurses from '../TABLE LISTS/ListOfDoctors/listofNurse'
const Nurse = () => {

  const  [state, setState] = useState()
  const [isLoading, setLoading]  = useState()
  
  useEffect(() =>{
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }

    fetch('https://legacy-healthcare-services.herokuapp.com/user/nurses', requestOptions)
    .then(res =>{
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
    });
  },[])
 
  return (state?
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='N-d-g'>
        <Sidebar/>
        <div className='Dashboardcontainer'>
        <AdDashNav/>
        
        {!isLoading ? <ListOfNurses data={state} />:<div><Cliploader size={30} color="blue" className='spinner'/></div>}
       
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>:<div><Cliploader size={30} color="blue" className='spinner'/></div>
  )

}

export default Nurse