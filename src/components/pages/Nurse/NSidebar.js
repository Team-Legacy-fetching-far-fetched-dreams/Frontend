import React from 'react'
import './NSidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilUserMd , UilAccessibleIconAlt } from '@iconscout/react-unicons'
import {NavLink,Link, useNavigate} from 'react-router-dom'
import { logout } from '../../../auth'

const NSidebar = (props) => {
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
      <div className='NSmenu'>
      
          <ul>
            <li>
            <NavLink to ='/NurseDashBoard' className='tried'
            onClick={()=>props.setUrl({url:"/NurseDashboard"})}>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
            <NavLink to ='/NurseDashboard/Patient' activeClassName='active'>
            <UilAccessibleIconAlt className="icon"/>
              <span>Patient</span>
            </NavLink>
            </li> 
            <li>
              <NavLink to ='/NurseDashboard/Doctor' activeClassName="active">
            <UilUserMd className="icon"/>
              <span>Doctor</span>
              </NavLink>
            </li>
            {/* <li>
            <Link to ='/NurseDashboard/Nurse'>
            <UilUserNurse className="icon"/>
              <span>Nurse</span>
              </Link>
            </li> */}
            
            <li>
              <Link to = '/LandingPage' onClick={logOut}>
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