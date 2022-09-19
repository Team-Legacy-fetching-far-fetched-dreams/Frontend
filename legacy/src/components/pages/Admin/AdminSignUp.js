import React from 'react'
import './AdminSignUp.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const AdminSignUp = () => {
  return (
    <div className='d-m'>
        <div className='d-g'>
        <div className = "d-h">
         <img src={Logo} alt="" className = "D-logo"></img>  
      </div>
      <div className='ds-content'>
      <h1>Admin SignUp</h1> 

      <Link to ="/AdminLogin">
             <Button className='d-submit' active>Submit</Button>
          </Link>
    
         </div>
        </div> 
    </div>
  )
}

export default AdminSignUp