import React from 'react'
import './ContactUs.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Logo from '../../../imgs/logo2.png'
import Back from '../../../imgs/Doc.png'
import Hospital from '../../../imgs/Artboard 1.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'

const ContactUs = () => {
  const navigate = useNavigate()
  return (
    <motion.div className='C-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <div className='C-g'>
    <div className = "C-h">
        <img src={Logo} alt="" className = "D-logo"></img>  
     </div>
     <Link to="/LandingPage">
     <Button as="sub" className="btn" id = "back-btn" onClick={() => navigate(-1)}>Back</Button>
     </Link>
     <img src={Back} alt="" className='cback-image'></img>
           <div className='chester'>
               
                  <div className='flexy'>
                   <div>
                   <p  className='pte'>
                Welcome to our Website. We are glad to have you around.
         </p>
                   <h2 className='boxy'> Contact Us</h2>
                     <p className='p11'>Address: P.O.Box 1934 Adum-Kumasi</p>
                     <p className='p11'>Hotlines: +233 555 874 197 /
                       +233 598 502 203</p>
                     <p className='p11'>Email: ksosei555@gmail.com</p>
                   </div>
                   <div className='wemove'>
                     <h2 className='boxy'>Connect With Us</h2>
                     <p className='p11'>Digital Address: AK-082-626-0</p>
                   </div>
                  </div>
                   <div className='hospital'>
            <img src={Hospital} alt="" className='hospital-image'></img>

          </div>





           {/* <a href="#" class="btn">Get In Touch </a> */}
           </div>
    </div>
   </motion.div>
 )
} 



export default ContactUs