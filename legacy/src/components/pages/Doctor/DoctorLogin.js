import React, {useState, useEffect} from 'react'
import './DoctorLogin.css'
import Logo from '../../../imgs/logo2.png'
import Nip from '../../../imgs/nipp.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import welcomeimg from '../../../imgs/wel2.jpg' 
import {useForm} from 'react-hook-form'
import {login, useAuth} from '../../../auth'

  
const DoctorLogin = () => {
  const navigate = useNavigate()
  const initialValues = {username: "", password: ""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [islogged, setislogged] = useState(false);

 // const {register, handleSubmit} = useForm();
 // const signUp=(data)=>{
    //e.preventDefault();
   // console.log(data)
 // }

  
  // const [emailval, setemailval]= useState("");
  // const [passval, setpassval] = useState("");

  // const handlesubmit =(event)=>{
  //   event.preventDefault();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    // setFormErrors(validate(formValues));
};


const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  formValues["qualification"] = "Doctor"
  console.log(formValues)



  console.log(formValues)

  const requestOptions={
    method : "POST",
    headers: {
        'content-type':'application/json'
    },
    body:JSON.stringify(formValues)
}

fetch('http://127.0.0.1:5000/user/login', requestOptions)
.then((res)=>res.json())
.then(data=>{
    console.log(data)
    login(data.access_token)
    

    if(data.access_token){
      setislogged(true)
      // localStorage.setItem('REACT_TOKEN_AUTH_KEY', data.access_token)
      localStorage.setItem('DATA', data)
      navigate('/DoctorDashboard') 
     
    }
})
  // setFormValues(initialValues)
};

useEffect(() => {
    //  console.log(formErrors);
      // setFormErrors(validate(formValues));
      if (Object.keys(formErrors).length === 0 && isSubmit){
      // setFormErrors(validate(formValues));
      console.log(formValues);

      const requestOptions={
        method : "POST",
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(formValues)
    }

      if (Object.keys(formErrors).length === 0){
        fetch('http://127.0.0.1:5000/user/login', requestOptions)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            login(data.access_token)
            
      
            if(data.access_token){
              setislogged(true)
              // localStorage.setItem('REACT_TOKEN_AUTH_KEY', data.access_token)
              localStorage.setItem('DATA', data)
              navigate('/DoctorDashboard') 
            
            }
        })
      }
    }
     if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);


    
     }
},[formErrors])


const validate = (values) => {
  const errors = {};
  
  if (!values.username){
   errors.username = "Username is required!";
  }
  if (!values.password){
   errors.password = "Password is required!";
  }
  
  return errors;
};
    
    

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
              <form onSubmit={handleSubmit}>
                <label for= 'emil1'>Username</label>
                <p className='err'>{formErrors.username}</p>
                <input className='ii' placeholder='Enter your username...' type='text'  name='username' onChange={handleChange} value= {formValues.username} id='emil1'  ></input>
                 
                <label for='pwd1'>Password</label>
                <p className='err'>{formErrors.password}</p>
                <input className='ii' placeholder='Enter your password...'  name='password' onChange={handleChange} value= {formValues.password} type='password'  id='pwd1' ></input>
                <button value='Submit' className='ll' type='submit' id='sub_butt'> 
                  Login </button>
                
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