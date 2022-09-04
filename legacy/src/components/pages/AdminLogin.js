import React,{useState} from 'react'
import './AdminPage.css'
import Logo from '../../imgs/logo2.png'
/*import Security from '../../imgs/security.png'*/

import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


const AdminLogin = () => {

  

 
  return (
    <div className='A-m'>
    <div className='A-g'>
       <div  className = "A-h">
           <img src={Logo} alt="" className = "A-logo"></img>  
       </div>

       <div className='A-content'>
           <h1>Welcome !</h1> 
           <h3>Please Enter User id and Password to Sign In</h3>
           <input type="text" placeholder="user id"/>
           <input type="password" placeholder="password"/>
     
     
      <Link to ="/AdminDashboard">
      <div className='login-btn'>Login</div>

      </Link>
{/*       <img align = "left" src= {Security} alt="" className ="Secure"></img>
 */}

      

           
        <p className="text">forgot password?</p>   

            
       </div>

        
      </div>
       </div>
  
  )
}

export default AdminLogin