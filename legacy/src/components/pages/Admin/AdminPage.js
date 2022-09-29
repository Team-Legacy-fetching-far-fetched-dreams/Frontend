import React,{useState} from 'react'
import './AdminPage.css'
import Logo from '../../../imgs/logo2.png'
import Admin2 from '../../../imgs/Admin2.png'
import Admin3 from '../../../imgs/Admin3.png'
import Admin4 from '../../../imgs/Admin4.png'
import {motion} from 'framer-motion/dist/framer-motion'
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom'


const className='hello' 



const AdminPage = () => {

  // const diaa = () => {
  //   fetch("http://127.0.0.1:5000/patients/vital/1")
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //   })
  // }
  const navigate = useNavigate()
  const [openMefu, setOpenMefu] = useState(false)
  
  return (
    <motion.div className='A-m'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
     <div className='A-g'>
        <div className = "A-h">
            <img src={Logo} alt="" className = "A-logo"></img>  
        </div>
     <Button as="sub" className="btn" id = "back-btn" onClick={() => navigate(-1)} >Back</Button>
        <div className='A-content'>
             <motion.h1
             initial=  'hidden' animate='visible' variants={{
              hidden:{
                scale: 0.8,
                opacity: 0
              },
              visible:{
                scale: 1,
                opacity:1,
                transition:{
                  delay: 0.4
                }
              },
             }}
             >Hello Administrator,</motion.h1> 
             <p className="A-p">
            You can access various features after Login/SignUp. Some of the features include viewing list of patients,registers a patient and many more.
          </p>
          <img src={Admin4} alt="" className = "A-image4"></img>
          <img src={Admin2} alt="" className = "A-image2"></img>  
          <img src={Admin3} alt="" className = "A-image3"></img> 
          
  
      <div className='sl-btn'>

      

         <Link to ="/AdminSignUp">
             <Button className='A-signup' active>SignUp</Button>
          </Link>
          <Link to ="/AdminLogin">
             <Button className='A-login' active>Login</Button>
          </Link>
          <Link to ="/Mefu">
             <Button className='A-login' active>Dia</Button>
          </Link>
        
      
        
      
       </div>
      
        </div>
     </div>
    </motion.div>
  )
}

export default AdminPage