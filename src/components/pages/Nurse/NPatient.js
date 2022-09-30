import React, {Component, useEffect, useState} from 'react'
import './NurseDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import NSidebar from './NSidebar'
import NDashNav from "./NDashNav"
import ListOfRegPatients from '../TABLE LISTS/Patient/ListOfRegPatients'
import { logout } from '../../../auth'
import Cliploader from 'react-spinners/ClipLoader'


const NPatient = () => {
 

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


   console.log(token)

  fetch('https://legacy-healthcare-services.herokuapp.com/patients/', requestOptions)
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
    <motion.div className='N-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='N-d-g'>
    <NSidebar/>
        <div className='Dashboardcontainer'>
        <NDashNav/>
        <div className=''>
        {!isLoading? <ListOfRegPatients data={state} />:<div><Cliploader size={30} color="blue" className='spinner'/></div>}

        </div>
        </div>
    </div> 
</motion.div>:<div><Cliploader size={30} color="blue" className='spinner'/></div>
  )
}


export default NPatient