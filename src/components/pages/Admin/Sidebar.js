import React,{useState} from 'react'
import './Sidebar.css'
import Logo from '../../../imgs/logo2.png'
import {SidebarData} from "../Data/Data";
import {UilSignOutAlt, UilEstate, UilUserNurse, UilUserMd , UilAccessibleIconAlt } from '@iconscout/react-unicons'
import {motion} from 'framer-motion/dist/framer-motion'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { logout } from '../../../auth'


const Sidebar = () => {
  const navigate = useNavigate() 
  const [selected, setSelected] = useState(0);
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
      {/* {SidebarData.map((item, index) => {
          return (
            <div to = {item.link}
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon *
        <Link to = '/LandingPage'>
            <UilSignOutAlt className="icon"/>
              <span>Logout</span>
              </Link>
       */}
          <ul>
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
            <NavLink to ='/AdminDashBoard' className='tried'>
              <UilEstate className="icon"/>
              <span>Dashboard</span>
              </NavLink>
            </motion.li>
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
              <NavLink to ='/AdminDashboard/Doctor' activeclassName="active">
            <UilUserMd className="icon"/>
              <span>Doctor</span>
              </NavLink>
            </motion.li>
            <motion.li
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
            <NavLink to ='/AdminDashboard/Nurse' activeclassName="active">
            <UilUserNurse className="icon"/>
              <span>Nurse</span>
              </NavLink>
            </motion.li>
            <motion.li 
            whileHover={{scale:1.1, originX: 0, color: ''}}
            transition={{ type: "spring" , stiffness: 300}}
            >
            <NavLink to ='/AdminDashboard/Patient' activeclassName="active">
            <UilAccessibleIconAlt className="icon"/>
              <span>Patient</span>
            </NavLink>
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