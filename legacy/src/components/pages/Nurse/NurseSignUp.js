import React from 'react'
import './NurseSignUp.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const NurseSignUp = () => {
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='Ns-content'>
            <h1>Nurse SignUp</h1> 

            <Link to ="/NurseLogin">
             <Button className='n-submit' active>Submit</Button>
          </Link>
       </div>
    </div>
   </div>
  )
}

export default NurseSignUp