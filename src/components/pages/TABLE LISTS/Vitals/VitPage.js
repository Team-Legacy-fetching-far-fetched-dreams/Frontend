import React, { Component, useEffect, useState} from 'react'
import '../../Doctor/DPatient.css'
import NSidebar from '../../Nurse/NSidebar'
import NDashNav from '../../Nurse/NDashNav' 
import Clock from '../../Clock'
import {motion} from 'framer-motion/dist/framer-motion'
import Vitals from './Vitals'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Cliploader from 'react-spinners/ClipLoader'


const VitPage = () =>{

  const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const { id } = useParams()
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    }
  }

  useEffect(()=>{

    fetch(`https://legacy-healthcare-services.herokuapp.com/patients/vital/${id}`, requestOptions)
    .then(res => {
        setIsLoading(true)
        return res.json()
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
        {/* <NSidebar /> */}
        <div className='Dashboardcontainer'>
        {/* <DcDashNav func = {this.setState({data: this.state.searchObj.data})}/> */}
        <NDashNav/>
        <Button as="sub" className="btn" id = "dback-btn" onClick={() => navigate(-1)}>Back</Button>
        <div className='bod'>
        <div>
         {isLoading ? <div><Cliploader size={30} color="blue" className='spinner'/></div>:<Vitals data = {data}/>}
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