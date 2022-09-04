import React from 'react'
import './LandingPage.css'
import NavBar from './Navbar'
import Comp from '../../imgs/comp.png'
import Back from '../../imgs/Doc.png'
import Arrow from '../../imgs/arrow.png'
import Hospital from '../../imgs/hospital2.png'
import Object1 from '../../imgs/object1.png'
import Object2 from '../../imgs/object2.png'
import Object3 from '../../imgs/object3.png'
import Object4 from '../../imgs/object4.png'
import Object5 from '../../imgs/object5.png'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='main'>
       <div className="LGlass">
        
          <NavBar/>
          <div className='body'>
          <h1>Take good care of <br/> your <span>health</span></h1>
          <img src={Comp} alt='Laptop' className="image"></img>
          <div className='back'>
            <img src={Back} alt="" className='back-image'></img>
          </div>
          <p className="body-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. 
            
          </p>
          <Button variant="success" className='main-btn' active>Get Started</Button>
          <div className='scroll'>
            <p className='scroll-p'>Scroll Down to the Who are you section </p>
            <img src={Arrow} alt='' className='arrow'></img>
          </div>
          <div className='p'>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. </p>
          <img src={Object1} alt='' className='object'></img>
          <img src={Object2} alt='' className='object'></img>
          <img src={Object3} alt='' className='object'></img>
          <img src={Object4} alt='' className='object'></img>
          <img src={Object5} alt='' className='object'></img>
          </div>
          
          <div className='hospital'>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam scelerisque tortor nec aliquam. Quisque maximus posuere purus sit amet gravida. Fusce nisi ex, pharetra sit amet eros vel, venenatis eleifend nibh. </p>
            <img src={Hospital} alt="" className='hospital-image'></img>
          </div>
          <div className='Who-are-you'>

          <Link to ="/AdminPage">
             <Button variant="primary" className='' active>Admin</Button>
          </Link>
          <Link to ="/DoctorPage">
          <Button variant="danger" className='Doc-btn' active>Doctor</Button>
          </Link>
          
          <Link to ="/NursePage">
             <Button variant="warning" className='Nurse-btn' active>Nurse</Button>
           </Link>
  
             </div>
          </div>
         </div>
    </div>
  )
}

export default LandingPage