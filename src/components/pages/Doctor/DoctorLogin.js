import React, {useState, useEffect} from 'react'
import './DoctorLogin.css'
import Logo from '../../../imgs/logo2.png'
import Nip from '../../../imgs/nipp.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import welcomeimg from '../../../imgs/wel2.jpg' 
import {useForm} from 'react-hook-form'
import {login, useAuth} from '../../../auth'

  
const DoctorLogin = () => {
  const navigate = useNavigate()
  const initialValues = {username: "", password: "", incorrect:""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [islogged, setislogged] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState()
  const location = useLocation()



  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    setFormErrors(validate(formValues));
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

if (Object.keys(formErrors).length === 0){
  setIsLoading(true)
  fetch('/user/login', requestOptions)
    .then((res)=>{
      setIsLoading(false)
      if (res.status===200){
        console.log("SUCCESS")
        setislogged(true)
        return res.json()
        
      }
      else if(res.status === 400){
        console.log("Incorect")
        setFormErrors({incorrect: "Incorrect Passwword or Username"})
      }
    })
.then(data=>{
    if(data){
    console.log(data)
      setData(data)
      login(data.access_token)
      if (data.qualification === 'Doctor'){
        navigate('/DoctorDashBoard',{
          state: {
            id: data.public_id
          }
        })
      }
      else if (data.qualification === 'Nurse'){
        navigate('/NurseDashBoard',{
          state: {
            id: data.public_id
          }
        })
      }
      else{
        navigate('/AdminDashBoard',{
          state: {
            id: data.public_id
          }
        })
      }
     
    }
})
}
};




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
    <div className='bnk d-m'>
    <div className='d-g'>
    <div className = "d-h">
     <img src={Logo} alt="" className = "D-logo"></img>  
  </div>
  {location.state && <div>{location.state.message}</div>}
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
                <p className='err'>{formErrors.incorrect}</p>
                {isloading && <div>...LAODING...</div>}
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