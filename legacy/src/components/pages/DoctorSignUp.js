import React from 'react'
import './DoctorPage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const DoctorSignUp = () => {
  return (
    <div className='d-m'>
        <div className='d-g'>
        <div className = "d-h">
         <img src={Logo} alt="" className = "D-logo"></img>  
      </div>
      <div className='d-content'>
      <h1>Doctor SignUp</h1> 

      <Link to ="/DoctorLogin">
             <Button className='d-login' active>Submit</Button>
          </Link>
    
         </div>
        </div> 
    </div>
  )
}

export default DoctorSignUp