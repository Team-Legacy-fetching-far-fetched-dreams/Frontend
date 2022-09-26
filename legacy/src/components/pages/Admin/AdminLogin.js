
import React, {useState} from 'react'
import './AdminLogin.css'
import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'

import welcomes from '../../../imgs/loginpin.png' 
import Nip from '../../../imgs/nipp.png'



const AdminLogin = () => {
  const [values,setValues] = useState({
    userName:"",
    password:"",

  });
  
  

  const [submit,setSubmit]=useState(false);
  // const [valid,setValid]= useState(false);

  const handleuserName = (event) =>{
    setValues({...values,userName: event.target.value})
  }

  const handlepassword = (event) =>{
    setValues({...values,password: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    // if(values.userName&&values.password){
    //   setValid(true);
    // }
    setSubmit(true);
  }

  
  const [emailval, setemailval]= useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit =(event)=>{
    event.preventDefault();
  }


  return (
    <motion.div className='A-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
    <div className='A-g'>
       <div  className = "A-h">
           <img src={Logo} alt="" className = "A-logo"></img>  
       </div>

       <div className='Al-content'>
           <div  className='login-encase'>

           <div className='left-side'>
              <div className='img-class'>
              <img src={Nip} id='img-id'  alt='' srcSet=''/>
              </div>
              <form onSubmit={handlesubmit}>
                <label for= 'emil1'>Username</label>
                <input className='ii' placeholder='Enter your username...' type='text' value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id='emil1'></input>
                <label for='pwd1'>Password</label>
                <input className='ii' placeholder='Enter your password...' type='password'  value={passval} onChange={(e)=>{setpassval(e.target.value)}} id='pwd1'></input>
                <button className='ll' type='submit' id='sub_butt'> <Link className='linkss' to ="/AdminDashboard"> Login </Link></button>
              </form>

              <div className='footers'>
                <h4 className='dd'>Don't have an Account ? <Link className='link' to ="/AdminSignUp">Register Now</Link>

                </h4>

              </div>
               
            
     


            </div>
            <div className='right-side'>
              <div className='welcomeNote'>
                <h3 className='hh'>Welcome Admin!</h3> 
             
              </div>
              <div className='welcomeImg'>
                <img src={welcomes} id='wel-img-id' alt='' srcSet='' />
              </div>
            </div>


           </div>


      </div>
      </div>
       
    </motion.div>

    

  )
}

export default AdminLogin