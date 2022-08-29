import React from 'react'
import './NursePage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const NursePage = () => {
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='N-content'>
            <h1>Hello Nurse,</h1> 

            <p className="N-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. 
            
          </p>

      <div className='sl-btn'>
        <Link to ="/NurseSignUp">
          <Button className='N-signup' active>SignUp</Button>
          </Link>
          <Link to ="/NurseLogin">
             <Button className='N-login' active>Login</Button>
          </Link>
       </div>
       </div>
    </div>
   </div>
  )
}

export default NursePage