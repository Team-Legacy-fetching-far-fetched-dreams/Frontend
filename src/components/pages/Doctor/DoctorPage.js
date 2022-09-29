import React from 'react'
import './DoctorPage.css'
import Logo from '../../../imgs/logo2.png'
import Doctor1 from '../../../imgs/doc1.png'
import Doctor2 from '../../../imgs/doc2.png'
import Doctor3 from '../../../imgs/doc3.png'
import Doctor4 from '../../../imgs/doc4.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'

const DoctorPage = () => {

  const navigate = useNavigate()
  return (
    <div className='d-m'>
        <div className='d-g'>
        <div className = "d-h">
         <img src={Logo} alt="" className = "D-logo"></img>  
      </div>
     <Button as="sub" className="btn" id = "back-btn" onClick={() => navigate(-1)}>Back</Button>
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
              You can access various features after Login/SignUp. It has some features constiting of viewing their patient details(symptoms, name, mobile), diagnose patients and prescribe a drug if needed.
          </p>

      <div className='sl-btn'>
        <Link to ="/DoctorSignUp" className='btn btn-success'>SignUp</Link>
          <Link to ="/DoctorLogin" className='btn btn-primary d-login'>Login</Link>
          <Link to ="/Hello">
             <Button className='d-login' active>Login</Button>
          </Link>
       </div>
         </div>
        </div> 
    </div>
  )
}

export default DoctorPage