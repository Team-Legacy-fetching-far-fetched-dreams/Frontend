import React from 'react'
import './DoctorLogin.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


const DoctorLogin = () => {
  return (
    <div className='d-m'>
    <div className='d-g'>
    <div className = "d-h">
     <img src={Logo} alt="" className = "D-logo"></img>  
  </div>
  <div className='dl-content'>
  <h1>Doctor Login</h1> 

      <Link to ="/DoctorDashboard">
             <Button className='d-login' active>Login</Button>
      </Link>
     </div>
    </div> 
</div>
  )
}

export default DoctorLogin