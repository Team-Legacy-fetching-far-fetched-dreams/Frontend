import React from 'react'
import './NursePage.css'
import Logo from '../../../imgs/logo2.png'
import Nurse2 from '../../../imgs/Nurse2.png'
import Nurse3 from '../../../imgs/Nurse3.png'
import Nurse4 from '../../../imgs/Nurse4.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'

const NursePage = () => {
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='N-content'>
            <motion.h1
             initial=  'hidden' animate='visible' variants={{
              hidden:{
                scale: 0.8,
                opacity: 0
              },
              visible:{
                scale: 1,
                opacity:1,
                transition:{
                  delay: 0.4
                }
              },
             }}
            
            >Hello Nurse,
            </motion.h1> 

            <p className="N-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. 
            
          </p>
          <img src={Nurse2} alt="" className = "N-image2"></img>
          <img src={Nurse3} alt="" className = "N-image3"></img>  
          <img src={Nurse4} alt="" className = "N-image4"></img>
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