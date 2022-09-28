import React, {useState, useEffect} from 'react'
import './AdminLogin.css'
import Logo from '../../../imgs/logo2.png'
// import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
// import {useForm} from 'react-hook-form'
import {login} from '../../../auth'
// import welcomes from '../../../imgs/loginPic.png' 
// import Nip from '../../../imgs/nipp.png'
// import {Link} from 'react-router-dom'
// import {motion} from 'framer-motion/dist/framer-motion'
// import welcomes from '../../../imgs/loginpin.png' 
// import Nip from '../../../imgs/nipp.png'
import welcomes from '../../../imgs/loginpin.png' 
import Nip from '../../../imgs/nipp.png'
import { set } from 'react-hook-form'



const AdminLogin = () => {
 

  const [submit,setSubmit]=useState(false);
  // const [valid,setValid]= useState(false);
  
  // const [emailval, setemailval]= useState("");
  // const [passval, setpassval] = useState("");
  const navigate = useNavigate()
  const initialValues = {username: "", password: ""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState()
  // const [islogged, setislogged] = useState(false);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    setFormErrors(validate(formValues));
};
 
  const handleSubmit =(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    formValues["qualification"] = "Admin"
    console.log(formValues)
    console.log(formErrors)

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
        setData(data)
        login(data.access_token)
     
  
        if(data.access_token){
          // setislogged(true)
          if (data.qualification === 'Doctor'){
            navigate('/DoctorDashBoard', {
              state: {
                id: data.public_id
              }
            })
          }
          else if (data.qualification === 'Nurse'){
            navigate('/NurseDashBoard', {
              state:{
                id: data.public_id
              }
            } )
          }
          else{
            navigate('/AdminDashBoard', {
              state:{
                id: data.public_id
              }
            })
          }
        }
    })
  }
  

}

//   useEffect(() => {
//     // console.log(formErrors);
//     // setFormErrors(validate(formValues));
//     //  if (Object.keys(formErrors).length === 0 && isSubmit){
//     //   console.log(formValues);

//     //   const requestOptions={
//     //     method : "POST",
//     //     headers: {
//     //         'content-type':'application/json'
//     //     },
//     //     body:JSON.stringify(formValues)
//     // }


//     // fetch('http://127.0.0.1:5000/user/login', requestOptions)
//     // .then((res)=>res.json())
//     // .then(data=>{
//     //     console.log(data)
//     //     login(data.access_token)
     
  
//     //     if(data.access_token){
//     //       // setislogged(true)
//     //       if (data.qualification === 'Doctor'){
//     //         navigate('/DoctorDashBoard')
//     //       }
//     //       else if (data.qualification === 'Nurse'){
//     //         navigate('/NurseDashBoard')
//     //       }
//     //       else{
//     //         navigate('/AdminDashBoard')
//     //       }
//     //     }
//     // })
  
//     // if (Object.keys(formErrors).length === 0){
    
//     // }
      
//     //  }
// },[])


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
              <img src={Nip} id='img-id'  alt='' srcSet=''/>
              </div>
              <form onSubmit={handleSubmit}>
                <label for= 'emil1'>Username</label>
                <p className='err'>{formErrors.username}</p>
                <input className='ii' placeholder='Enter your username...' type='text' name='username' onChange={handleChange} value={formValues.username} id='emil1'></input>
                <label for='pwd1'>Password</label>
                <p className='err'>{formErrors.password}</p>
                <input className='ii' placeholder='Enter your password...' type='password'  name='password'  onChange={handleChange} value={formValues.password} id='pwd1'></input>
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