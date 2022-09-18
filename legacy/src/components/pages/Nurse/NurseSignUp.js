import React, {useState} from 'react'
import './NurseSignUp.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import registerImgs from '../../../imgs/nursesignup.jpg'
import {useForm} from 'react-hook-form'

const NurseSignUp = () => {


   const {register, handleSubmit}= useForm();
   const signUp=(data)=>{
    console.log(data)
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
            <form onSubmit={handleSubmit}>
             <div className='inner-group'>
              <h5>SurName</h5>
             <input type='text' className='inputs' name='Fname' id='fname' {...register("surname")}></input>
              </div>
              <div className='inner-group'>
              <h5>Other Names</h5>
              <input className='inputs' type='text' name='Oname'  id='oname' {...register("other_name")}/>
              </div>
              <div className='inner-group'>
              <h5>Date Of Birth</h5>
              <input className='inputs'  type='date' id='birthday' name='birthday' {...register("birth_date")}/>
              </div>
              <div className='inner-group'>
              <h5>Email</h5>
              <input className='inputs'   type='email' name='Email' id='email1' {...register("email")}/>
              </div>
              <div className='inner-group'>
              <h5>Address</h5>
              <input className='inputs'   type='text' name='Address' id='address' {...register("address")}/>
              </div>
              <div className='inner-group'>
              <h5>Phone</h5>
              <input className='inputs' type="tel"   id="phone" name="phone" pattern="[0-9]{10}"  {...register("contact1")}/>
              </div>
              <div className='inner-group'>
              <h5>Other Phone</h5>
              <input className='inputs' type="tel"   id="phone" name="phone" pattern="[0-9]{10}" {...register("contact2")}/>
              </div>
              <div className='inner-group'>
              <h5>Gender</h5>
              <input className='inputs'   type='text' name='Gender' placeholder='Male/Female/Undefined' id='gender' {...register("gender")}/>
              </div>

             
             <input type='submit' id='sbtn' value='Submit' onClick={handleSubmit(signUp)}/>
             </form>
          </div>

        </div>

    </div>
   </div>
  )
}

export default NurseSignUp