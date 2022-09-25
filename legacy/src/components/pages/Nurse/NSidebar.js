import React from 'react'
import './NSidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilUserMd , UilAccessibleIconAlt } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const NSidebar = () => {



  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='NSmenu'>
      
          <ul>
            <li>
            <Link to ='/NurseDashBoard'>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </Link>
            </li>
            <li>
            <Link to ='/NurseDashboard/Patient'>
            <UilAccessibleIconAlt className="icon"/>
              <span>Patient</span>
            </Link>
            </li> 
            <li>
              <Link to ='/NurseDashboard/Doctor'>
            <UilUserMd className="icon"/>
              <span>Doctor</span>
              </Link>
            </li>
            {/* <li>
            <Link to ='/NurseDashboard/Nurse'>
            <UilUserNurse className="icon"/>
              <span>Nurse</span>
              </Link>
            </li> */}
            
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

export default NSidebar