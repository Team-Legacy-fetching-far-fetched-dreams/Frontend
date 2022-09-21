import React, {useEffect} from 'react'
import './DoctorDashboard.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Sidebar from '../../../components/pages/Admin/Sidebar'
import MainDash from '../../../components/pages/Admin/MainDash'
 

const DoctorDashboard = () => {

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
  const {data} = localStorage.getItem('DATA');
  useEffect(() => {
    const requestOptions = {
    method: "GET",
    headers : {
      'content-type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(token)}`
    },
    
  }


  console.log(token)

  fetch('/user/users', requestOptions)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
    })

}, []);
  return (
    <motion.div className='D-d-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='D-d-g'>
    <Sidebar/>
        <MainDash/>
        <h1>WELCOME {data}</h1>
        {/* <p>Your email is {email}</p> */}
    </div> 
</motion.div>
  )
}

export default DoctorDashboard