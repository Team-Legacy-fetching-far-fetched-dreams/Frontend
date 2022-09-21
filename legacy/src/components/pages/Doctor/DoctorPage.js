import React from 'react'
import './DoctorPage.css'
import Logo from '../../../imgs/logo2.png'
import Doctor1 from '../../../imgs/doc1.png'
import Doctor2 from '../../../imgs/doc2.png'
import Doctor3 from '../../../imgs/doc3.png'
import Doctor4 from '../../../imgs/doc4.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'

const DoctorPage = () => {
  return (
    <div className='d-m'>
        <div className='d-g'>
        <div className = "d-h">
         <img src={Logo} alt="" className = "D-logo"></img>  
      </div>
      <div className='d-content'>
      <motion.h1 align='center'
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
      
      >Hello Doctor,</motion.h1> 
       
      <img src={Doctor2} alt="" className = "D-image2"></img>  
      <img src={Doctor3} alt="" className = "D-image3"></img>  
      <img src={Doctor1} alt="" className = "D-image1"></img> 
      <img src={Doctor4} alt="" className = "D-image4"></img>
      <p className="d-p">
      Doctors are responsible for mitigating the pain and suffering of others by providing them with medical treatment and healthcare.             
          </p>

      <div className='sl-btn'>
        <Link to ="/DoctorSignUp">
          <Button className='d-signup' active>SignUp</Button>
          </Link>
          <Link to ="/DoctorLogin">
             <Button className='d-login' active>Login</Button>
          </Link>
       </div>
         </div>
        </div> 
    </div>
  )
}

export default DoctorPage