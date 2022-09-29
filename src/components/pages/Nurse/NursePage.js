import React from 'react'
import './NursePage.css'
import Logo from '../../../imgs/logo2.png'
import Nurse2 from '../../../imgs/Nurse2.png'
import Nurse3 from '../../../imgs/Nurse3.png'
import Nurse4 from '../../../imgs/Nurse4.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'

const NursePage = () => {
  const navigate = useNavigate()
  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
     <Button as="sub" className="btn" id = "back-btn" onClick={() => navigate(-1)} >Back</Button>
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
              You can access various features after Login/SignUp. It has some features which includes record patient details and register patients vitals.
          </p>
          <img src={Nurse2} alt="" className = "N-image2"></img>
          <img src={Nurse3} alt="" className = "N-image3"></img>  
          <img src={Nurse4} alt="" className = "N-image4"></img>
      <div className='sl-btn'>
        <Link to ="/NurseSignUp" className='btn btn-success'>SignUp</Link>
          <Link to ="/NurseLogin" className='btn btn-primary N-login'>Login</Link>
       </div>
       </div>
    </div>
   </div>
  )
}

export default NursePage