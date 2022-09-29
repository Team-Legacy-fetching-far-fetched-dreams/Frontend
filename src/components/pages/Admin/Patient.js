import React, { Component, useEffect, useState}  from 'react'
import './AdminDashboard.css'
import Sidebar from './Sidebar'
import AdDashNav from "./AdDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../../../auth'

const Patient =()=> {
  const  [state, setState] = useState()
  const [isLoading, setLoading]  = useState()
  const navigate = useNavigate()
 

  useEffect(() =>{
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }
  

  
    fetch("/patients/", requestOptions)
    .then(res => {
      if(res.status===200){
        setLoading(true)
        return res.json()
      }
      else if (res.status === 401){
        logout(token)
      }
      else{
        navigate(-1)
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
       

        <div className='createButton'>
            </div>
        {!isLoading ? <ListOfRegPatients data={state}/>:<div>loading</div>}
         <div>
        </div>
        </div>
       
       
        {/* <MainDash/> */}
      </div>
       
    </motion.div>:<div>...LOADING...</div>
  )
}

export default Patient
