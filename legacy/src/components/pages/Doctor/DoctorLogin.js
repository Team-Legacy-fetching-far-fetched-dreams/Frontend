import React, {useState} from 'react'
import './DoctorLogin.css'
import Logo from '../../../imgs/logo2.png'
import Nip from '../../../imgs/nipp.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import welcomeimg from '../../../imgs/wel2.jpg' 

  
const DoctorLogin = () => {

  const [emailval, setemailval]= useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit =(event)=>{
    event.preventDefault();
  }

  return (
    <div className='d-m'>
    <div className='d-g'>
    <div className = "d-h">
     <img src={Logo} alt="" className = "D-logo"></img>  
  </div>
  <div className='dl-contents'>
  
      <div className='login-encase'>
            <div className='left-side'>
              <div className='img-class'>
              <img src={Nip} id='img-id'  alt='' srcSet=''/>
              </div>
              <form onSubmit={handlesubmit}>
                <label for= 'emil1'>Username</label>
                <input className='ii' placeholder='Enter your username...' type='text' value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id='emil1'></input>
                <label for='pwd1'>Password</label>
                <input className='ii' placeholder='Enter your password...' type='password'  value={passval} onChange={(e)=>{setpassval(e.target.value)}} id='pwd1'></input>
                <button className='ll' type='submit' id='sub_butt'> <Link className='linkss' to ="/DoctorDashboard"> Login </Link></button>
              </form>

             
            
     

              <div className='footers'>
                <h4 className='dd'>Don't have an Account ? <Link className='link' to ="/DoctorSignUp">Register Now</Link>

                </h4>

              </div>
               

            </div>
            <div className='right-side'>
              <div className='welcomeNote'>
                <h3 className='hh'>Welcome Doctor!</h3> 
             
              </div>
              <div className='welcomeImg'>
                <img src={welcomeimg} id='wel-img-id' alt='' srcSet='' />
              </div>
            </div>
        </div>
  

    

     </div>
    </div> 
</div>
  )
}

export default DoctorLogin