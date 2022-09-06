import React,{useState} from 'react'
import './AdminLogin.css'
import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'



const AdminLogin = () => {
  const [values,setValues] = useState({
    userName:"",
    password:"",

  });

  const [submit,setSubmit]=useState(false);
  const [valid,setValid]= useState(false);

  const handleuserName = (event) =>{
    setValues({...values,userName: event.target.value})
  }

  const handlepassword = (event) =>{
    setValues({...values,password: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(values.userName&&values.password){
      setValid(true);
    }
    setSubmit(true);
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
            <h1>Welcome </h1>
            <h2>Please Enter  Username And Password To Login</h2>
           
            <form className='form-container' onSubmit={handleSubmit}>
              {submit && valid ? <div className='success-message'>You're Logged In</div> : null}
              <input 
              onChange={handleuserName}
              value={values.userName}
              className='form-field'
              type="text"
              name="username"
              placeholder='username'
              required
              />
              <br></br>
             {submit && !values.userName?<span>Please enter your username</span>:null}
             <br></br>
              <input 
              onChange={handlepassword}
              value={values.password}
              className='form-field'
              type="password"
              placeholder='password'
              required
              />
              <br></br>
              {submit && !values.password ? <span>Please enter your password</span> : null}
              
              <br></br>
                <button className='login-btn' >Login</button>
            </form>


         {/* <div className='text'>forgot password?</div> */}
      </div>
       </div>
       
    </motion.div>

  )
}

export default AdminLogin