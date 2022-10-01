import React, {useState} from 'react'
import './DcSidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilAccessibleIconAlt, UilStethoscopeAlt } from '@iconscout/react-unicons'
import {NavLink,Link, useNavigate} from 'react-router-dom'
import { logout } from '../../../auth'

const DcSidebar = (data) => {
  console.log(data)
  console.log("soandfk")

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
      <div className='DSmenu'>
      
          <ul>
            <li>
            <NavLink to ={{
              pathname:'/DoctorDashBoard'
            }} activeclassName="" className='tried'>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
            <NavLink to = {{
              pathname: '/DoctorDashboard/Patient',
              state: data
            }} activeclassName="actife">
            <UilAccessibleIconAlt className="icon"/>
              <span>Patient</span>
            </NavLink>
            </li>
            <li>
              <NavLink to = '/LandingPage' onClick={logOut}>
            <UilSignOutAlt className="icon"/>
              <span>Logout</span>
              </NavLink>
            </li>
            <li>
            <NavLink to ={{
              pathname:'/DoctorDashboard/AwaitingList',
              state:data
            }} activeclassName="actife">
            <UilStethoscopeAlt className="icon"/>
              <span>Awaiting List</span>
            </NavLink>
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