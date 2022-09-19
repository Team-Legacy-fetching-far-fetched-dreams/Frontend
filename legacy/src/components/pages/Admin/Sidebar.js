import React, {useState} from 'react'
import './Sidebar.css'
import Logo from '../../../imgs/logo2.png'
// import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const Sidebar = () => {

const [selected, setSelected] = useState(0)


  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='menu'>
      <div className='menu-item'>
       
          <div>
          <UilEstate/>
          </div>
          <span>Dashboard</span>
        </div>

        <div className='menu-item'>
        <Link to ="/">
          <div>
          <UilSignOutAlt/>
          </div>
          <span></span>
         </Link>
        </div>

        <div className='menu-item'>
        <Link to ="/">
          <UilSignOutAlt/>
         </Link>
        </div>

      </div>
    </div>
  )
}

export default Sidebar