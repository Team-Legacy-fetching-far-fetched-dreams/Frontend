import React, {useState, useEffect} from 'react'
import './AdminLogin.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
import {useForm} from 'react-hook-form'
import {login, useAuth} from '../../../auth'
// import welcomes from '../../../imgs/loginPic.png' 
// import Nip from '../../../imgs/nipp.png'


const AdminLogin = () => {

  
  // const [emailval, setemailval]= useState("");
  // const [passval, setpassval] = useState("");
  const navigate = useNavigate()
  const initialValues = {username: "", password: ""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [islogged, setislogged] = useState(false);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
};
 
  const handlesubmit =(event)=>{
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues)
    setFormValues(initialValues)
  }

  useEffect(() => {
    //  console.log(formErrors);
     if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);


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
          navigate('/AdminDashboard') 
        }
    })
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
              {/* <img src={Nip} id='img-id'  alt='' srcSet=''/> */}
              </div>
              <form onSubmit={handlesubmit}>
                <label for= 'emil1'>Username</label>
                <p className='err'>{formErrors.username}</p>
                <input className='ii' placeholder='Enter your username...' type='text' value={formValues.username} name='username' onChange={handleChange} id='emil1'></input>
                <label for='pwd1'>Password</label>
                <p className='err'>{formErrors.username}</p>
                <input className='ii' placeholder='Enter your password...' type='password'  name='pasword' value={formValues.password} onChange={handleChange} id='pwd1'></input>
                <button className='ll' type='submit' id='sub_butt'> Login </button>
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
                {/* <img src={welcomes} id='wel-img-id' alt='' srcSet='' /> */}
              </div>
            </div>


           </div>


      </div>
       </div>
    </motion.div>

  )
}

export default AdminLogin