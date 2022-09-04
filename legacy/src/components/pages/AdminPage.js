import React from 'react'
import './AdminPage.css'
import Logo from '../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const AdminPage = () => {
  
  return (
    <div className='A-m'>
     <div className='A-g'>
        <div className = "A-h">
          <img src={Logo} alt="" className = "A-logo"></img>  
        </div>
        <div className='A-content'>
             <h1>Hello Administrator,</h1> 
             <p className="A-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. 
            
          </p>

        <div className='sl-btn'>
          <Link to ="/AdminLogin">
             <Button className='A-login' active>Login</Button>
          </Link>
        </div>
        </div>
     </div>
    </div>
  )
}

export default AdminPage