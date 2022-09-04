import React from 'react'
import './NurseLogin.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const NurseLogin = () => {
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='Nl-content'>
            <h1>Nurse Login</h1> 

            <Link to ="/NurseDashboard">
             <Button className='N-login' active>Login</Button>
          </Link>
       </div>
    </div>
   </div>
  )
}

export default NurseLogin