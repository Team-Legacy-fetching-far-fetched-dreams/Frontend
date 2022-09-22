import React,{useState} from 'react'
import './AdminPage.css'
import Logo from '../../../imgs/logo2.png'
import Admin2 from '../../../imgs/Admin2.png'
import Admin3 from '../../../imgs/Admin3.png'
import Admin4 from '../../../imgs/Admin4.png'
import {motion} from 'framer-motion/dist/framer-motion'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Modal from '../../../components/pages/Admin/Model/Modal'




const AdminPage = () => {

  const diaa = () => {
    fetch("http://127.0.0.1:5000/patients/vital/1")
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

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
        <div className='A-content'>
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
             >Hello Administrator,</motion.h1> 
             <p className="A-p">
             The admin is responsible for organizing the health services and daily activities such as keeping records of an employee,communicate between departments to ensure adequate patient care.            
          </p>
          <img src={Admin4} alt="" className = "A-image4"></img>
          <img src={Admin2} alt="" className = "A-image2"></img>  
          <img src={Admin3} alt="" className = "A-image3"></img> 
          
  
      <div className='sl-btn'>
         <Link to ="/AdminSignUp">
             <Button className='A-signup' active>SignUp</Button>
          </Link>
          <Link to ="/AdminLogin">
             <Button className='A-login' active>Login</Button>
          </Link>
          <Link to ="/Modal">
             <button className='A-login' active onClick={diaa}>Dia</button>
          </Link>
          <Link to ="/Mafu">
             <Button className='A-login' active>PopUp</Button>
          </Link>
        
      
       </div>
      
        </div>
     </div>
    </motion.div>
  )
}

export default AdminPage