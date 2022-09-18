import React from 'react'
import './ContactUs.css'
import {motion} from 'framer-motion/dist/framer-motion'
import Logo from '../../../imgs/logo2.png'


const ContactUs = () => {
  return (
    <div className='C-m'>
    <div className='C-g'>
    <div className = "d-h">
        <img src={Logo} alt="" className = "D-logo"></img>  
     </div>
    
       <p></p>
           <div className='chester'>
           <p  className='pte'>
           Welcome to our Website. We are glad to have you around.
           </p>
                  <div className='flexy'>
                   <div>
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





           {/* <a href="#" class="btn">Get In Touch </a> */}
           </div>
    </div>
   </div>
 )
} 



export default ContactUs