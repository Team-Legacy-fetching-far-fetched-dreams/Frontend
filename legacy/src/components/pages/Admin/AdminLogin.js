import React from 'react'
import './AdminLogin.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'

const AdminLogin = () => {
  return (
    <motion.div className='A-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
    <div className='A-g'>
       <div className = "A-h">
           <img src={Logo} alt="" className = "A-logo"></img>  
       </div>
       <div className='Al-content'>
            <h1>Welcome !</h1> 

            <h2>Please Enter User iD and Password to Sign In</h2>

          <Link to ="/AdminDashboard">
             <Button className='a-login' active>Login</Button>
          </Link>
      </div>
       </div>
    </motion.div>
  )
}

export default AdminLogin