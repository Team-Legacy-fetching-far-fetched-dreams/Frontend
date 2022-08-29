import React, {useState} from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo2.png'
import {SidebarData} from "../../components/pages/Data/Data";
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const Sidebar = () => {

const [selected, setSelected] = useState(0)


  return (
    <div className='Sidebar'>
      <div className='l'>
        <img src={Logo} alt=''></img>
      </div>
      <div className='menu'>
        {SidebarData.map((item, index) =>{
           return(
          <div className={selected===index?'menu-item active': 'menu-item'}
          key={index}
          onClick={()=> setSelected(index)}
          >
            <item.icon/>
            <span>
              {item.heading}
            </span>
          </div>
          
          )
        })}

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