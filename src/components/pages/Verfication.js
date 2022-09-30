import React, { useState } from 'react'
import './Verification.css'
import Logo from '../../imgs/logo2.png'
import Security from '../../imgs/security.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert';
// import {Link, useNavigate} from 'react-router-dom'
// import {motion} from 'framer-motion/dist/framer-motion'
// import {useForm} from 'react-hook-form'





    
// const Verfication = () => {


//     const {handleSubmit, register, reset , formState:{errors}}   = useForm();
//     const navigate = useNavigate()
//     const name = 'Essuman'
//     const verify = (data) => {
    
//     console.log(data)

//     const requestOptions = {
//         method : "POST",
//         headers : {
//             'content-type' : 'application/json'
//         },
//         body:JSON.stringify(data)
//     }
//     console.log(data)

//     fetch('/hms/verification', requestOptions)
//         .then((res)=>res.json())
//         .then(data=>{
//             console.log(data)

//             if(data.access==='granted')
//             {
//                 navigate('/LandingPage') 
//             }
//             else{
//                     navigate('/')
//                 }
//         })

//         reset()

//     }
 
 

import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
import {Button,Form} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
  
const Verfication = () => {
 const [access, setAccess] = useState(true)
  const showAlert= () =>{
    return(
    <Alert variant="primary">
      This is a alert—check it out!
    </Alert>
    )
  } 

  const goToAbout=()=>{
    navigate("/AboutUs")
  }
  const goToContact=()=>{
    navigate("/ContactUs")
  }

const {register, reset, handleSubmit, formState:{errors}} = useForm();
const navigate = useNavigate()

  const submitForm=(data)=>{
console.log(data.pin)

const body={
  pin:data.pin
}

    const requestOptions={
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(body)
    }

    console.log(data)


    fetch('/hms/verification', requestOptions)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)

      if(data.access==='granted'){
        navigate('/LandingPage')}
        else{

          setAccess(false)
        } 
    })
    

    reset()
  }
  
  return (
    <motion.div className = "ver"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    
    >
    <div className="AppGlass">
      <div align="center" className = "container">
        <div className="AusCusLink">
        <Button onClick={goToAbout}>
        AboutUs
        </Button>
        <Button onClick={goToContact}>
        ContactUs
        </Button>
        </div>
         <img src={Logo} alt="" className = "Vlogo"></img>
         <h1>Welcome!!</h1>
         <h2>Please Enter The Unique Code</h2>
         <div className="form">
         <div className='pic_div'>
               <img align = "left" src= {Security} alt="" className ="Secure"></img>
            </div>
           <Form>
            <Form.Group>
                <div className="mb-3">
                     <label htmlFor="password" className="form-label">Code</label>
                    {/* <input type="password" className="form-control" id="password" pattern="[0-9]{4}"
                        {...register('pin', {
                            valueAsNumber: true,
                            required: true,


                        })
                    } 
                        
                        />
                </div>
    {errors.pin && <p style={{color: "red"}}><small>A 4 digit code is required</small></p>}
               

            <Link to ="/LandingPage">
                <button type="submit" className="btn btn-primary" id = 'btn' onClick ={handleSubmit(verify)} >OK</button>
            </Link>
            <Link to = {{pathname: `/TrialPage/:${name}`, state : {age:12}}} >
                <button type="submit" className="btn btn-primary" >Go Trial Page</button>
            </Link> */}
                    <input type="password" className="form-control" id="password" placeholder="* * * *"
                     {...register("pin", {
                      valueAsNumber: true , 
                      required: true , 
                      maxLength: {
                        value: 4,
                        message: "ruebasc"
                      }
                    })}
                        />
                  
                </div>
                {errors.pin && <p style={{color:"red"}}><small>A 4 digit code is required</small></p> }
                {!access && <p style={{color:"red"}}><small>Invalid Pin</small></p> }
                {/* {errors.pin?.message && <p>{errors.pin?.message}</p>} */}
                {/* {errors.pin?.type==="maxLength" && (<p style={{color:"red"}}>{errors.pin.message}</p>)} */}
                </Form.Group>
                <Form.Group>
                  {/* <Link to="/LandingPage"> */}
                   <Button as="sub" className="btn btn-primary" id = "btn" onClick={handleSubmit(submitForm)} >OK</Button>
                   {/* </Link> */}
                </Form.Group>
            </Form>
            </div>
      </div>
      </div>
    </motion.div>
  )
}

export default Verfication