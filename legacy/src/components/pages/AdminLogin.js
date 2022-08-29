import React from 'react'
import './AdminPage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className='A-m'>
    <div className='A-g'>
       <div className = "A-h">
           <img src={Logo} alt="" className = "A-logo"></img>  
       </div>
       <div className='A-content'>
            <h1>Welcome !</h1> 

            <h2>Please Enter User iD and Password to Sign In</h2>

         <Link to ="/AdminDashboard">
             <Button className='d-login' active>Login</Button>
          </Link>
      </div>
       </div>
    </div>
  )
}

export default AdminLogin