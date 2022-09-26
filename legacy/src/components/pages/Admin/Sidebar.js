import React,{useState} from 'react'
import './Sidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilUserNurse, UilUserMd , UilAccessibleIconAlt } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const Sidebar = () => {
 const [selected, setSelected] = useState(0)


  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='menu'>
      
          <ul>
            <li className='active'
            
            >
            <Link to ='/AdminDashBoard'>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to ='/AdminDashboard/Doctor'>
            <UilUserMd className="icon"/>
              <span>Doctor</span>
              </Link>
            </li>
            <li>
            <Link to ='/AdminDashboard/Nurse'>
            <UilUserNurse className="icon"/>
              <span>Nurse</span>
              </Link>
            </li>
            <li>
            <Link to ='/AdminDashboard/Patient'>
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

export default Sidebar