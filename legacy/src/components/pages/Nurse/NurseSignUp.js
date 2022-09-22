import React, {useState, useEffect} from 'react'
import './NurseSignUp.css'
import Logo from '../../../imgs/logo2.png'
import {Link} from 'react-router-dom'
import registerImgs from '../../../imgs/nursesignup.jpg'

const NurseSignUp = () => {
  const initialValues = {surname: "", other_name: "", email: "", birth_date: "", address: "", contact1: "", contact2: "", gender: ""};
  const [formValues,setFormValues] = useState( initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }


   const handlesubmit=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      formValues["qualification"] = "Nurse"
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
          fetch("http://127.0.0.1:5000/user/signup", requestOptions)
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
    <div className='left-sides'>
       <div className = "header">
           <img src={Logo} id='logo-png' alt='' srcSet='' ></img>
       </div>
       <div className='chest'>
            <img src={registerImgs} id='reg-svg' alt='' srcSet='' />
            </div>

            <h1 className='p1'>Legacy Healthcare</h1>
          <p className='p3 p1'>Legacy Health’s mission is to positively impact the well-being of every individual in
our community. We’re creating easy access to providers, comprehensive services,
and friendly care right in your community. That’s what makes Legacy Health
simply better.</p>
        </div>
        <div className='right-sides'>
        <div className='top-rights'>
        <p>Already have an Account?
 <Link id='Links-signin' to ="/NurseLogin">Sign In</Link>
       </p>
</div>
<div className='body-rights'>
          <div className='containers'>
            <h1 className='cr'>Create Account!</h1>
            <form onSubmit={handlesubmit}>
             <div className='inner-group'>
              <h5 className='hac'>Surname</h5>
             <input type='text' className='inputs' name='surname' value={formValues.surname} onChange={handleChange} id='fname'></input>
              </div>
              <p className='err'>{formErrors.surname}</p>
              <div className='inner-group'>
              <h5 className='hac'>Other Names</h5>
              <input className='inputs' type='text' name='other_name'  value={formValues.other_name} onChange={handleChange} id='oname'/>
              </div>
              <p className='err'>{formErrors.other_name}</p>
              <div className='inner-group'>
              <h5>Date Of Birth</h5>
              <input className='inputs'  value={formValues.birth_date} onChange= {handleChange} type='date' id='birthday' name='birth_date'/>
              </div>
              <p className='err'>{formErrors.birth_date}</p>
              {/* <div className='inner-group'> */}
              {/* <h5 className='hac'>Age</h5>
              <input className='inputs'  value={age} onChan}} type='number' name='Age' id='age'/>
              </div> */}
              <div className='inner-group'>
              <h5 className='hac'>Email</h5>
              <input className='inputs'   onChange = {handleChange} value={formValues.email} type='email' name='email' id='email1'/>
              </div>
              <p className='err'>{formErrors.email}</p>
              <div className='inner-group'>
              <h5 className='hac'>Address</h5>
              <input className='inputs'  value={formValues.address} onChange={handleChange} type='text' name='address' id='address'/>
              </div>
              <p className='err'>{formErrors.address}</p>
              <div className='inner-group'>
              <h5 className='hac'>Phone</h5>
              <input className='inputs' type="tel"  value={formValues.contact1} onChange={handleChange} id="phone" name="contact1" pattern="[0-9]{10}"/>
              </div>
              <p className='err'>{formErrors.contact1}</p>
              <div className='inner-group'>
              <h5 className='hac'>Other Phone</h5>
              <input className='inputs' type="tel"  value={formValues.contact2} onChange={handleChange} id="phone" name="contact2" pattern="[0-9]{10}"/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Gender</h5>
              <input className='inputs'  value={formValues.gender} onChange={handleChange} type='text' name='gender' placeholder='Male/Female' id='gender'/>
              </div>
              <p className='err'>{formErrors.gender}</p>

             
             <input type='submit' id='sbtn' value='Submit'/>
             </form>
          </div>

        </div>

    </div>
   </div>
  )
}

export default NurseSignUp