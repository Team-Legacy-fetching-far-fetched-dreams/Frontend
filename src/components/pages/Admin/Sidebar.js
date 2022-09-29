import React,{useState} from 'react'
import './Sidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilUserNurse, UilUserMd , UilAccessibleIconAlt } from '@iconscout/react-unicons'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../../../auth'


const Sidebar = () => {
  const navigate = useNavigate() 
const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
 const logOut =() =>{

  logout(token)
  navigate("/LandingPage")
 }

 

  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='menu'>
      
          <ul>
            <motion.li className='active'
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
            <Link to ='/AdminDashBoard'>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </Link>
            </motion.li>
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
              <Link to ='/AdminDashboard/Doctor'>
            <UilUserMd className="icon"/>
              <span>Doctor</span>
              </Link>
            </motion.li>
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
            <Link to ='/AdminDashboard/Nurse'>
            <UilUserNurse className="icon"/>
              <span>Nurse</span>
              </Link>
            </motion.li>
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
            <Link to ='/AdminDashboard/Patient'>
            <UilAccessibleIconAlt className="icon"/>
              <span>Patient</span>
            </Link>
            </motion.li> 
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
              <Link to = '/LandingPage'>
            <UilSignOutAlt className="icon"/>
              <span>Logout</span>
              </Link>
            </motion.li>
           
          </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>

    </div>
  )
}

export default Sidebar