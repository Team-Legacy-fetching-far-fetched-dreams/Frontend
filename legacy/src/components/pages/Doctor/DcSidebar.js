import React, {useState} from 'react'
import './DcSidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilAccessibleIconAlt } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const DcSidebar = () => {


  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='DSmenu'>
      
          <ul>
            <li>
            <Link to ='/DoctorDashBoard'>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </Link>
            </li>
            <li>
            <Link to ='/DoctorDashboard/Patient'>
            <UilAccessibleIconAlt className="icon"/>
              <span>Patient</span>
            </Link>
            </li> 
            <li>
              <Link to = '/LandingPage'>
            <UilSignOutAlt className="icon"/>
              <span>Logout</span>
              </Link>
            </li>
           
          </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>

    </div>
  )
}

export default DcSidebar