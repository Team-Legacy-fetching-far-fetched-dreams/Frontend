import React, {useState, useEffect} from 'react'
import './NurseLogin.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import wwelcomeImg from '../../../imgs/login1.png'
import Nip from '../../../imgs/nipp.png'
import {login, useAuth} from '../../../auth'
import { FormSelect } from 'react-bootstrap';
import {useForm} from 'react-hook-form'


const NurseLogin = () => {


// const[emailval2, setemailval2] = useState("");
// const [passval2, setpassval2] = useState("");

   const navigate = useNavigate()
   const initialValues = {username: "", password: ""};
   const [formValues,setFormValues] = useState( initialValues);
   const [formErrors,setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   const [islogged, setislogged] = useState(false);


   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});
      setFormErrors(validate(formValues));
   }


   const handleSubmit = (event) => {
      event.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      formValues["qualification"] = "Nurse"
      console.log(formValues)
      // setFormValues(initialValues)
      console.log(formErrors)
      // setFormValues(initialValues)

      // setFormErrors(validate(formValues));

      const requestOptions={
         method : "POST",
         headers: {
             'content-type':'application/json'
         },
         body:JSON.stringify(formValues)
     }
      if (Object.keys(formErrors).length === 0 && isSubmit){
     fetch('/user/login', requestOptions)
     .then((res)=>res.json())
     .then(data=>{
           console.log(data)
           login(data.access_token)
           
  
           if(data.access_token){
            if (data.qualification === 'Doctor'){
               navigate('/DoctorDashBoard')
             }
             else if (data.qualification === 'Nurse'){
               navigate('/NurseDashBoard')
             }
             else{
               navigate('/AdminDashBoard')
             }
           }
     })
  }

      }
   

  
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
                     <p className='err'>{formErrors.username}</p>
                     <input className='ii' placeholder='Enter your username...'  name='username'  onChange={handleChange} value={formValues.username}type='text' id='emill1'></input>
                     <label for='pwdd1'>Password</label>
                     <p className='err'>{formErrors.password}</p>
                     <input className='ii' placeholder='Enter your password...'  name='password' value={formValues.password} onChange={handleChange} type='password' id='pwdd1'></input> 
                     <button className='ll' type='submit' id='sub_butt'> Login </button>
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
                <img src={wwelcomeImg} id='wel-img-id' alt='' srcSet='' />
               </div>
               </div>
               </div> 

              

           
       </div>
    </div>
   </div>
  )
}
   export default NurseLogin
         
           