import React, { useEffect, useState } from 'react'
import './AwaitingList.css'
import DcSidebar from './DcSidebar'
import DcDashNav from "./DcDashNav"
import {motion} from 'framer-motion/dist/framer-motion'
import AwaitingTable from '../TABLE LISTS/AwaitingTable/AwaitingTable'
import { useParams } from 'react-router-dom'

const AwaitingList = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true);


  useEffect(()=>{
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: "GET",
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    }

    console.log(token)
  
    fetch("/patients/appoint", requestOptions)
      .then(res => {
        setLoading(true)
        res.json()
      })
      .then((resJson)=>{
        setData(resJson)
        setLoading(false)
      });
  }
  ,[])
  return (
    loading?<div>...loading...</div>:
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
      <div className='D-d-g'>
        <DcSidebar/>
        <div className='Dashboardcontainer'>
        <DcDashNav/>
        <div className=''>
          <AwaitingTable data={data}/>
        </div>
        </div>
        {/* <MainDash/> */}
      </div>
      
    </motion.div>
  )
}

export default AwaitingList;