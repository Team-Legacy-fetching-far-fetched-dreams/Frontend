import React  from 'react'
import './Verification.css'
import Logo from '../../imgs/logo2.png'
import Security from '../../imgs/security.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion/dist/framer-motion'
import {Button,Form} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
  
const Verfication = () => {


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


    fetch('http://127.0.0.1:5000/hms/verification', requestOptions)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)

      {(data.access==='granted')?navigate('/LandingPage') :navigate('/')}
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