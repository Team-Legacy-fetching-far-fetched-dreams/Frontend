import React from 'react'
import './DoctorPage.css'
import Logo from '../../imgs/logo2.png'
import Doctor1 from '../../imgs/doc1.png'
import Doctor2 from '../../imgs/doc2.png'
import Doctor3 from '../../imgs/doc3.png'
import Doctor4 from '../../imgs/doc4.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const DoctorPage = () => {
  return (
    <div className='d-m'>
        <div className='d-g'>
        <div className = "d-h">
         <img src={Logo} alt="" className = "D-logo"></img>  
      </div>
      <div className='d-content'>
      <h1 align='center'>Hello Doctor,</h1> 
       
      <img src={Doctor2} alt="" className = "D-image2"></img>  
      <img src={Doctor3} alt="" className = "D-image3"></img>  
      <img src={Doctor1} alt="" className = "D-image1"></img> 
      <img src={Doctor4} alt="" className = "D-image4"></img>
      <p className="d-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. 
            
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