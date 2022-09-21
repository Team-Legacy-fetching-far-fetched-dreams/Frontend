import React, {useState, useEffect} from 'react'
import './DoctorSignUp.css'
import Logo from '../../../imgs/logo2.png'
import registerImg from '../../../imgs/415.jpg'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import imgs from '../../../imgs/patient image.png'
const PatientForm = () => {

  const initialValues = {surname: "", other_names: "", email: "", date_of_birth: "", address: "", contact1: "", contact2: "", gender: ""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }
    const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues)
  }

  useEffect(() => {
    //  console.log(formErrors);
     if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);


      const requestOptions ={
        method : "POST",
        headers : {
          'content-type' : 'application/json'
        },
          body: JSON.stringify(formValues)
      }

      if (Object.values(formErrors).length === 0){
        fetch("/patients",requestOptions)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data)
        })
      }
     }
},[formErrors])




  // const [email,setemail]=useState('');
  // const[Fusername, setFusername]=useState('');
  // const [Susername,setSusername]=useState('');
  // const [bd,setbd]=useState('');
  // const [age,setage]=useState('');
  // const [address,setaddress]=useState('');
  // const [phone,setphone]=useState('');
  // const [gender,setgender]=useState('');
  

  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.surname){
     errors.surname = "Surname is required!";
    }
    if (!values.other_names){
     errors.other_names = "Another name other than Surname is required!";
    }
    if (!values.date_of_birth){
     errors.date_of_birth = "Date of birth is required!";
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


  // const {register, handleSubmit} = useForm();
  // const signUp=(data)=>{
  //   //e.preventDefault();
  //   console.log(data)
  // }

   
  return (
   
      <div className='dss-contents'>
        <div className='left-sides'>
          <div className='header'>
            <img src={Logo} id='logo-png' alt='' srcSet='' />
          </div>
          <div className='shoulders'>
            <img src={imgs} id='reg-gng' alt='' srcSet='' />
          </div>
          <h1 className='p1'>Legacy Healthcare</h1>
          <p className='p1'>Legacy Health’s mission is to positively impact the well-being of every individual in
our community. We’re creating easy access to providers, comprehensive services,
and friendly care right in your community. That’s what makes Legacy Health
simply better.</p>
        </div>
        <div className='right-sides'>
        <div className='top-rights'>
        <p>Already have an Account?
        <Link id='Links-signin' to ="/PatientForm">Sign In</Link>
        </p>
        </div>
        <div className='body-rights'>
          <div className='containers'>
            <h1 className='cr'>Create Account!</h1>
            <form onSubmit={handleSubmit}>
             <div className='inner-group'>
              <h5 className='hac'>Surname</h5>
             <input type='text' className='inputs' onChange={handleChange} value= {formValues.surname} name='surname' id='fname'></input>
              </div>
              <p className='err'>{formErrors.surname}</p>
              <div className='inner-group'>
              <h5 className='hac'>Other Names</h5>
              <input className='inputs' type='text' name='other_names' onChange={handleChange} value= {formValues.other_names}   id='oname'/>
              </div>
              <p className='err'>{formErrors.other_name}</p>
              <div className='inner-group'>
              <h5 className='hac'>Date Of Birth</h5>
              <input className='inputs'  type='date' id='birthday' name='date_of_birth' onChange={handleChange} value= {formValues.date_of_birth} />
              </div>
              <p className='err'>{formErrors.date_of_birth}</p>
              <div className='inner-group'>
              <h5 className='hac'>Email</h5>
              <input className='inputs'  type='email' name='email' id='email1' onChange={handleChange} value= {formValues.email} />
              </div>
              <p className='err'>{formErrors.email}</p>
              <div className='inner-group'>
              <h5 className='hac'>Address</h5>
              <input className='inputs'  type='text' name='address' id='address' onChange={handleChange} value= {formValues.address} />
              </div>
              <p className='err'>{formErrors.address}</p>
              <div className='inner-group'>
              <h5 className='hac'>Phone</h5>
              <input className='inputs' type="tel"   id="phone" name="contact1" onChange={handleChange} value= {formValues.contact1} />
              </div>
              <p className='err'>{formErrors.contact1}</p>
              <div className='inner-group'>
              <h5 className='hac'>Other Phone</h5>
              <input className='inputs' type="tel"  id="phone" name="contact2" onChange={handleChange} value= {formValues.contact2} />
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Gender</h5>
              <input className='inputs'  type='text'  name='gender' placeholder='Male/Female' id='gender' onChange={handleChange} value= {formValues.gender} />
              </div>
              <p className='err'>{formErrors.gender}</p>

             
             <input type='submit' id='sbtn' className='subway' value='Submit' />
             </form>
          </div>

        </div>
        </div>
     

      
    
         </div>
        
      
  )
}

export default PatientForm