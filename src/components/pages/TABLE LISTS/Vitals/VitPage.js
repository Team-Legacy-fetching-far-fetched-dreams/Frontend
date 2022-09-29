import React, { Component, useEffect, useState} from 'react'
import '../../Doctor/DPatient.css'
import NSidebar from '../../Nurse/NSidebar'
import NDashNav from '../../Nurse/NDashNav' 
import Clock from '../../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import Vitals from './Vitals'
import { useParams } from 'react-router-dom'


const VitPage = () =>{

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const { id } = useParams
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
  }

  useEffect(()=>{

    fetch(`/patients/vitals//${id}`, requestOptions)
    .then(res => {
        setIsLoading(true)
        res.json()
    })
    .then((resJson)=>{
      setData(resJson)
      console.log(resJson)
      setIsLoading(false)
    });
  },[])
   return (
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}

    >
      <div className='D-d-g'>
        <NSidebar />
        <div className='Dashboardcontainer'>
        {/* <DcDashNav func = {this.setState({data: this.state.searchObj.data})}/> */}
        <NDashNav/>
        <div className=''>
        <div>
         {isLoading ? <div>...LOADING...</div>:<Vitals data = {data} id={id}/>}
      </div>
        </div>
        </div>
        <div>
          <Clock />
        </div>
        {/* <MainDash/> */}
      </div>
    </motion.div>
   ) 
}

export default VitPage