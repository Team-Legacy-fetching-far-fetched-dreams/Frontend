import React, {useState, useEffect} from 'react'
import './AdminSignUp.css'
import Logo from '../../../imgs/logo2.png'
import registerImg from '../../../imgs/415.jpg'
// import Button from 'react-bootstrap/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom'
// import {useForm} from 'react-hook-form'



const AdminSignUp = () => {
 

  const initialValues = {surname: "", other_name: "", email: "", birth_date: "", address: "", contact1: "", contact2: "", gender: ""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isSuccess, setIsSucces] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    // console.log(formValues);
};


const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  formValues["qualification"] = "Admin"
  console.log(formValues)

     //console.log(formErrors);
     if (Object.keys(formErrors).length === 0){
      setIsLoading(true)
      console.log(formValues);

      const requestOptions ={
        method : "POST",
        headers : {
          'content-type' : 'application/json'
        },
          body: JSON.stringify(formValues)
      }

      if (Object.values(formErrors).length === 0){
        fetch("/user/signup", requestOptions)
        .then((res)=>{
        setIsLoading(false)
        if (res.status===200){
          console.log("SUCCESS")
          setIsSucces(true)
          return res.json()
          
        }
        else if(res.status === 409){
          console.log("CONFLICT")
          setFormErrors({email: "Email already exist"})
        }
        })
        .then(data=>
          {if(data){
          console.log(data)
          console.log(location)
          navigate("/AdminLogin",{
            state:{
              message:"Please Check your email for your login Credentials"
          }
        })
        }
      })
      }
    }
}

const validate = (values) => {
  const errors = {};
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.surname){
   errors.surname = "Surname is required!";
  }
  if (!values.other_name){
   errors.other_name = "Another name other than Surname is required!";
  }
  if (!values.birth_date){
   errors.birth_date = "Date of birth is required!";
  }
  if (!values.email){
   errors.email = "Email is required!";
  } else if (!regex.test(values.email)){
   errors.email = "Invalid email!";
  }
  if (!values.contact1){
   errors.contact1 = "Contacts is required!";
  }
  if (!values.gender){
   errors.gender = "Please state your gender!";
  }
  if (!values.address){
   errors.address = "Please state your address!";
  }
  return errors;
 
};

   
  return (
    <div className='dss-contents'>
   
     <div className='hay'>
            <img cay src={Logo} id='logo-png' alt='' srcSet='' />
          </div>
    <div className='right-sides'>
    <div className='top-rights'>
    <p>Already have an Account?
    <Link id='Links-signin' to ="/AdminLogin">Sign In</Link>
    </p>
    </div>
  
    <div className='body-rights'>
      <div className='containersy'>

        <h1 className='cvb'>Create Account!</h1>
       
        <form onSubmit={handleSubmit}>
         <div className='loki'>
          <h5 className='hac'>Surname</h5>
         <input type='text' className='nm inputs' onChange={handleChange} value= {formValues.surname} name='surname' id='fname'></input>
          </div>
          <p className='lon'>{formErrors.surname}</p>
          <div className='loki'>
          <h5 className='hac'>Other Names</h5>
          <input className='nm inputs' type='text' name='other_name' onChange={handleChange} value= {formValues.other_name}   id='oname'/>
          </div>
          <p className='lon'>{formErrors.other_name}</p>
          <div className='loki'>
          <h5 className='hac'>Date Of Birth</h5>
          <input className='nm inputs'  type='date' id='birthday' name='birth_date' onChange={handleChange} value= {formValues.birth_date} />
          </div>
          <p className='lon'>{formErrors.birth_date}</p>
          <div className='loki'>
          <h5 className='hac'>Email</h5>
          <input className='nm inputs'  type='email' name='email' id='email1' onChange={handleChange} value= {formValues.email} />
          </div>
          <p className='lon'>{formErrors.email}</p>
          <div className='loki'>
          <h5 className='hac'>Address</h5>
          <input className='nm inputs'  type='text' name='address' id='address' onChange={handleChange} value= {formValues.address} />
          </div>
          <p className='lon'>{formErrors.address}</p>
          <div className='loki'>
          <h5 className='hac'>Phone</h5>
          <input className='nm inputs' type="tel"   id="phone" name="contact1" onChange={handleChange} value= {formValues.contact1} />
          </div>
          <p className='lon'>{formErrors.contact1}</p>
          <div className='loki'>
          <h5 className='hac'>Other Phone</h5>
          <input className='nm inputs' type="tel"  id="phone" name="contact2" onChange={handleChange} value= {formValues.contact2} />
          </div>
          <div className='loki'>
          <h5 className='hac'>Gender</h5>
          <input className='nm inputs'  type='text'  name='gender' placeholder='Male/Female' id='gender' onChange={handleChange} value= {formValues.gender} />
          </div>
          <p className='lon'>{formErrors.gender}</p>
          {isloading && <div>LOADING...</div>}
        {/* //  <input type='submit' onClick="validation();"  id='klo' className='submay' value='Submit' /> */}
         <input type='submit'  id='klo' name='xcz' className='submay' value='Submit' />
      
       
         </form>

      </div>
      
 
    </div>
   
    </div>
 

  

     </div>

     
      
     
  )
}

export default AdminSignUp