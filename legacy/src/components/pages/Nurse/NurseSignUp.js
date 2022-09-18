import React, {useState} from 'react'
import './NurseSignUp.css'
import Logo from '../../../imgs/logo2.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import registerImgs from '../../../imgs/nursesignup.jpg'

const NurseSignUp = () => {

   const handlesubmit=(e)=>{
      e.preventDefault();
    }
  
    const [email,setemail]=useState('');
    const[Fusername, setFusername]=useState('');
    const [Susername,setSusername]=useState('');
    const [bd,setbd]=useState('');
    const [age,setage]=useState('');
    const [address,setaddress]=useState('');
    const [phone,setphone]=useState('');
    const [gender,setgender]=useState('');
  
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
              <h5 className='hac'>First Name</h5>
             <input type='text' className='inputs' name='Fname' value={Fusername} onChange={(e)=>{setFusername(e.target.value)}} id='fname'></input>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Other Names</h5>
              <input className='inputs' type='text' name='Oname'  value={Susername} onChange={(e)=>{setSusername(e.target.value)}} id='oname'/>
              </div>
              <div className='inner-group'>
              <h5>Date Of Birth</h5>
              <input className='inputs'  value={bd} onChange={(e)=>{setbd(e.target.value)}} type='date' id='birthday' name='birthday'/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Age</h5>
              <input className='inputs'  value={age} onChange={(e)=>{setage(e.target.value)}} type='number' name='Age' id='age'/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Email</h5>
              <input className='inputs'  value={email} onChange={(e)=>{setemail(e.target.value)}} type='email' name='Email' id='email1'/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Address</h5>
              <input className='inputs'  value={address} onChange={(e)=>{setaddress(e.target.value)}} type='text' name='Address' id='address'/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Phone</h5>
              <input className='inputs' type="tel"  value={phone} onChange={(e)=>{setphone(e.target.value)}} id="phone" name="phone" pattern="[0-9]{10}"/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Other Phone</h5>
              <input className='inputs' type="tel"  value={phone} onChange={(e)=>{setphone(e.target.value)}} id="phone" name="phone" pattern="[0-9]{10}"/>
              </div>
              <div className='inner-group'>
              <h5 className='hac'>Gender</h5>
              <input className='inputs'  value={gender} onChange={(e)=>{setgender(e.target.value)}} type='text' name='Gender' placeholder='Male/Female/Undefined' id='gender'/>
              </div>

             
             <input type='submit' id='sbtn' value='Submit'/>
             </form>
          </div>

        </div>

    </div>
   </div>
  )
}

export default NurseSignUp