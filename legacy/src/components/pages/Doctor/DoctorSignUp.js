import React, {useState} from 'react'
import './DoctorSignUp.css'
import Logo from '../../../imgs/logo2.png'
// import registerImg from '../../../imgs/415.jpg'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const DoctorSignUp = () => {


  const {register, handleSubmit} = useForm();
  const signUp=(data)=>{
    data["qualification"] = "Doctor"
    //e.preventDefault();
    console.log(data)

    const requestOptions ={
      method : "POST",
      headers : {
        'content-type' : 'application/json'
      },
        body:JSON.stringify(data)
    }

    fetch("/user/signup", requestOptions)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data)
      })

  }

  // const [email,setemail]=useState('');
  // const[Fusername, setFusername]=useState('');
  // const [Susername,setSusername]=useState('');
  // const [bd,setbd]=useState('');
  // const [age,setage]=useState('');
  // const [address,setaddress]=useState('');
  // const [phone,setphone]=useState('');
  // const [gender,setgender]=useState('');

  return (
   
      <div className='dss-contents'>
        <div className='left-sides'>
          <div className='header'>
            <img src={Logo} id='logo-png' alt='' srcSet='' />
          </div>
          <div className='shoulders'>
            {/* <img src={registerImg} id='reg-gng' alt='' srcSet='' /> */}
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
        <Link id='Links-signin' to ="/DoctorLogin">Sign In</Link>
        </p>
        </div>
        <div className='body-rights'>
          <div className='containers'>
            <h1 className='cr'>Create Account!</h1>
            <form >
             <div className='inner-group'>
              <h5 className='hac'>Surname</h5>
             <input type='text' className='inputs' name='Fname' {...register("surname")} id='fname'></input>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Other Names</h5>
              <input className='inputs' type='text' name='Oname' {...register("other_name")}  id='oname'/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Date Of Birth</h5>
              <input className='inputs'  type='date' id='birthday' name='birthday'  {...register("birth_date")}/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Email</h5>
              <input className='inputs'  type='email' name='Email' id='email1' {...register("email")}/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Address</h5>
              <input className='inputs'  type='text' name='Address' id='address' {...register("address")}/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Phone</h5>
              <input className='inputs' type="tel"   id="phone" name="phone" pattern="[0-9]{10}" {...register("contact1")}/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Other Phone</h5>
              <input className='inputs' type="tel"  id="phone" name="phone" pattern="[0-9]{10}" {...register("contact2")}/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Gender</h5>
              <input className='inputs'  type='text'  name='Gender' placeholder='Male/Female/Undefined' id='gender'  {...register("gender")}/>
              </div>

             
             <input type='submit' id='sbtn' value='Submit' onClick={handleSubmit(signUp)}/>
             </form>
          </div>

        </div>
        </div>
     

      
    
         </div>
        
      
  )
}

export default DoctorSignUp