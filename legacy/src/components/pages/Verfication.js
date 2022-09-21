import React from 'react'
import './Verification.css'
import Logo from '../../imgs/logo2.png'
import Security from '../../imgs/security.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
import {useForm} from 'react-hook-form'





    
const Verfication = () => {


    const {handleSubmit, register, reset , formState:{errors}}   = useForm();
    const navigate = useNavigate()
    const name = 'Essuman'
    const verify = (data) => {
    
    console.log(data)

    const requestOptions = {
        method : "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(data)
    }
    console.log(data)

    // fetch('http://127.0.0.1:5000/hms/verification', requestOptions)
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data)

    //         if(data.access==='granted')
    //         {
    //             navigate('/LandingPage') 
    //         }
    //         else{
    //                 navigate('/')
    //             }
    //     })
    navigate('/LandingPage') 
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
         <img src={Logo} alt="" className = "Vlogo"></img>
         <h1>Welcome!!</h1>
         <h2>Please Enter The Unique Code</h2>
           <form>
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Code</label>
                    <input type="password" className="form-control" id="password" pattern="[0-9]{4}"
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
            </Link>
            </div>
            </form>
         <img align = "left" src= {Security} alt="" className ="Secure"></img>
      </div>
      </div>
    </motion.div>
  )
}

export default Verfication