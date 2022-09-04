import React,{useState} from 'react'
import './AdminPage.css'
import Logo from '../../imgs/logo2.png'
import Security from '../../imgs/security.png'

import {Link} from 'react-router-dom'


const AdminLogin = () => {
  const [values,setValues] = useState({
    userId: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);

  const handleUserIdChange = (event) =>{
    setValues({...values,userId: event.target.value})
  }

  const handlePasswordChange = (event) =>{
    setValues({...values,password: event.target.value})
  }

  
const handleSubmit = (event)=>{
  event.preventDefault();
  if(values.userId && values.password){
    setValid(true);
  }
  setSubmitted(true);
}
   

 
  return (
    <div className='A-m'>
    <div className='A-g'>
       <div  className = "A-h">
           <img src={Logo} alt="" className = "A-logo"></img>  
       </div>

       <div className='A-content'>
        <form className='login-form' onSubmit={handleSubmit}>
           <h1>Welcome !</h1> 
           <h3>Please Enter User id and Password to Sign In</h3>
          {submitted  && valid ? <div className='success-message'>Success! </div>: null}          <input
          onChange={handleUserIdChange}
          value={values.userId}
          className='UserId'
          placeholder='user id'
          name='userId' required/><br></br>
           {submitted && !values.userId ? <span>Please enter user id</span>: null}
          <br></br>
          <input
          onChange={handlePasswordChange}
          value={values.password}
          className='login-form'
          placeholder='password'
          type="password" required/><br></br>
          {submitted && !values.password ? <span>Please enter password</span>: null}
          
          
              <button 
              className='login-btn' 
              type='submit' >Login</button>
          


        </form>
        <p className="text">forgot and reset password?</p>   

        <img align = "left" src= {Security} alt="" className ="Secure"></img>

        
       {/*  {submitted  && valid ? <div className='success-message'>Success! </div>: null}

           <h1>Welcome !</h1> 
           <h3>Please Enter User id and Password to Sign In</h3>

        <form className='form-container' onSubmit={handleSubmit}>
          <div>
           <input
            onChange={handleUserIdChange} 
            value = {values.userId} 
            type="text" 
            placeholder="user id"/>
           {submitted && !values.userId ? <span>Please enter user id</span>: null}

           <input
            onChange={handlePasswordChange}
            value = {values.password} 
            type="password" 
            placeholder="password"/>
           {submitted && !values.password ? <span>Please enter password</span>: null}
 
      </div>
        </form>
        <Link to ="/AdminDashboard">
      { <Button className='login-btn' active>Login</Button> }
    <Button className='login-btn' type="submit" active >Login</Button> 
      </Link>

       <link to ='/'>
             <p className="text">forgot and reset password?</p>   
      </link> 
     
     <img align = "left" src= {Security} alt="" className ="Secure"></img>
 
 
       

           
        */}

            
       </div>

        
      </div>
       </div>
  
  )
}

export default AdminLogin