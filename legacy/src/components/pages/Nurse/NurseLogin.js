import React, {useState} from 'react'
import './NurseLogin.css'
import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'
import wwelcomeImg from '../../../imgs/login1.png'
import Nip from '../../../imgs/nipp.png'


const NurseLogin = () => {
const[emailval2, setemailval2] = useState("");
const [passval2, setpassval2] = useState("");

const handleSubmit = (event) => {
   event.preventDefault();
}

  return (
    <div className='N-m'>
    <div className='N-g'>
       <div className = "N-h">
           <img src={Logo} alt="" className = "N-logo"></img>  
       </div>
       <div className='Nl-content'>
            <div className='login-coverpage'>
               <div className='left-side'>
                  <div className='img-class'>
                     <img src={Nip} id='img-id' alt='' srcSet='' />

                  </div>
                  <form onSubmit={handleSubmit}>
                     <label for= 'emill1' >Username</label>
                     <input className='ii' placeholder='Enter your username...' value={emailval2} onChange={(e)=>{setemailval2(e.target.value)}} type='text' id='emill1'></input>
                     <label for='pwdd1'>Password</label>
                     <input className='ii' placeholder='Enter your password...'  value={passval2} onChange={(e)=>{setpassval2(e.target.value)}} type='password' id='pwdd1'></input> 
                     <button className='ll' type='submit' id='sub_butt'> <Link className='linkss' to ='/NurseDashboard'>Login</Link>  </button>
                  </form>

                  <div className='footers'>
                     <h4 className='dd'>Don't have an Account ?  <Link className='link' to ="/NurseSignUp">Register Now</Link>  
                     </h4>
                  </div>

               </div>

               <div className='right-side'>
               <div className='welcomeNote'>
                  <h3 className='hh'>Welcome Nurse!</h3>
                  
               </div>
               <div className='wwelcomeImg'>
                <img src={wwelcomeImg} className="nlogin-img" alt='' srcSet='' />
               </div>
               </div>
               </div> 

              

           
       </div>
    </div>
   </div>
  )
}

export default NurseLogin