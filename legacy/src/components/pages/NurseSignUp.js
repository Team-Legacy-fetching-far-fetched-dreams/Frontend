import React from 'react'
import './NursePage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const NurseSignUp = () => {
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='N-content'>
            <h1>Nurse SignUp</h1> 

            <Link to ="/NurseLogin">
             <Button className='d-login' active>Submit</Button>
          </Link>
       </div>
    </div>
   </div>
  )
}

export default NurseSignUp