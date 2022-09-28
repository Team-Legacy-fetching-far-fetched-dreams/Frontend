import React, {useState} from 'react'
import './DcSidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilAccessibleIconAlt, UilStethoscopeAlt } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const DcSidebar = (data) => {
  console.log(data)
  console.log("soandfk")

  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='DSmenu'>
      
          <ul>
            <li>
            <Link to ={{
              pathname:'/DoctorDashBoard'
            }}>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </Link>
            </li>
            <li>
            <Link to = {{
              pathname: '/DoctorDashboard/Patient',
              state: data
            }}>
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
            <li>
            <Link to ={{
              pathname:'/DoctorDashboard/AwaitingList',
              state:data
            }}>
            <UilStethoscopeAlt className="icon"/>
              <span>Awaiting List</span>
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